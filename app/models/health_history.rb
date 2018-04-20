class HealthHistory < ApplicationRecord
  belongs_to :client

  has_many :medical_historings, dependent: :destroy
  has_many :medical_histories, through: :medical_historings
end
