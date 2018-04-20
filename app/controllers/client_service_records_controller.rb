class ClientServiceRecordsController < ApplicationController
  before_action :authenticate_user!
  before_action :find_client_service_record, :authorize_user!, only: [:destroy]

  def create
    @client = Client.find params[:client_id]
    @client_service_record = ClientServiceRecord.new client_service_record_params
    @client_service_record.client = @client
    @client_service_record.user = current_user

    if @client_service_record.save
      redirect_to client_path(@client)
    else
      @client_service_records = @client.client_service_records.order(created_at: :desc)
      render 'clients/show'
    end
  end

  def new
    @client_service_record = ClientServiceRecord.new
  end

  def show
    @client = Client.find params[:id]
    @client_service_records = ClientServiceRecord.where(client_id: @client.id)
  end

  def destroy
    @client_service_record.destroy
    redirect_to client_path(@client_service_record.client)
  end

  private
  def client_service_record_params
    params.require(:client_service_record).permit(:name, :treatment, :start,
                                          :end, :observations, :esthetician)
  end

  def find_client_service_record
    @client_service_record ||= ClientServiceRecord.find params[:id]
  end

  def authorize_user!
    unless can?(:manage, @client_service_record)
      flash[:alert] = 'Access Denied!'
      redirect_to client_path(@client_service_record.client)
    end
  end
end
