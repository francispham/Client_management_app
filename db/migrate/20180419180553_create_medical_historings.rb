class CreateMedicalHistorings < ActiveRecord::Migration[5.1]
  def change
    create_table :medical_historings do |t|
      t.references :health_history, foreign_key: true
      t.references :medical_history, foreign_key: true

      t.timestamps
    end
  end
end
