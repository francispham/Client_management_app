Rails.application.routes.draw do
  resource :session, only: [:new, :create, :destroy]
    resources :users, only: [:new, :create, :show]

  resources :clients, shallow: true do
    resources :laser_services, only: [:create, :destory, :new]
  end
  get('/', { to: 'welcome#index', as: :root })

  namespace :admin do
    resources :dashboard, only: [:index]
  end

end
