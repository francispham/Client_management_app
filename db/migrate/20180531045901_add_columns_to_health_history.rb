class AddColumnsToHealthHistory < ActiveRecord::Migration[5.2]
  def change
    add_column :health_histories, :laser_areas, :string
    add_column :health_histories, :color_hair, :string
    add_column :health_histories, :treated_area, :string
  end
end
