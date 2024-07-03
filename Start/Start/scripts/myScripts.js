/*
    Q1. - Make Booking Button
*/

let bookings = [];
let totalWeight = 0;

function makeBooking() {
    /*
        Q1. Part A - Flight Type Validation
    */
    let flightType = document.getElementById('flightType').value;

    if (flightType === 'None') {
        alert("Please select a valid flight type!")
        return; // exit's out of the function
    }

    /*
        Q1. Part B - Weight Validation
    */

    let weight = parseInt(document.getElementById('bagWeight').value);

    if (weight < 15 || weight > 25) {
        alert("Please select a valid weight (between 15 and 25)")
    } else {
        /*
        Q1. Part C - Save Booking to list
    */

        let custNumber = document.getElementById('custNumber').value;
        let amount = document.getElementById('amount').value;

        let booking = {
            custNumber: custNumber,
            flightType: flightType,
            weight: weight,
            amount: amount
        };
        bookings.push(booking);
        totalWeight += weight;
        console.log(totalWeight);
        alert("Your booking has been successfully created!");

        /*
        Q1. Part D - Save Booking to list
    */

        if (totalWeight > 60) {
            let disableButton = document.getElementById('bookingButton');
            disableButton.disabled = true;
            alert("Total weight is exceeded!");
        }

    }


}

/*
        Q2. - Summary Report
    */
function summary() {
    let summaryReport = document.getElementById('summaryReport');
    summaryReport.innerHTML = bookings.length + " bookings made!";
}

function detailedReport() {
    let DomesticReport = document.getElementById('DomesticReport');
    let EUReport = document.getElementById('EUReport');
    let TransatlanticReport = document.getElementById('TransatlanticReport');

    for (booking in bookings) {
        console.log(bookings[booking].custNumber);
    }
}