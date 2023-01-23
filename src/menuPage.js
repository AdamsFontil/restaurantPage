export let showMenu = () => {
const body = document.querySelector('.body')

console.log('menu loaded')
// Create the menu container
var menuContainer = document.createElement("div");
menuContainer.classList.add("menu");

// Create the h2 element
var menuHeader = document.createElement("h2");
menuHeader.textContent = "Our Menu";

// Create the p element
var menuDescription = document.createElement("p");
menuDescription.textContent = "Check out our delicious menu items:";

// Create the ul element
var menuList = document.createElement("ul");

// Create the menu items
var menuItems = ["Spaghetti Bolognese", "Grilled Salmon", "Pesto Pasta", "New York-Style Pizza"];
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = document.createElement("li");
    menuItem.textContent = menuItems[i];
    menuList.appendChild(menuItem);
}

// Append the elements to the menu container
menuContainer.appendChild(menuHeader);
menuContainer.appendChild(menuDescription);
menuContainer.appendChild(menuList);

// Add the menu container to the document
body.textContent = ''
body.style.backgroundImage = "url('/Users/user/Odin/Projects/restaurantPage//src/images/rainforest-3119822_1920.jpg')"
body.appendChild(menuContainer);

}
