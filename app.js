let wrapper = document.body.querySelector(".wrapper");
let chrs = [
    {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"Truck"},
    {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"Tank"},
    {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"Car"},
    {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"Plane"},
    {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"Truck"},
    {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"Tank"},
];

for(let i=0; i  < chrs.length; i++) {
    let chrsEle = document.createElement("div");
    let nameEle = document.createElement("h3");
    let classEle = document.createElement("h3");
    let vehicleEle = document.createElement("h3");
    let imgEle = document.createElement("img");

    chrsEle.classList.add("character");
    imgEle.classList.add("img");
    nameEle.innerHTML ="Name: " + chrs[i].name;
    classEle.innerHTML ="Class: "+ chrs[i].class.toUpperCase();
    vehicleEle.innerHTML ="Vehicle: "+ chrs[i].vehicle;

        if(chrs[i].afl ==="autobot") {
            imgEle.setAttribute("src", "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png");
            chrsEle.classList.add("autobot");
        }
        else if (chrs[i].afl === "decepticon") {
            imgEle.setAttribute("src", "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png");
            chrsEle.classList.add("decepticon");
        }
    if (chrs[i].vehicle === "Truck") {
        vehicleEle.style.color = "Blue";
    } else if (chrs[i].vehicle === "Tank") {
        vehicleEle.style.color = "Green";
    } else if (chrs[i].vehicle === "Car") {
        vehicleEle.style.color = "Gold";
    } else if (chrs[i].vehicle === "Plane") {
        vehicleEle.style.color = "White";
    }

    chrsEle.appendChild(nameEle);
    chrsEle.appendChild(classEle);
    chrsEle.appendChild(vehicleEle);
    chrsEle.appendChild(imgEle);

    wrapper.appendChild(chrsEle);
}


