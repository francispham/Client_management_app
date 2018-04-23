Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  resource :session, only: [:new, :create, :destroy]
    # resources :users, only: [:new, :create, :show]
    resources :users, only: [:create, :show]

  resources :clients, shallow: true do
    resources :services, only: [:new, :create, :destoy, :show, :index]
    resources :health_histories, only: [:create, :destory, :new, :show]
  end

  resources :services, shallow: true, only:[] do
    resources :service_records, only: [:create, :destory, :new, :show]
  end

  get('/', { to: 'welcome#index', as: :root })

  namespace :admin do
    resources :dashboard, only: [:index]
  end

end
