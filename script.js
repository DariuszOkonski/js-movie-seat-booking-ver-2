const seats = [...document.querySelectorAll('.row .seat')];
const btnReset = document.querySelector('#restartContainer button');
const movie = document.getElementById('movie');
const amount = document.getElementById('amount');
const total = document.getElementById('total');

const tickets = {
    quantaty: 0,
    price: +movie[0].value,
    total: 0
}

// loading ================
displaySummary();

seats.forEach(seat => {
    seat.addEventListener('click', selectSeat)
});

makeSeatsOccupied(seats);

// functions ===============
function addToLocalStorage() {
    console.log('add to local storage')
}

function resetLocalStorage() {
    console.log('reset local storage');
}

function selectSeat(e) {
    if(e.target.classList[1] !== 'occupied') {
        e.target.classList.toggle('selected');
    }
    
    countOccupiedSeats();
    addToLocalStorage();
}

function countOccupiedSeats() {
    tickets.quantaty = 0;
    seats.forEach(seat => {
        if(seat.classList.contains('selected'))
            tickets.quantaty++;        
    })

    displaySummary();
}

function displaySummary() {
    tickets.total = tickets.quantaty * tickets.price;

    amount.innerText = tickets.quantaty;
    total.innerText = tickets.total;
}

function resetTickets() {
    movie[0].selected = 'selected';
    tickets.quantaty = 0;
    tickets.price = +movie[0].value;
    tickets.total = 0;
}

// addListeners functions ================
function makeSeatsOccupied(seats) {
    const occupiedSeats = [];
    seats.forEach((seat, index) => {
        if(Math.random() > 0.8)
            occupiedSeats.push(index);
    });

    seats.forEach((seat, index) => {
        seat.classList = 'seat';

        if(occupiedSeats.indexOf(index) > -1)
            seat.classList = 'seat occupied';
    });

    resetTickets();    
    displaySummary();
}

function selectMovie(e) {
    tickets.price = +e.target.value

    displaySummary();
    addToLocalStorage();
}

// event listeners ===
btnReset.addEventListener('click', () => makeSeatsOccupied(seats));

movie.addEventListener('change', selectMovie);