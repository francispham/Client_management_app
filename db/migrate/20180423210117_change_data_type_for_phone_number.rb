class ChangeDataTypeForPhoneNumber < ActiveRecord::Migration[5.2]
  def change
    change_column :clients, :phone_number, :numeric
  end
end
