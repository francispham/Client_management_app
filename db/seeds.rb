PASSWORD = 'supersecret'

User.destroy_all
Client.destroy_all
AdminUser.destroy_all
MedicalHistory.destroy_all
Category.destroy_all

super_user = User.create(
  first_name: 'Michelle',
  last_name: 'Huynh',
  email: 'michelle@stmedispa.com',
  password: PASSWORD,
  is_admin: true
)

User.create([
    {
    first_name: "Rose",
    last_name: "Lin",
    email: "kelly@stmedispa.com",
    password: PASSWORD,
    is_admin: true
  },
  {
    first_name: "Anitadbd",
    last_name: "Yeng",
    email: "anita@stmedispa.com",
    password: PASSWORD
  }
])

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

AdminUser.create!([
  {email: 'js@winterfell.gov', password: PASSWORD, password_confirmation: PASSWORD},
  {email: 'michelle@stmedispa.com', password: PASSWORD, password_confirmation: PASSWORD}
  ])




















#
