// Static JS
$(document).ready(function(){
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

  $('.close').click(function() {
    $('.alert').hide();
  })

  $(".eat-burger").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");
    var eaten = {devoured: true};

    // Send the PUT request.
    $.ajax(`/api/burgers/${id}`, {
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

  $(".delete-burger").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");

    console.log(`delete id: ${id}`)

    // Send the DELETE request.
    $.ajax(`/api/burgers/${id}`, {
      type: "DELETE"
    }).then(
      function() {
        console.log("Deleted Burger", id);
        location.reload();
    })
  })

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