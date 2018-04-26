class AddDateToServiceRecords < ActiveRecord::Migration[5.2]
  def change
    add_column :service_records, :date, :date
  end
end
