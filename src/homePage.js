export let showHome = () => {
const content = document.querySelector('.content')
// Create title div
var titleDiv = document.createElement("div");
titleDiv.className = "title";

// Create h1 element and add it to the title div
var titleH1 = document.createElement("h1");
titleH1.textContent = "Jungle Buffet";
titleDiv.appendChild(titleH1);

// Add title div to the document
content.appendChild(titleDiv);

// Create nav div
var navDiv = document.createElement("div");
navDiv.className = "nav";

// Create ul element and add it to the nav div
var navUl = document.createElement("ul");
navDiv.appendChild(navUl);

// Create li elements and add them to the ul element
var HomeLi = document.createElement("li");
HomeLi.innerHTML = "<a href='#home'>Home</a>";
HomeLi.className = 'HomeTab'
navUl.appendChild(HomeLi);

var menuLi = document.createElement("li");
menuLi.innerHTML = "<a href='#menu'>Menu</a>";
menuLi.className = 'menuTab'
navUl.appendChild(menuLi);

var aboutLi = document.createElement("li");
aboutLi.innerHTML = "<a href='#about'>About</a>";
aboutLi.className = 'aboutTab'
navUl.appendChild(aboutLi);

var locationLi = document.createElement("li");
locationLi.innerHTML = "<a href='#location'>Location</a>";
locationLi.className = 'locationTab'
navUl.appendChild(locationLi);

var reservationsLi = document.createElement("li");
reservationsLi.innerHTML = "<a href='#reservations'>Reservations</a>";
reservationsLi.className = 'reservationTab'
navUl.appendChild(reservationsLi);

// Add nav div to the document
content.appendChild(navDiv);
var bodyDiv = document.createElement("div");
bodyDiv.className = "body";
// Add body div to the document
content.appendChild(bodyDiv);

// Create footer div
var footerDiv = document.createElement("div");
footerDiv.className = "footer";

// Create p elements and add them to the footer div
var copyrightP = document.createElement("p");
copyrightP.textContent = "Copyright Jungle Buffet";
footerDiv.appendChild(copyrightP);
content.appendChild(footerDiv)



}

export let renderHome = () => {
    const body = document.querySelector('.body')
    // Create body div

// Create h2 element and add it to the body div
var bodyH2 = document.createElement("h2");
bodyH2.className = "body-text";
bodyH2.textContent = "Hello, welcome to the Jungle Buffet. The Restaurant that's been completely revamped after the owner went to South America just one time. We still serve regular food, up until a few weeks back we were just a regular buffet. But apparently the Amazon is a sight for sore eyes. So we've completely revamped our stores, and the website as well. Maybe this is just a phase thing, we don't know but I'm just doing what I'm told. So without further adieu, welcome to Jungle Buffet. Formerly known as the Buffet on 163rd.";
body.textContent = ''
// body.id = 'about'
body.appendChild(bodyH2);
body.style.backgroundImage = "url('/images/forest-g02f1a7280_1920.jpg')"
}
