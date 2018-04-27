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
      redirect_to service_path(@service)
    else
      render :file => 'public/404.html', :status => :not_found, :layout => false
    end
  end

  def new
    @service = Service.new
  end

  def edit
  end

  def show
    @client = Client.find_by(id: @service.client_id)
    @service_records = ServiceRecord.where(service_id: @service.id)
  end

  def index
    @client = Client.find params[:client_id]
    @services = Service.where(client_id: @client.id)
  end

  def update
    if @service.update service_params
      redirect_to service_path(@service)
    else
      render :edit
    end
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
