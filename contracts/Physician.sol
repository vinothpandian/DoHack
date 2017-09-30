pragma solidity ^0.4.8;

import "./Patient.sol";

contract Physician {
    bytes32 name;

    struct Prescription {
        uint prescriptionID;
        address patient;
        bytes32 drugName;
        bool finished;
    }

    mapping(uint => Prescription) prescriptions;
    uint numberOfPrescriptions;

    function Physician(bytes32 newName) public {
        name = newName;
        numberOfPrescriptions = 0;
    }

    function getnumberOfPrescriptions() public returns (uint) {
        return numberOfPrescriptions;
    }

    function writePrescription(address patient, bytes32 drugName) public returns (uint) {
        numberOfPrescriptions++;
        Prescription memory prescription = Prescription({
            prescriptionID: numberOfPrescriptions,
            patient: patient,
            drugName: drugName,
            finished: false
        });
        prescriptions[numberOfPrescriptions] = prescription;
        return numberOfPrescriptions;
    }

    function checkPrescription(uint prescriptionID, address patient, bytes32 drugName) public returns (bool) {
        Prescription storage prescription = prescriptions[prescriptionID];
        if (prescription.patient == patient && prescription.drugName == drugName && prescription.finished == false) {
            prescription.finished = true;
            prescriptions[prescriptionID] = prescription;
            return true;
        }
        return false;
    }
}