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
  return $(`<article onclick="fetchItem(${item.id})" class="item_listing btn">
  <section class="item_listing_header">
    <i class="fa-regular fa-heart heart" data-id="${item.id}"></i>
    ${imageOpacity(item.status_sold)}
  </section>
  <section class="item_listing_middle">
  ${soldBanner(item.status_sold)}
  </section>
  <section class="item_listing_footer">
    <div class="icons">
      ${categoryIcon(item.category)}
      <i class="fa-solid fa-location-dot"></i>
    </div>
    <div class="info">
      <h5 class="item_title">${item.title}</h5>
      <h6 class="item_location">${item.location_city}, ${item.location_province}</h6>
    </div>
  </section>
  </article>`)

}

const soldBanner = (status_sold) => {
  if (status_sold) {
    return `<div class="sold_banner">
    <h3 class="item_price"><del>$${item.price}</del></h3>
    <h3 class="item_sold"><ins><em>SOLD</em></ins></h3>
  </div>`
  } else {
    return `<div class="unsold_banner">
    <h3 class="item_price">$${item.price}</h3>
  </div>`
  }
}

const imageOpacity = (status_sold) => {
  if (status_sold) {
    return `<div class="img_container">
    <img class="img_sold" src="${item.photo}?raw=true" alt="furniture">
  </div>`
  } else {
    return `<div class="img_container">
    <img src="${item.photo}?raw=true" alt="furniture">
  </div>`
  }
}

const categoryIcon = (category) => {
  if (category === "office") {
    return `<i class="fa-solid fa-desktop"></i>`
  } else if (category === "living room") {
    return `<i class="fa-solid fa-couch"></i>`
  } else if (category === "bedroom") {
    return `<i class="fa-solid fa-bed"></i>`
  } else if (category === "dining room") {
    return `<i class="fa-solid fa-utensils"></i>`
  } else if (category === "outdoor") {
    return `<i class="fa-solid fa-seedling"></i>`
  } else {
    return `<i class="fa-solid fa-lamp"></i>`
  }
}

const renderFeaturedItems = (items) => {
  for (item of items) {
    const $itemComponent = createItemComponent(item)
    $(".item_listings").prepend($itemComponent)
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

      const heart = $('.heart');
        console.log("heart:", heart);
        heart.on("click", function(event) {
          event.stopPropagation();
          const heart = $(this);
          heart.toggleClass('active');
          if (heart.hasClass('active')) {
            heart.addClass('heart-active');
            heart.removeClass('heart')
            heart.html('<i class="fa-solid fa-heart"></i>');
          }
          console.log("dataset", $(this).data())
          $.ajax({
            method: "post",
            url: `/favorites/add/${$(this).data().id}`,
            type: "application/json",
            success: function(data) {
            }
          })
          console.log("clicked");
      })
    }
  })
})
