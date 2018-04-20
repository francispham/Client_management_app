class MedicalHistoring < ApplicationRecord
  belongs_to :health_history
  belongs_to :medical_history
end
