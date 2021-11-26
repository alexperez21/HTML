const menu = [
  {
  id: 1,
	title: "Play-Doh Modeling 10-Pack Case of Colors",
	category: "Toys",
	price: 7.99,
	img: "./images/item-1.jpeg",
	desc: `Play-Doh Modeling Compound 10-Pack Case of Colors, Non-Toxic, Assorted, 2 oz. Cans, Ages 2 and up, Multicolor.ed `,
}, 
{
	id: 2,
	title: "Play-Doh Modeling 24-Pack Case of Colors",
	category: "Toys",
	price: 20.99,
	img: "./images/item-2.jpeg",
	desc: `Play-Doh Modeling Compound 24-Pack Case of Colors, Non-Toxic, Assorted, 3-Ounce Cans, Ages 2 and up, Multicolor `,
},
 {
	id: 3,
	title: "Apple Iphone 13 (128GB, Midnight)",
	category: "Technology",
	price: 829.99,
	img: "./images/item-3.jpeg",
	desc: `Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording`,
},
];

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
