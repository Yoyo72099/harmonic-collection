
const myHouse = {
    type: "Apartment", 
    area: 85, 
    rooms: 3, 
    isFurnished: true, 
    amenities: ["WiFi", "Air Conditioner", "Washing Machine", "Balcony"], 
    location: { 
        city: "Shanghai",
        district: "Pudong",
        distanceToSubway: 0.8 
    }
};


function displayHouseInfo() {
    const circle = document.getElementById("circle");
    let infoHTML = ""; 


    for (const key in myHouse) {
        const value = myHouse[key];

        if (Array.isArray(value)) {
          
            infoHTML += `<p><strong>${key}:</strong><br>${value.join("<br>")}</p>`;
        } else if (typeof value === "object" && value !== null) {
           
            infoHTML += `<p><strong>${key}:</strong><br>`;
            for (const nestedKey in value) {
                infoHTML += `${nestedKey}: ${value[nestedKey]}<br>`;
            }
            infoHTML += `</p>`;
        } else {
           
            infoHTML += `<p><strong>${key}:</strong> ${value}</p>`;
        }
    }

   
    infoHTML += `<button onclick="makeItGreen()">Turn Green</button>`;

   
    circle.innerHTML = infoHTML;
}


function makeItGreen() {
    const circle = document.getElementById("circle");
    circle.style.backgroundColor = "green";
    
    circle.querySelector("button").style.color = "green";
}


window.onload = displayHouseInfo;
