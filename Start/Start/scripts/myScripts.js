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


/*
        Q3. - Detailed Report
    */
function detailedReport() {
    let DomesticReport = document.getElementById('DomesticReport');
    let EUReport = document.getElementById('EUReport');
    let TransatlanticReport = document.getElementById('TransatlanticReport');


    // Keeps track of how many flights were booked for each type
    let domesticCount = 0;
    let euCount = 0;
    let transatlanticCount = 0;

    // Keeps track of overall price for each flight type
    let totalDomesticPrice = 0;
    let totalEUPrice = 0;
    let totalTransatlanticPrice = 0;


    // Empty String to add all customers info to, to use later
    let domesticBookings = "";
    let euBookings = "";
    let translanticBookings = "";

    for (booking in bookings) {
        if (bookings[booking].flightType === "Domestic") {
            domesticCount++;
            totalDomesticPrice += parseInt(bookings[booking].amount)
            domesticBookings += `<p>Customer Number: ${bookings[booking].custNumber}</p>`
            domesticBookings += `<p>Weight: ${bookings[booking].weight}</p>`
            domesticBookings += `<p>Amount: ${bookings[booking].amount}</p>`

        } else if (bookings[booking].flightType === "EU") {
            euCount++;
            totalEUPrice += parseInt(bookings[booking].amount)
            euBookings += `<p>Customer Number: ${bookings[booking].custNumber}</p>`
            euBookings += `<p>Weight: ${bookings[booking].weight}</p>`
            euBookings += `<p>Amount: ${bookings[booking].amount}</p>`

        } else {
            transatlanticCount++;
            totalTransatlanticPrice += parseInt(bookings[booking].amount)
            translanticBookings += `<p>Customer Number: ${bookings[booking].custNumber}</p>`
            translanticBookings += `<p>Weight: ${bookings[booking].weight}</p>`
            translanticBookings += `<p>Amount: ${bookings[booking].amount}</p>`

        }
    }

    DomesticReport.innerHTML = `
    <h4>Domestic Flight: ${domesticCount} </h4>
    ${domesticBookings}
    <p>Total amount paid: ${totalDomesticPrice}</p>
    `;

    EUReport.innerHTML = `
    <h4>EU Flight: ${euCount} </h4>
    ${euBookings}
    <p>Total amount paid: ${totalEUPrice}</p>
    `;

    TransatlanticReport.innerHTML = `
    <h4>Translantic Flight: ${transatlanticCount} </h4>
    ${translanticBookings}
    <p>Total amount paid: ${totalTransatlanticPrice}</p>
    `;

}