// $(() => {
//   $('#favorite-item').on('click', (event) => {
//     const itemId = $(this).val();
//     $.ajax({
//       method: 'DELETE',
//       url: '/favorites/remove',
//       data: { itemId: itemId },
//       success: () => {
//         $(event.currentTarget).remove();
//       },
//       error: (xhr, status, error) => {
//         console.error(xhr, status, error);
//       }
//     });
//   });
// });
