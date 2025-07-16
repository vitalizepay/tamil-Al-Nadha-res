const menuItems = [
  { id: 1, name: "Idli", price: 5 },
  { id: 2, name: "Dosa", price: 7 },
  { id: 3, name: "Sambar Rice", price: 10 },
  { id: 4, name: "Chicken Curry", price: 15 }
];

if (document.getElementById('menu-items')) {
  const menuContainer = document.getElementById('menu-items');
  menuItems.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${item.name}</h3><p>AED ${item.price}</p><button onclick="addToCart(${item.id})">Add to Cart</button>`;
    menuContainer.appendChild(div);
  });
}

function addToCart(id) {
  const item = menuItems.find(i => i.id === id);
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Item added to cart');
}

if (document.getElementById('cart-items')) {
  const cartContainer = document.getElementById('cart-items');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `<strong>${item.name}</strong> x ${item.quantity} - AED ${item.price * item.quantity}`;
    cartContainer.appendChild(div);
  });
}
