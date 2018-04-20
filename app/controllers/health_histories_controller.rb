class HealthHistoriesController < ApplicationController
  before_action :authenticate_user!
  before_action :find_health_history, :authorize_user!, only: [:destroy]

  def create
    @client = Client.find params[:client_id]
    @health_history = HealthHistory.new health_history_params
    @health_history.client = @client

    if @health_history.save
      redirect_to client_path(@client)
    else
      @health_histories = @client.health_histories.order(created_at: :desc)
      render 'clients/show'
    end
  end

  def new
    @health_history = HealthHistory.new
  end

  def show
    # byebug
    @client = Client.find params[:id]
    @health_histories = HealthHistory.where(client_id: @client.id)
  end

  def destroy
    @health_history.destroy
    redirect_to client_path(@health_history.client)
  end

  private
  def health_history_params
    params.require(:health_history).permit(:had_botox,
      :had_tatoos, :had_endocrinologiiest, :had_gold_therapy, :sunscreen,
      :spf, :sunbathe?, :sunbathe_sixweek?, :tanning_bed?, :tanning_sixweek?,
      :ethic, :pregnant?, :becoming_pregnant?, :nursing_until, :menopausal?,
      :hormone_replacement?, :acne_menstrual_cycle, :birth_control,
      medical_history_ids: []
    )
  end

  def find_health_history
    @health_history ||= HealthHistory.find params[:id]
  end

  def authorize_user!
    unless can?(:manage, @health_history)
      flash[:alert] = 'Access Denied!'
      redirect_to client_path(@health_history.client)
    end
  end
end
