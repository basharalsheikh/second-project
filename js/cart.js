// Function to update the cart count displayed in the navigation menu
function updateCartCount() {
  const cartCountElement = document.getElementById('cart-count');
  // Update cart count in localStorage
  localStorage.setItem('cartCount', cart.length);
  // Update cart count displayed in the navigation menu
  cartCountElement.textContent = cart.length;
}

// Function to retrieve cart count from localStorage
function getCartCountFromStorage() {
  const storedCount = localStorage.getItem('cartCount');
  if (storedCount !== null) {
    return parseInt(storedCount);
  }
  return 0; // Return 0 if no count is stored
}

// Initialize cart count when the page loads
document.addEventListener('DOMContentLoaded', function() {
  const cartCountElement = document.getElementById('cart-count');
  // Retrieve cart count from localStorage
  const storedCount = getCartCountFromStorage();
  // Display cart count in the navigation menu
  cartCountElement.textContent = storedCount;
});
