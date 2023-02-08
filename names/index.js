let nameList = require("../country/state/city");
let firstName = require("../utilities/utils/index.js");
const getPeopleInCity = (nameList) => {
  return firstName(nameList);
};
module.exports = getPeopleInCity;
