class LaserServicesController < ApplicationController
  before_action :authenticate_user!
  before_action :find_laser_service, :authorize_user!, only: [:destroy]

def create
  @client = Client.find params[:client_id]
  @laser_service = LaserService.new laser_service_params
  @laser_service.client = @client
  @laser_service.user = current_user

  if @laser_service.save
    redirect_to client_path(@client)
  else
    @laser_services = @client.laser_services.order(created_at: :desc)
    render 'clients/show'
  end
end


  def destroy
    @laser_service.destroy
    redirect_to client_path(@laser_service.client)
  end

  private
  def laser_service_params
    params.require(:laser_service).permit(:title, :health_condition)
  end

  def find_laser_service
    @laser_service ||= LaserService.find params[:id]
  end

  def authorize_user!
    unless can?(:manage, @laser_service)
      flash[:alert] = 'Access Denied!'
      redirect_to client_path(@laser_service.client)
    end
  end
end
