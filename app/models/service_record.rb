class ServiceRecord < ApplicationRecord
  belongs_to :user
  belongs_to :client
  belongs_to :service
end
