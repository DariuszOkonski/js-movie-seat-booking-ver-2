const seats = [...document.querySelectorAll('.row .seat')];
const btnReset = document.querySelector('#restartContainer button');

seats.forEach(seat => {
    seat.addEventListener('click', selectSeat)
});

makeSeatsOccupied(seats);

function selectSeat(e) {
    if(e.target.classList[1] !== 'occupied') {
        console.log('free')
        e.target.classList.toggle('selected');
    }
        
}

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
    })
}

// event listeners
btnReset.addEventListener('click', () => makeSeatsOccupied(seats));