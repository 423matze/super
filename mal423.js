const wrap = document.getElementsByClassName(
  "notion-callout bg-brown-light border"
);
const nav = document.getElementsByClassName('super-navbar__item-list');

console.log(nav[0]);
const mylinks = document.querySelectorAll('.highlighted-background.bg-brown');

console.log("mylinks",mylinks);

mylinks.forEach((link) => {
  let firstChild = link.firstElementChild;
  firstChild.classList.remove("link");
  firstChild.classList.add("super-navbar__item")
  
  let newLi = document.createElement("li");
  newLi.append(firstChild);
  
  console.log("neuer link", newLi);
  
  nav[0].append(newLi);
  
});
wrap[0].remove();
