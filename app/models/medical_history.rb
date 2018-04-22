class MedicalHistory < ApplicationRecord
  has_many :medical_historings, dependent: :destroy
  has_many :health_histories, through: :medical_historings
end
