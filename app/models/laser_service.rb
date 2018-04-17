class LaserService < ApplicationRecord
  belongs_to :user
  belongs_to :client

  validates :health_condition, presence: true
end
