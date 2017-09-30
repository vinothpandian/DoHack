pragma solidity ^0.4.8;

import "./Physician.sol";

contract DrugStore {
    bytes32 name;

    function DrugStore(bytes32 newName) public {
        name = newName;
    }

    function verify(address physicianAddr , uint prescriptionID, address patient, bytes32 drugName) public returns (bool) {
        Physician physician = Physician(physicianAddr);
        return physician.checkPrescription(prescriptionID, patient, drugName);
    }
}