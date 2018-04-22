class ServiceRecordsController < ApplicationController
  before_action :authenticate_user!
  before_action :find_service_record, :authorize_user!, only: [:destroy]

def create
  byebug
  @service = Service.find params[:id]
  @service_record = ServiceRecord.new service_record_params
  @service_record.service = @service
  @service_record.client = @client
  @service_record.user = current_user

  if @service_record.save
    redirect_to service_record_path(@client)
  else
    # @service_records = @service.service_records.order(created_at: :desc)
    render :file => 'public/404.html', :status => :not_found, :layout => false
  end
end

def new
  @service_record = ServiceRecord.new
end

def show
  @service = Service.find params[:id]
  @service_records = ServiceRecord.where(service_id: @service.id)
end

def destroy
  @service_record.destroy
  redirect_to service_path(@service_record.service)
end

private
def service_record_params
  params.require(:service_record).permit(:treatment, :start,
                                        :end, :observations, :esthetician)
end

def find_service_record
  @service_record ||= ServiceRecord.find params[:id]
end

def authorize_user!
  unless can?(:manage, @service_record)
    flash[:alert] = 'Access Denied!'
    redirect_to service_path(@service_record.service)
  end
end
end
