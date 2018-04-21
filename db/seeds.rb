PASSWORD = 'supersecret'

User.destroy_all
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
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name

  Client.create(
    first_name: first_name,
    last_name: last_name,
    email: "#{first_name.downcase}.#{last_name.downcase}@example.com",
    phone_number: Faker::PhoneNumber.cell_phone,
    age: Faker::Number,
    address: Faker::Address.street_address,
    postal_code:Faker::Address.postcode,
    user: users.sample
  )
end

clients = Client.all

puts Cowsay.say "Created #{users.count} users", :tux
puts Cowsay.say "Created #{clients.count} clients", :kitty

puts "Login as admin with #{super_user.email} and password of '#{PASSWORD}'"

MedicalHistory.create([
  {name: 'Acne'}, {name: 'Arthiritis'}, {name: 'Autoimmune disorder (eg Lupus)'},
  {name: 'Blood disorders'}, {name: 'Cancer (or radiation therapy)'},
  {name: 'Diabetes/ Diabetic neuropathy'}, {name: 'Herpes (cold sores)'},
  {name: 'Neurological disease'}, {name: 'Bruise easily'},{name: 'Hepatitis A'},
  {name: 'Hepatitis A'}, {name: 'Hepatitis B'},{name: 'Hepatitis C'},
  {name: 'Hirsutism (excess body hair)'}, {name: 'Vitiligo (white skin patches)'},
  {name: 'Kidney disease'}, {name: 'Melanoma'}, {name: 'Port wine stain'},
  {name: 'Psoriasis'}, {name: 'Pacemaker'}, {name: 'Liver disease'}, {name: 'HIV'},
  {name: 'Migraine headaches'}, {name: 'Epilepsy/Seizures'}, {name: 'Shingles'},
  {name: 'Skin pigmentation'}, {name: 'Steroid or hormanal therapy'},
  {name: 'Hormonal imbalances'}, {name: 'Polycystic ovary syndrome'},
  {name: 'Keloid scars/Other scars'}, {name: 'History of stroke'},
  {name: 'Heart disease'}, {name: 'High blood pressure'}, {name: 'Thyroid condition'},
  {name: 'Rosacea'}])
Category.create([
  {name: 'Liver sports/Age spots'}, {name: 'Facial vein treatments'}, {name: 'Botox'},
  {name: 'Organic Teeth whitening'}, {name: 'Aqua Hydra-facial'},
  {name: 'Mesotherapy/Microneedling'}, {name: 'Deep Facial Cleanse Treatments'},
  {name: 'Laser Treatments'}, {name: 'Dermal Injectables'}, {name: 'Elapromed Stemcell'},
  {name: 'Laser hair removal'}, {name: 'Microdermabrasion'}, {name: 'Acne Treatment'},
  {name: 'Skin rejuvenation/Photorejuvenation'}, {name: 'Fillers (Juvederm/Restylan/Perlane) and Other'},
  {name: 'Varicose vein/Spider vein treatment'}, {name: 'Skin care advice/Products'},
  {name: 'Rosacea'}, {name: 'Thermage'}, {name: 'Body contouring'}, {name: 'Hepatitic'}
  ])




















#
