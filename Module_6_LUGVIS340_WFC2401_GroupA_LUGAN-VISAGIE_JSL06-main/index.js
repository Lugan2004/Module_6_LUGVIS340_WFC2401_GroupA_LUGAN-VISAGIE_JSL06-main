// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
  };
  
  // Function to display menu items by category
  function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById('menu');
  
    // Loop through each category and its items in the menu object
    for (const category in menu) {
      // Create an element to represent the category
      const categoryElement = document.createElement('h3');
      // Set the text content of the category element to the category name
      categoryElement.textContent = category;
      // Append the category element to the menu container
      menuContainer.appendChild(categoryElement);
  
      // Create an element to represent a list of items
      const itemsList = document.createElement('ul');
      // Append a list of items element to the menu container
      menuContainer.appendChild(itemsList);
  
      // Loop through the items in the category and create list items
      for (const item of menu[category]) {
        // Create a list item element
        const itemElement = document.createElement('li');
        // Set the text content of the list item element to the item name
        itemElement.textContent = item;
        // Attach a click event listener to the list item to add it to the order
        itemElement.addEventListener('click', () => addToOrder(item));
        // Append the list item to the list of items
        itemsList.appendChild(itemElement);
      }
    }
  }
  
  // Callback function for adding an item to the order
  function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderItemsList = document.getElementById('order-items');
    const orderTotal = document.getElementById('order-total');
  
    // Create a list item for the order
    const orderItem = document.createElement('li');
    // Set the text content of the list item to the item name
    orderItem.textContent = itemName;
    // Append the list item to the order items list
    orderItemsList.appendChild(orderItem);
  
    // Calculate and update the total price
    // Assuming a fixed price of $5 per item for simplicity
    const currentTotal = parseFloat(orderTotal.textContent.slice(1)) || 0;
    const newTotal = currentTotal + 5;
    // Update the text content of the order total element with the new total
    orderTotal.textContent = `$${newTotal.toFixed(2)}`;
  }
  
  // Function to initialize the menu system
  function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
  }
  
  // Start the menu system by calling the init function
  initMenuSystem(menu);