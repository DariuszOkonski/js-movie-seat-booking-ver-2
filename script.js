const seats = [...document.querySelectorAll('.row .seat')];


makeSeatsOccupied(seats);

function makeSeatsOccupied(seats) {
    const occupiedSeats = [];
    seats.forEach((seat, index) => {
        if(Math.random() > 0.8)
            occupiedSeats.push(index);
    });

    console.log(occupiedSeats);


    seats.forEach((seat, index) => {
        seat.classList = 'seat';

        if(occupiedSeats.indexOf(index) > -1)
            seat.classList = 'seat occupied';
    })
}