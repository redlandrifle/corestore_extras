(function() {
  var currentDomain = window.location.hostname;

  // Check if the current domain contains "corestore.shop"
  if (currentDomain.includes("corestore.shop")) {
    // Create the links
    var suspendedLink = createLink("Suspended Sales", "/index.php/sales/suspended");
    var manage4473Link = createLink("Manage 4473s", "/index.php/boundbooks/manage_4473_2020");

    // Create the list items
    var suspendedListItem = createListItem(suspendedLink);
    var manage4473ListItem = createListItem(manage4473Link);

    // Check if the sidebar menu with ID "mainMenu" exists
    var sidebarMenu = document.getElementById("mainMenu");
    if (sidebarMenu) {
      // Append the new list items to the existing sidebar menu
      sidebarMenu.appendChild(suspendedListItem);
      sidebarMenu.appendChild(manage4473ListItem);
    } else {
      // Create the sidebar menu if it doesn't exist
      sidebarMenu = document.createElement("ul");
      sidebarMenu.id = "mainMenu";
      sidebarMenu.appendChild(suspendedListItem);
      sidebarMenu.appendChild(manage4473ListItem);

      // Insert the sidebar menu at the top of the body
      document.body.prepend(sidebarMenu);
    }
  }

  // Helper function to create a link
  function createLink(text, url) {
    var link = document.createElement("a");
    link.href = url;
    link.textContent = text;
    return link;
  }

  // Helper function to create a list item
  function createListItem(link) {
    var listItem = document.createElement("li");
    listItem.appendChild(link);
    return listItem;
  }

  // Get the input box by its ID
  var inputBox = document.getElementById("transaction_number_27b");

  // Check if the input box exists and set its background color to red if the text is longer than 9 characters
  if (inputBox) {
    inputBox.addEventListener("input", function() {
      if (inputBox.value.length != 9) {
        inputBox.style.backgroundColor = "red";
      } else {
        inputBox.style.backgroundColor = "";
      }
    });
  }

  // Get the date input box by its ID
  var dateInputBox = document.getElementById("identification_exp_date_18a");

  // Check if the date input box exists and set its background color to red if the date is before the current date
  if (dateInputBox) {
    dateInputBox.addEventListener("input", function() {
      var currentDate = new Date();
      var enteredDate = new Date(dateInputBox.value);

      if (enteredDate < currentDate) {
        dateInputBox.style.backgroundColor = "red";
      } else {
        dateInputBox.style.backgroundColor = "";
      }
    });
  }
})();