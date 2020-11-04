const seats = [...document.querySelectorAll('.row .seat')];
const btnReset = document.querySelector('#restartContainer button');


makeSeatsOccupied(seats);

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