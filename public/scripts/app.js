// Client facing scripts here

$('#delete').on('click', function() {
  const itemId = $(this).data('itemId');
  console.log('check id', itemId)


  // Send an AJAX request to the server to delete the favorite item from the database
  $.ajax({
    method: 'DELETE',
    url: `/favorites/${itemId}`
  })
  .done(function(response) {
    // e.preventDefault()
    console.log('response', response)
  })
  .fail(function(error) {
    console.error(error);
  });
});
