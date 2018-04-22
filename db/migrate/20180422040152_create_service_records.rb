class CreateServiceRecords < ActiveRecord::Migration[5.2]
  def change
    create_table :service_records do |t|
      t.text :treatment
      t.time :start
      t.time :end
      t.text :observations
      t.string :esthetician
      t.references :user, foreign_key: true
      t.references :client, foreign_key: true
      t.references :service, foreign_key: true

      t.timestamps
    end
  end
end
