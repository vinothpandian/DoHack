var Drug = artifacts.require("./Drug.sol")
var DrugStore = artifacts.require("./DrugStore.sol")
var Patient = artifacts.require("./Patient.sol")
var PatientFactory = artifacts.require("./PatientFactory.sol")
var Physician = artifacts.require("./Physician.sol")

module.exports = function(deployer) {
  deployer.deploy(Drug);
  deployer.deploy(DrugStore);
  deployer.deploy(Patient);
  deployer.deploy(PatientFactory);
  deployer.deploy(Physician);
};
