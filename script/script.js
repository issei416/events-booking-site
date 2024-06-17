let events = document.querySelectorAll(".event");
let count = 1;

events.forEach(x => {

    let eventname = x.querySelector(".card-header");
    let seatsavailable = x.querySelector(".seats");
    if(localStorage[Number(x.id)]){
    seatsavailable.innerText = JSON.parse(localStorage[Number(x.id)]).seatsAvailable;
    }
    let btn = x.querySelector(".btn");

    let eventjson = {
        eventName : eventname.innerText,
        seatsAvailable : seatsavailable.innerText
    }
    if(Number(seatsavailable.innerText)==0){
        btn.classList.add("btn-danger")
        btn.classList.remove("btn-warning")
    }else {
        btn.classList.remove("btn-danger")
        btn.classList.add("btn-warning")
        btn.href = "bookNow.html";
    }

    btn.addEventListener('click',() => {
        localStorage.setItem("btnclicked",eventname.innerText.slice(6,eventname.innerText.length));
    });

    localStorage.setItem(count,JSON.stringify(eventjson));
    count++;
})

