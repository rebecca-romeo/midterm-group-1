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
  return $(`<span class="item_listing">
  ${item.title}
  </span>`)

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
