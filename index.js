import "./styles.css";


/*
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");
// part2:
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
// part 3
// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];
*/
// select elemnt by Id
const varSite = document.getElementById("heading");
varSite.style.backgroundColor = "orange";
// using quety selector
const mainEl = document.querySelector("h2");
mainEl.style.backgroundColor="black";
// next sibling element
const firstParagraph = Cardtitle2.nextElementSibling;
// iterate over a collection of items
const movings = document.querySelectorAll('.moving')
movings.forEach((moving,index) =>{
    // innertext
    moving.innerText = 'update ${index +1}';
    moving.style.color = 'red';
});
// create elemnt
let newElemnt = document.createElement('p');
newElemnt.textContent='this is new paragraph';
// classlist
newElemnt.classList.add('new-paragraph');
// use append child
document.getElementById('heading').appendChild(newElemnt)
