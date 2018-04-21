PASSWORD = 'supersecret'

User.destroy_all
Category.destroy_all
LaserService.destroy_all
Client.destroy_all

super_user = User.create(
  first_name: 'Jon',
  last_name: 'Snow',
  email: 'js@winterfell.gov',
  password: PASSWORD,
  is_admin: true
)



3.times.each do
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name

  User.create(
    first_name: first_name,
    last_name: last_name,
    email: "#{first_name.downcase}.#{last_name.downcase}@example.com",
    password: PASSWORD
  )
end

users = User.all

10.times.each do
  Category.create(
    name: Faker::Team.state
    # ['Laser hair removal', 'Microdermabrasion', 'Acne treatment',
    #        'Skin rejuvenation/Photorejuvnation',
    #        'Fillers (Juverderm/Restylane/Perlane)',
    #        'Varicose vein/Spider vein treatment',
    #        'Skin care advise/Products', 'Liver spots/Age spots',
    #        'Facial vein treatements', 'Botox', 'Rosacea', 'Thermage',
    #        'Body contouring']
  )
end

categories = Category.all

10.times.each do
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name

  c = Client.create(
    first_name: first_name,
    last_name: last_name,
    email: "#{first_name.downcase}.#{last_name.downcase}@example.com",
    phone_number: Faker::PhoneNumber.cell_phone,
    age: Faker::Number,
    address: Faker::Address.street_address,
    postal_code:Faker::Address.postcode,
    user: users.sample
  )
  if c.valid?
    rand(0..2).times.each do
      LaserService.create(
        title: Faker::Educator.campus,
        health_condition: Faker::Seinfeld.quote,
        client: c,
        user: users.sample
      )
    end
  end
  c.categories = categories.shuffle.slice(0..rand(3))
end

clients = Client.all
laser_services = LaserService.all

puts Cowsay.say "Created #{users.count} users", :tux
puts Cowsay.say "Created #{categories.count} categories", :tux
puts Cowsay.say "Created #{clients.count} clients", :kitty
puts Cowsay.say "Created #{laser_services.count} laser_services", :sheep

puts "Login as admin with #{super_user.email} and password of '#{PASSWORD}'"
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?
