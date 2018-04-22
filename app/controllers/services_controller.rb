class ServicesController < ApplicationController
  before_action :authenticate_user!
  before_action :find_service, except: [:new, :index, :create]
  before_action :authorize_user!, only: [:destroy]

  def create
    @client = Client.find params[:client_id]
    @service = Service.new service_params
    @service.client = @client
    @service.user = current_user

    if @service.save
      redirect_to client_path(@client)
    else
      @services = @client.services.order(created_at: :desc)
      render 'clients/show'
    end
  end

  def new
    @service = Service.new
  end

  def show
  end
  
  def index
    @services = Service.all.order(created_at: :desc)
  end


  def destroy
    @service.destroy
    redirect_to client_path(@service.client)
  end

  private
  def service_params
    params.require(:service).permit(:title, :session, :detail, :note)
  end

  def find_service
    @service ||= Service.find params[:id]
  end

  def authorize_user!
    unless can?(:manage, @service)
      flash[:alert] = 'Access Denied!'
      redirect_to client_path(@service.client)
    end
  end
end
