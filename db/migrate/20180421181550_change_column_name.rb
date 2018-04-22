class ChangeColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :health_histories, :sunbathe?, :sunbathe
    rename_column :health_histories, :sunbathe_sixweek?, :sunbathe_sixweek
    rename_column :health_histories, :tanning_bed?, :tanning_bed
    rename_column :health_histories, :tanning_sixweek?, :tanning_sixweek
    rename_column :health_histories, :pregnant?, :pregnant
    rename_column :health_histories, :becoming_pregnant?, :becoming_pregnant
    rename_column :health_histories, :menopausal?, :menopausal
    rename_column :health_histories, :hormone_replacement?, :hormone_replacement
  end
end
