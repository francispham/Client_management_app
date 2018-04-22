class CreateServices < ActiveRecord::Migration[5.2]
  def change
    create_table :services do |t|
      t.string :title
      t.numeric :session
      t.text :detail
      t.text :note
      t.references :client, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
