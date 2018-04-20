class CreateClientServiceRecords < ActiveRecord::Migration[5.1]
  def change
    create_table :client_service_records do |t|
      t.text :name
      t.text :treatment
      t.time :start
      t.time :end
      t.text :observations
      t.string :esthetician
      t.references :client, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
