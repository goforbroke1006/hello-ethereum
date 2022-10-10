// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.9.0;

contract Hello {
    // a string variable
    string greeting;

    // the function with the same name as the class is a constructor
    constructor(string memory _greeting) {
        greeting = _greeting;
    }

    // change the greeting message
    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }

    // get the greeting message
    function greet() public view returns (string memory _greeting) {
        _greeting = greeting;
    }
}
