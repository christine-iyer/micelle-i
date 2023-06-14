async function sendRequest (url, method = 'GET') {
  // Fetch takes an optional options object as the 2nd argument
  // used to include a data payload, set headers, etc.
  const options = { method }

    options.headers = { 'Content-Type': 'application/json' }
    options.body = JSON.stringify()
    options.headers = options.headers || {}
  
  
  const res = await fetch(url, options)
  // res.ok will be false if the status code set to 4xx in the controller action
  if (res.ok) return res.json()
  throw new Error('Bad Request')
}
// Retrieve an unpaid order for the logged in user
  export function getCart() {
    return sendRequest('/api/orders/cart');
  }

  // Add an item to the cart
  export function addItemToCart(itemId) {
    // Just send itemId for best security (no pricing)
    return sendRequest(`/api/orders/cart/items/${itemId}`, 'POST');
  }

  // Update the item's qty in the cart
  // Will add the item to the order if not currently in the cart
  // Sending info via the data payload instead of a long URL
  export function setItemQtyInCart(itemId, newQty) {
    return sendRequest('/api/orders/cart/qty', 'PUT', { itemId, newQty });
  }

  // Updates the order's (cart's) isPaid property to true
  export function checkout() {
    // Changing data on the server, so make it a POST request
    return sendRequest('/api/orders/cart/checkout', 'POST');
  }

  // Return all paid orders for the logged in user
  export function getOrderHistory() {
    return sendRequest('/api/orders/history');
  }