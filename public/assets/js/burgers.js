// Static JS
$(document).ready(function(){
  // Add Burger
  $(".add-burger").on("click", function(event) {
    event.preventDefault();

    if (validateForm()){
      // Add a new burger to the list
      var newBurger = {
        burger_name: $("#burgerInput").val().trim(),
      };

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    } 
    else {
      $('.alert').show()
    }
  });

  // Close alert
  $('.close').click(function() {
    $('.alert').hide();
  })

  // Eat Burger - Display Modal to enter customer name
  $(".eat-burger").on("click", function(event) {
    event.preventDefault();
    console.log('modal')
    // Pop up modal to enter name
    $(".modal-title").text("Who's Eating the Burger?");
    $(".modal-body").html(`<form>`
        +`<div class='form-group'>`
        +`<label for='customerName' class='col-form-label'>Enter name:</label>`
        +`<input type='text' class='form-control' id='customerName' value=''>`
        +`</div>`);

    $("#saveChanges").attr("data-key",$(this).data("id"));
  });

  // Save customer name and update burger status
  $("#saveChanges").on("click", function(event) {
    event.preventDefault();

    var newCustomer = {
      customer_name: $("#customerName").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/customers", {
      type: "POST",
      data: newCustomer
    }).then(
      function() {
        console.log("Customer ate a burger");
      }
    );

    var id = $(this).attr("data-key");
    var eaten = {devoured: true};

    // Send the PUT request.
    $.ajax("/api/burgers/", id, {
      type: "PUT",
      data: eaten
    }).then(
      function() {
        console.log("Updated Burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // Delete burger from devoured list
  $(".delete-burger").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax(`/api/burgers/${id}`, {
      type: "DELETE"
    }).then(
      function() {
        console.log("Deleted Burger", id);
        location.reload();
    })
  })

  // Return true if form not blank, else return false
  function validateForm() {
    var isValid = true;
    $('.validate').each(function () {
        if ($(this).val() === "") {
            isValid = false;
        }
    });
    return isValid;
  }
})