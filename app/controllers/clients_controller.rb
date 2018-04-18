class ClientsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  before_action :find_client, except: [:new, :index, :create]

  before_action :authorize_user!, only: [:edit, :update, :destroy]

  def index
    @clients = Client.all.order(created_at: :desc)
  end

  def show
    @laser_services = LaserService.where(client_id: @client.id)
  end

  def new
    @client = Client.new
  end

  def create
    @client = Client.new client_params
    @client.user = current_user

    if @client.save
      redirect_to client_path(@client)
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @client.update client_params
      redirect_to client_path(@client)
    else
      render :edit
    end
  end

  def destroy
    @client.destroy
    redirect_to clients_path
  end


  private
  def find_client
    @client = Client.find params[:id]
  end

  def client_params
    params.require(:client).permit(:first_name, :last_name, :email,
    :phone_number, :age, :address, :gender, :postal_code, category_ids: [])
  end

  def authorize_user!
    unless can?(:curd, @client)
      flash[:alert] = "Access Denied!"
      redirect_to client_path(@client)
    end
  end

end
