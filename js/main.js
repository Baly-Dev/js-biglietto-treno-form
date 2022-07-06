const execute = document.getElementById('execute')
const reset = document.getElementById('reset')

// execute button
execute.addEventListener('click', function() {

    // input variables
    const fullName = document.getElementById('full_name').value;
    const km = parseInt(document.getElementById('km').value);
    const ageRange = document.getElementById('age_range').value;

    // output varaibles
    const ticketFullName = document.getElementById('ticketFullName');
    const ticketPrice = document.getElementById('ticketPrice');
    const ticketOffer = document.getElementById('ticketOffer');
    const ticketCabin = document.getElementById('ticketCabin');
    const ticketCode = document.getElementById('ticketCode');


    // calculation variables
    const priceKm = 0.21
    let result;

    // price calculation
    if (ageRange == 'minorenne'){
        result = (km * priceKm) - ((km * priceKm) * 0.2)
    }else if (ageRange == 'over_65'){
        result = (km * priceKm) - ((km * priceKm) * 0.4)
    } else {
        result = km * priceKm
    }

    // generate cabin code
    const cCode = Math.floor(Math.random() * 10) + 1

    // generate ticket code
    const tCode = Math.floor(Math.random() * (100000 - 90000)) + 90000

    // output
    document.getElementById('ticketFullName').innerHTML = fullName
    document.getElementById('ticketOffer').innerHTML = ageRange
    document.getElementById('ticketCabin').innerHTML = cCode
    document.getElementById('ticketCode').innerHTML = tCode
    document.getElementById('ticketPrice').innerHTML = result.toFixed(2) + '€'

    // show generated ticket
    document.querySelector('.generated_ticket').classList.add('d-block');
});

// reset button
reset.addEventListener('click', function(){

    // empty form's input
    document.getElementById('full_name').value = "";
    document.getElementById('km').value = "";
    document.getElementById('age_range').value = "";

    // hide generated ticket
    document.querySelector('.generated_ticket').classList.remove('d-block');
});



