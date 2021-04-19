require('dotenv').config();

//step1: add mongoose and mongodb to the project
const mongoose = require('mongoose');

//Step2: setup mongo atlas and connect to the database using the following syntax:
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

//step3: create a schema
//It defines the shape of the documents within that collection. 
//step4: create a parent schema
const { Schema } = mongoose;

//step5: create a parent person schema or blueprint
let personSchema = new Schema ({
  name: {type: String, required: true},
  age: Number,
  favoriteFoods: [String]
})

//step6: create/instantiate a model of Person in parent personSchema in mongoose
const Person = mongoose.model('Person', personSchema);

//step7: create an object Person
//Warning - When interacting with remote services, errors may occur!
const createPerson = function(done) {
  return new Person ({
    name: "John Andrew",
    age: 23,
    favoriteFoods: ["icecream", "pizza", "burger"]
  });
  if (error) return done(error);
  done(null, result);
};



const createAndSavePerson = (done) => {
  done(null /*, data*/);
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
