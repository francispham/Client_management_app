Rails.application.routes.draw do

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  resource :session, only: [:new, :create, :destroy]
    resources :users, only: [:create, :show]

  resources :clients, shallow: true do
    resources :services, only: [:new, :create, :destroy, :show, :update, :index, :edit]
    resources :health_histories, only: [:new, :create, :destroy, :show, :update, :index, :edit]
  end

  resources :health_histories, only: [:show]

  resources :services, only: [:show] do
    resources :service_records, only: [:new, :create, :destroy, :show, :update, :edit]
  end


  get('/app', { to: 'welcome#index', as: :root })

  namespace :admin do
    resources :dashboard, only: [:index]
  end

  match "/", to: 'landing#index', via: :all
  get "/*path", to: "landing#index", except: [:root, :dashboard]
end
