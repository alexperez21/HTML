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
 {
	 id:4,
	 title: "Play-Doh Modeling Compound 42-Pack Case of Colors",
	 category: "Toys",
	 price: 15.99,
	 img: "./items/item-3.jpeg",
	 desc: `Play-Doh Modeling Compound 42-Pack Case of Colors, Non-Toxic, Assorted, 1 oz. cans, Ages 2 and up, Multicolor `,
 },
{	
	id:6,
	title: "LEGO Classic Medium Creative Brick Box",
	category: "Toys",
	price: 23.99,
	img: "legoclassic1.jpeg",
	desc: `LEGO Classic Medium Creative Brick Box `,
},
{
id:7,
  	title: "2021 Apple 12.9-inch iPad Pro- Space Gray",
  	category: "Technology",
  	price: 1099.00,
  	img: "ipad.jpg",
  	desc: `2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 256GB) - Space Gray `,
  },
{
  	id:8,
  	title: "Apple AirPods Pro",
  	category: "Technology",
  	price: 199.99,
  	img: "airpodpro.jpg",
  	desc: `Apple AirPods Pro `,
  },
  {
  	id:9,
  	title: "USB-C to Lightning Cable",
  	category: "Technology",
  	price: 19.00,
  	img: "charger1.jpg",
  	desc: `USB-C to Lightning Cable (1 m) `,
  },
  {
  	id:10,
  	title: "2021 Apple MacBook Pro - Silver",
  	category: "Technology",
 	price: 1999.00,
  	img: "macbook.jpg",
  	desc: ` 2021 Apple MacBook Pro (14-inch, Apple M1 Pro chip with 8‑core CPU and 14‑core GPU, 16GB RAM, 512GB SSD) - Silver`,
  },
  {
  	id:11,
  	title: "Humans by Brandon Stanton",
  	category: "Books",
  	price: 27.99,
  	img: "humansbook1.jpg",
  	desc: `Humans by Brandon Stanton `,
  },
  {
  	id:12,
  	title: " The Dark Hours by Michael Connelly",
  	category: "Books",
  	price: 18.43,
  	img: "darkhours1.jpg",
  	desc: `The Dark Hours by Michael Connelly`,
  },
  {
  	id:13,
  	title: ": Big Shot Diary of a Wimpy Kid by Jeff Kinney",
  	category: "Books",
  	price: 9.00,
  	img: "diaryofawimpykid.jpg",
  	desc: `: Big Shot Diary of a Wimpy Kid by Jeff Kinney `,
  },
  {
  	id:14,
  	title: "How to Catch a Turkey by Adam Wallace ",
  	category: "Books",
  	price: 7.58,
  	img: "turkey.jpg",
  	desc: `How to Catch a Turkey by Adam Wallace`,
  },
  {
  	id:15,
  	title: " The Very Hungry Caterpillar by Eric Carle",
  	category: "Books",
  	price: 5.06,
  	img: "theveryhungrycatapillar.jpg",
  	desc: `The Very Hungry Caterpillar by Eric Carle`,
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
