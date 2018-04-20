class CreateMedicalHistories < ActiveRecord::Migration[5.1]
  def change
    create_table :medical_histories do |t|
      t.string :name

      t.timestamps
    end
  end
end
