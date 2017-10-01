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

    function getPrescriptions(uint id) public returns (uint prescriptionID, address patient, bytes32 drugName, bool finished) {
        Prescription prescription = prescriptions[id];
        prescriptionID = prescription.prescriptionID;
        patient = prescription.patient;
        drugName = prescription.drugName;
        finished = prescription.finished;
    }

    function writePrescription(address patient, bytes32 drugName) public returns (uint prescriptionID, address physicianAddr, address patientAddr, string retDrugName) {
        numberOfPrescriptions++;
        prescriptions[numberOfPrescriptions] = Prescription({
            prescriptionID: numberOfPrescriptions,
            patient: patient,
            drugName: drugName,
            finished: false
        });
        prescriptionID = numberOfPrescriptions;
        physicianAddr = this;
        patientAddr = patient;
        retDrugName = bytes32ToString(drugName);
    }

    function checkPrescription(uint prescriptionID, address patient, bytes32 drugName) public returns (bool) {
        Prescription prescription = prescriptions[prescriptionID];
        if (prescription.patient == patient && prescription.drugName == drugName) {
            prescription.finished = true;
            prescriptions[prescriptionID] = prescription;
            return true;
        }
        return false;
    }

    function bytes32ToString(bytes32 x) private returns (string) {
        bytes memory bytesString = new bytes(32);
        uint charCount = 0;
        for (uint j = 0; j < 32; j++) {
            byte char = byte(bytes32(uint(x) * 2 ** (8 * j)));
            if (char != 0) {
                bytesString[charCount] = char;
                charCount++;
            }
        }
        bytes memory bytesStringTrimmed = new bytes(charCount);
        for (j = 0; j < charCount; j++) {
            bytesStringTrimmed[j] = bytesString[j];
        }
        return string(bytesStringTrimmed);
    }
}