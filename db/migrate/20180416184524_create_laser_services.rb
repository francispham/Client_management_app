class CreateLaserServices < ActiveRecord::Migration[5.1]
  def change
    create_table :laser_services do |t|
      t.string :title
      t.text :health_condition
      t.references :client, foreign_key: true

      t.timestamps
    end
  end
end
