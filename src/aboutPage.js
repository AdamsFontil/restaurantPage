export let showAbout = () => {
const body = document.querySelector('.body')
const footer = document.querySelector('.footer')
// Create the about container
var aboutContainer = document.createElement("div");
aboutContainer.classList.add("about");

// Create the h2 element
var aboutHeader = document.createElement("h2");
aboutHeader.textContent = "About Us";

// Create the p element
var aboutDescription = document.createElement("p");
aboutDescription.textContent = "Delicious Restaurant is a family-owned business that has been serving delicious food for over 10 years. We use only the freshest ingredients in our dishes and pride ourselves on our friendly service.";

// Append the elements to the about container
aboutContainer.appendChild(aboutHeader);
aboutContainer.appendChild(aboutDescription);
console.log('footer')

footer.textContent ='testing'


// Add the about container to the document
body.textContent = ''
body.id = 'about'
body.style.backgroundImage = "url('/Users/user/Odin/Projects/restaurantPage/src/images/jungle-g5ddf0e18e_1920.jpg')"
body.appendChild(aboutContainer);
}
