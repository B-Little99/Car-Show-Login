let mustangFacts = ["The Mustang is an American muscle car that was originally released in 1964.",
"Other potential names for the Mustang include Panther and Cougar.",
"Ford sold a million Mustangs in the first 24 months.",
"The former USA President Bill Clinton even owns a Mustang!",
"Black is the best selling Mustang colour!",
"The Mustang Mach-E is the latest model and is electric.",
"22,000 were sold on the very first day it went on sale.",
"Mustangs have even featured in well-known films such as the James Bond films.",
"The Mustang series of cars has been around for well over 50 years.",
// "",
// "",
// "",
// "",
// "",
// "",
];


window.addEventListener("load", function assignFact(){
    let container = document.querySelectorAll(".container");
    let gridItem = document.querySelectorAll(".gridItem");
    for (i = 0; i < container.length; i++){
        container[i].addEventListener("mouseover", function showfact(ev){
            
        let randomNumber = Math.floor(Math.random()*(mustangFacts["length"] - 1));
        ev.target.lastElementChild.innerHTML = "" + mustangFacts[randomNumber];
        console.log(ev.target);
            

        })
    }

    for (i = 0; i < gridItem.length; i++){
        gridItem[i].addEventListener("mouseover", function showfact(ev){
            
        let randomNumber = Math.floor(Math.random()*(mustangFacts["length"] - 1));
        ev.target.lastElementChild.innerHTML = "" + mustangFacts[randomNumber];
        console.log(ev.target);
            

        })
    }
})


