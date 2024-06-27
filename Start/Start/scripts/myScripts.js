/*
    Q1. - Make Booking Button
*/

function makeBooking() {
    /*
        Q1. Part A - Flight Type Validation
    */
    let flightType = document.getElementById('flightType').value;

    if (flightType === 'None') {
        alert("Please select a valid flight type!")
    }

    /*
        Q1. Part B - Weight Validation
    */

    let weight = document.getElementById('bagWeight').value;

    if (weight < 15 || weight > 25) {
        alert("Please select a valid weight (between 15 and 25)")
    }

}