/**
 * when the page loads look for the table rows that we want to add a click event listener to
 * we have to wait for the page to finish loading since the table is being generated and displayed from an api call
 */
window.onload = function() {
  const rideRows = document.querySelectorAll('tr');

  // add an event listener to each row that detects when it is clicked on
  // check this cross-browser - forEach might not work on a node list in IE
  rideRows.forEach(item =>
    item.addEventListener('click', e => {
      // get the items id from the click event
      let rowId = e.target.id;
      // we need to clean rowId from `rid${number}` to just `number`
      rowId = rowId.replace('rid', '');
      // we are going to navigate the user to the ride-details page
      // and then get the rid from the url there and load the data
      localStorage.setItem('rid', rowId);
      // redirect the user to the ride detail page
      window.location.href = '/ride-detail.html';
    })
  );
};
