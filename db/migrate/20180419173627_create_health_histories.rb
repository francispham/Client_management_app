class CreateHealthHistories < ActiveRecord::Migration[5.1]
  def change
    create_table :health_histories do |t|
      t.text :had_botox
      t.text :had_tatoos
      t.text :had_endocrinologiest
      t.text :had_gold_therapy
      t.text :sunscreen
      t.numeric :spf
      t.string :sunbathe?
      t.string :sunbathe_sixweek?
      t.string :tanning_bed?
      t.string :tanning_sixweek?
      t.text :ethic
      t.string :pregnant?
      t.string :becoming_pregnant?
      t.date :nursing_until
      t.string :menopausal?
      t.string :hormone_replacement?
      t.string :acne_menstrual_cycle
      t.text :birth_control
      t.references :client, foreign_key: true

      t.timestamps
    end
  end
end
