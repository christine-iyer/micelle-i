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

export function getAll() {
  return sendRequest('/api/items');
}

export function getById(id) {
  return sendRequest(`/api/items/${id}`);
}