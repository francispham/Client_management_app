# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_04_22_002904) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "categorizings", force: :cascade do |t|
    t.string "name"
    t.bigint "client_id"
    t.bigint "category_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_categorizings_on_category_id"
    t.index ["client_id"], name: "index_categorizings_on_client_id"
  end

  create_table "clients", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.integer "phone_number"
    t.integer "age"
    t.string "address"
    t.string "postal_code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.string "gender"
    t.date "date_of_birth"
    t.index ["user_id"], name: "index_clients_on_user_id"
  end

  create_table "health_histories", force: :cascade do |t|
    t.text "had_botox"
    t.text "had_tatoos"
    t.text "had_endocrinologiest"
    t.text "had_gold_therapy"
    t.text "sunscreen"
    t.decimal "spf"
    t.string "sunbathe"
    t.string "sunbathe_sixweek"
    t.string "tanning_bed"
    t.string "tanning_sixweek"
    t.text "ethic"
    t.string "pregnant"
    t.string "becoming_pregnant"
    t.date "nursing_until"
    t.string "menopausal"
    t.string "hormone_replacement"
    t.string "acne_menstrual_cycle"
    t.text "birth_control"
    t.bigint "client_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["client_id"], name: "index_health_histories_on_client_id"
  end

  create_table "medical_histories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "medical_historings", force: :cascade do |t|
    t.bigint "health_history_id"
    t.bigint "medical_history_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["health_history_id"], name: "index_medical_historings_on_health_history_id"
    t.index ["medical_history_id"], name: "index_medical_historings_on_medical_history_id"
  end

  create_table "services", force: :cascade do |t|
    t.string "title"
    t.decimal "session"
    t.text "detail"
    t.text "note"
    t.bigint "client_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["client_id"], name: "index_services_on_client_id"
    t.index ["user_id"], name: "index_services_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_admin", default: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "categorizings", "categories"
  add_foreign_key "categorizings", "clients"
  add_foreign_key "clients", "users"
  add_foreign_key "health_histories", "clients"
  add_foreign_key "medical_historings", "health_histories"
  add_foreign_key "medical_historings", "medical_histories"
  add_foreign_key "services", "clients"
  add_foreign_key "services", "users"
end
