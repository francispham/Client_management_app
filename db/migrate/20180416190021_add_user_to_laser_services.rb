class AddUserToLaserServices < ActiveRecord::Migration[5.1]
  def change
    add_reference :laser_services, :user, foreign_key: true
  end
end
