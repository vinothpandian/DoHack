pragma solidity ^0.4.8;

contract Physician {
    bytes32 name;

    struct Prescription {
        uint prescriptionID;
        address patient;
        bytes32 drugName;
    }

    mapping(uint => Prescription) prescriptions;
    uint numberOfPrescriptions;

    function Physician(bytes32 newName) {
        name = newName;
        numberOfPrescriptions = 0;
    }

    function writePrescription(address patient, bytes32 drugName) constant returns (uint) {
        numberOfPrescriptions++;
        Prescription memory prescription = Prescription({
            prescriptionID: numberOfPrescriptions,
            patient: patient,
            drugName: drugName
        });
        prescriptions[numberOfPrescriptions] = prescription;
        return numberOfPrescriptions;
    }

    function checkPrescription(uint id) constant returns (bytes32) {
        Prescription prescription = prescriptions[id];
        return prescription.drugName;
    }
}
