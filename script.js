let day = document.querySelectorAll('.day');
let price = document.querySelectorAll(".price");

for(let i = 0; i < day.length; i++) {
    day[i].addEventListener("click", function() {
        if(this.classList.contains("active")) {
            console.log("yes");
            this.classList.remove("active");
        }else {
            for(let s = 0; s < day.length; s++) {
                day[s].classList.remove("active");
                price[s].classList.remove("show");
            }
            this.classList.add("active");
        }
    });

    day[i].addEventListener("mouseenter", function() {
        price[i].classList.add("show");
    });

    day[i].addEventListener("mouseout", function() {
        if(this.classList.contains("active")) {
            price[i].classList.add("show"); 
        }else {
            price[i].classList.remove("show");
        }
    })
}


