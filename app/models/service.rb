class Service < ApplicationRecord
  belongs_to :client
  belongs_to :user
  has_many :service_records, dependent: :destroy
end
