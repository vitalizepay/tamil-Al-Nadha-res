const menuItems = [
  { id: 1, name: "Idli (3 Pcs)", price: 6 },
  { id: 2, name: "Idli Vada", price: 5 },
  { id: 3, name: "Vada (3 Pcs)", price: 6 },
  { id: 4, name: "Sambar Vada (1 Pc)", price: 5 },
  { id: 5, name: "Pongal + Vada", price: 7 },
  { id: 6, name: "Set Dosa (2 Pcs)", price: 6 },
  { id: 7, name: "Poori Set (Breakfast)", price: 6 },
  { id: 8, name: "Idiyappam", price: 5 },
  { id: 9, name: "Plain Roast", price: 6 },
  { id: 10, name: "Ghee Roast", price: 7 },
  { id: 11, name: "Onion Roast", price: 7 },
  { id: 12, name: "Rava Upma", price: 5 },
  { id: 13, name: "Semiya Khichadi", price: 6 },
  { id: 14, name: "Mysore Masala Dosa", price: 8 },
  { id: 15, name: "Butter Masala Dosa", price: 8 },
  { id: 16, name: "Paneer Dosa", price: 8 },
  { id: 17, name: "Rava Dosa", price: 7 },
  { id: 18, name: "Onion Rava", price: 8 },
  { id: 19, name: "Rava Masala Dosa", price: 8 },
  { id: 20, name: "Egg Dosa", price: 7 },
  { id: 21, name: "Onion Uthappam", price: 7 },
  { id: 22, name: "Tomato Uthappam", price: 7 },
  { id: 23, name: "Masala Uthappam", price: 7 },
  { id: 24, name: "Mix Uthappam", price: 8 },
  { id: 25, name: "Podi Dosa", price: 7 },
  { id: 26, name: "Fish Masala", price: 12 },
  { id: 27, name: "Fish Fry (King Fish)", price: 0 },
  { id: 28, name: "Sherry Fry", price: 0 },
  { id: 29, name: "Fish Manchurian (Gravy)", price: 15 },
  { id: 30, name: "Fish Chilly (Dry/Gravy)", price: 14 },
  { id: 31, name: "Ayala Fish Fry", price: 0 },
  { id: 32, name: "Prawns Masala", price: 15 },
  { id: 33, name: "Prawns Dry Fry", price: 15 },
  { id: 34, name: "Prawns Ginger", price: 15 },
  { id: 35, name: "Egg Masala/Egg Roast", price: 8 },
  { id: 36, name: "Egg Bhurji", price: 6 },
  { id: 37, name: "Vegetable Soup", price: 5 },
  { id: 38, name: "Chicken Soup", price: 8 },
  { id: 39, name: "Mutton Soup", price: 10 },
  { id: 40, name: "Tea", price: 1 },
  { id: 41, name: "Coffee Fresh Milk", price: 3 },
  { id: 42, name: "Mineral Water (S/L)", price: 1 },
  { id: 43, name: "Soft Drinks", price: 2.5 },
  { id: 44, name: "Badam Milk (Hot)", price: 3 },
  { id: 45, name: "Chettinadu Chicken", price: 13 },
  { id: 46, name: "Prawn Dosa", price: 10 },
  { id: 47, name: "Nandu Masala (Crab)", price: 12 },
  { id: 48, name: "Mutton Boti Masala", price: 10 },
  { id: 49, name: "Mutton Liver Masala", price: 10 },
  { id: 50, name: "Mini Tiffin (All in 1 Plate)", price: 9 }
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
