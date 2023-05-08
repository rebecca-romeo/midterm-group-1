var app = document.getElementById("typewriter");

const typed = new Typewriter('#typewriter', {
  // strings: ['re-cycle', 're-use', 're-furnish'],
  autoStart: true,
  // pauseFor: 1000,
  loop: true,
  typeSpeed: 50,
  cursor: ""
});

typed
  .typeString("re-cycle")
  .pauseFor(1000)
  .deleteChars(5)
  .typeString("use")
  .pauseFor(1000)
  .deleteChars(3)
  .typeString("furnish")
  .pauseFor(2000)
  .deleteChars(10)
  .typeString("<div><img src='https://github.com/rebecca-romeo/midterm-group-1/blob/homepage/docs/re-furnish_logo.png?raw=true'></img></div>")
  .pauseFor(5000)
  .start();


const createItemComponent = (item) => {
  return $(`<article class="item_listing">
  <section class="item_listing_header">
    <i class="fa-regular fa-heart"></i>
    <img src="${item.photo}?raw=true" alt="furniture">
  </section>
  <section class="item_listing_middle">
    <h3 class="item_price">$${item.price}</h3>
    <h3 class="item_sold">Sold</h3>
  </section>
  <section class="item_listing_footer">
    <div class="icons">
      <i class="fa-regular fa-location-dot"></i>
    </div>
    <div class="info">
      <h5 class="item_title">${item.title}</h5>
      <h6 class="item_location">${item.location_city}, ${item.location_province}</h6>
    </div>
  </section>
  </article>`)

}


const renderFeaturedItems = (items) => {
  for (item of items) {
    const itemComponent = createItemComponent (item)
    $(".item_listings").prepend(itemComponent)
  }
}

$(document).ready(function () {
  $.ajax({
    method: "get",
    url: "/items",
    type: "application/json",
    success: function(data) {
      // console.log("server response value:", data.items)
      const featuredItems = data.items
      renderFeaturedItems(featuredItems);
    }
  })
})
