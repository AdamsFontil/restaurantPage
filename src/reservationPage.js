export let showReservation = () => {
    // Create the reservations container
const body = document.querySelector('.body')
var reservationsContainer = document.createElement("div");
reservationsContainer.classList.add("reservations");

// Create the h2 element
var reservationsHeader = document.createElement("h2");
reservationsHeader.textContent = "Reservations";

// Create the p element
var reservationsDescription = document.createElement("p");
reservationsDescription.textContent = "To make a reservation, please call 555-555-5555 or visit our website to book online.";

// Append the elements to the reservations container
reservationsContainer.appendChild(reservationsHeader);
reservationsContainer.appendChild(reservationsDescription);

// Add the reservations container to the document
body.textContent = ''
body.style.backgroundImage = "url('/Users/user/Odin/Projects/restaurantPage/src/images/the-1865639_1920.jpg')"
body.appendChild(reservationsContainer);

}
