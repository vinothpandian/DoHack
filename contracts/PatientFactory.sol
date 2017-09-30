pragma solidity ^0.4.8;

import "./Patient.sol";

contract PatientFactory {
    function createNewPatient(bytes32 newName) returns (Patient) {
        Patient patient = new Patient(newName);
        return patient;
    }
}