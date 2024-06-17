console.log(localStorage)

let clickedevent = JSON.parse(localStorage[Number(localStorage.btnclicked)]);

let eventname = document.querySelector(".eventname");
eventname.innerText = clickedevent["eventName"];

let seats = document.querySelector(".seatsavailable");
seats.innerText = ` Seats Available : ${clickedevent.seatsAvailable}`;

let form = document.querySelector("#form");
form.addEventListener('submit', (e) => {
    let username = form.querySelector("#user_name").value;
    let email = form.querySelector("#email").value;
    let phone = form.querySelector("#tel").value;
    let bookedseats = form.querySelector("#number").value;
    let otherNames = form.querySelector("#others").value;

    if (bookedseats <= Number(clickedevent.seatsAvailable)) {
        let seats = Number(clickedevent.seatsAvailable) - bookedseats;
        eventjson = {
            "eventName": clickedevent.eventName,
            "seatsAvailable": seats
        }
        window.alert("booking successful")
        localStorage.setItem(localStorage.btnclicked, JSON.stringify(eventjson));
    }else {
        e.preventDefault();
        window.alert("Not enough available seats");
    }
})



