class CreateHealthHistories < ActiveRecord::Migration[5.1]
  def change
    create_table :health_histories do |t|
      t.text :medical_condition
      t.text :had_botox
      t.text :had_tatoos
      t.text :had_endocrinologiiest
      t.text :had_gold_therapy
      t.text :sunscreen
      t.numeric :spf
      t.boolean :sunbathe?
      t.boolean :sunbathe_sixweek?
      t.boolean :tanning_bed?
      t.boolean :tanning_sixweek?
      t.text :ethic
      t.boolean :pregnant?
      t.boolean :becoming_pregnant?
      t.date :nursing_until
      t.boolean :menopausal?
      t.boolean :hormone_replacement?
      t.string :acne_menstrual_cycle
      t.text :birth_control
      t.references :client, foreign_key: true

      t.timestamps
    end
  end
end
