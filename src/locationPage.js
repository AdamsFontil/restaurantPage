export let showLocation = () => {
const body = document.querySelector('.body')
// Create the location container
var locationContainer = document.createElement("div");
locationContainer.classList.add("location");

// Create the h2 element
var locationHeader = document.createElement("h2");
locationHeader.textContent = "Our Location";

// Create the p element
var locationDescription = document.createElement("p");
locationDescription.textContent = "123 Main St, Anytown USA";

// Append the elements to the location container
locationContainer.appendChild(locationHeader);
locationContainer.appendChild(locationDescription);

// Add the location container to the document
body.textContent = ''
body.style.backgroundImage = "url('/Users/user/Odin/Projects/restaurantPage/src/images/rainforest-3119822_1920.jpg')"
body.appendChild(locationContainer);
}
