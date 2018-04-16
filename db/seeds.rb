PASSWORD = 'supersecret'

User.destroy_all
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
  c = Client.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: "#{Faker::Name.first_name.downcase}.#{Faker::Name.last_name.downcase}@example.com",
    phone_number: Faker::PhoneNumber.cell_phone,
    age: Faker::Number,
    address: Faker::Address.street_address,
    postal_code:Faker::Address.postcode,
    user: users.sample
  )
  if c.valid?
    rand(0..5).times.each do
      LaserServices.create(
        title: Faker::StarWars.quote,
        health_condition: Faker::Seinfeld.quote,
        client: c,
        user: users.sample
      )
    end
  end
end

clients = Client.all
laser_services = LaserServices.all

puts Cowsay.say "Created #{clients.count} clients", :frogs
puts Cowsay.say "Created #{laser_services.count} laser_services", :sheep

puts "Login as admin with #{super_user.email} and password of '#{PASSWORD}'"
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?
