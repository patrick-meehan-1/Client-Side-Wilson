function submitNumber() {
    let numberInput = document.getElementById('numberInput');
    let number = Number(numberInput.value)



    if (number >= 0) {
        alert(number * 2)
    } else {
        alert("Please enter a POSITIVE number!")
    }

}