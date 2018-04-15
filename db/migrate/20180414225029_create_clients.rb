class CreateClients < ActiveRecord::Migration[5.1]
  def change
    create_table :clients do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.integer :phone_number
      t.integer :age
      t.string :address
      t.string :postal_code

      t.timestamps
    end
  end
end
