const menuItems = [
  { id: 1, name: "Green Peas Masala (3 Pcs)", price: 7 },
{ id: 2, name: "Gobi Masala", price: 11 },
{ id: 3, name: "Mushroom Masala", price: 12 },
{ id: 4, name: "Mushroom Chilli", price: 12 },
{ id: 5, name: "Mushroom Munchurian", price: 13 },
{ id: 6, name: "Kadai Paneer", price: 12 },
{ id: 7, name: "Mutter Paneer", price: 11 },
{ id: 8, name: "Dal Fry", price: 8 },
{ id: 9, name: "Dal Tadka", price: 10 },
{ id: 10, name: "Dal Kichadi", price: 10 },

{ id: 11, name: "Chilly Chicken(Dry)", price: 12 },
{ id: 12, name: "Chilly Chicken(Gravy)", price: 12 },
{ id: 13, name: "Chicken Masala", price: 12 },
{ id: 14, name: "Chicken Curry", price: 12 },
{ id: 15, name: "Chicken Roast Dry", price: 12 },
{ id: 16, name: "Chicken 65", price: 12 },
{ id: 17, name: "Chicken Pallipalayam", price: 12 },
{ id: 18, name: "Chicken Sukka", price: 12 },
{ id: 19, name: "Chicken Boneless 65", price: 12 },
{ id: 20, name: "Chicken Kadai 65", price: 12 },
{ id: 21, name: "Chicken Garlic", price: 12 },
{ id: 22, name: "Chicken Butter Gravy", price: 12 },
{ id: 23, name: "Chicken Pepper", price: 12 },
{ id: 24, name: "Chicken Manchurian", price: 12 },

{ id: 25, name: "Mutton Curry", price: 14 },
{ id: 26, name: "Mutton Masala", price: 14 },
{ id: 27, name: "Mutton Sukka", price: 14 },
{ id: 28, name: "Mutton Kadai", price: 14 },
{ id: 29, name: "Mutton Pepper Dry", price: 14 },
{ id: 30, name: "Mutton Chilli", price: 14 },
{ id: 31, name: "Mutton Pepper Gravy", price: 14 },
{ id: 32, name: "Mutton Chetinadu", price: 14 },

{ id: 33, name: "Prawns Noodles", price: 16 },
{ id: 34, name: "Schezwan Veg Noodles", price: 12 },
{ id: 35, name: "Schezwan Egg Noodles", price: 13 },
{ id: 36, name: "Schezwan Chicken Noodles", price: 14 },
{ id: 37, name: "Schezwan Mutton Noodles", price: 16 },

{ id: 38, name: "Gobi Manchurian Dry", price: 12 },
{ id: 39, name: "Gobi Manchurian Gravy", price: 12 },
{ id: 40, name: "Gobi Chilli Dry", price: 12 },
{ id: 41, name: "Gobi Chilli Gravy", price: 12 },
{ id: 42, name: "Gobi 65", price: 12 },
{ id: 43, name: "Channa Masala", price: 7 },
{ id: 44, name: "Mix Vegetable", price: 7 },
{ id: 45, name: "Paneer Masala", price: 11 },

{ id: 46, name: "South Indian Thali(Veg)", price: 11 },
{ id: 47, name: "South Indian Thali(Chicken/Fish)", price: 13 },
{ id: 48, name: "Variety Rice", price: 8 },

{ id: 49, name: "Chicken 65 Biriyani", price: 16 },
{ id: 50, name: "Chicken Biriyani", price: 14 },
{ id: 51, name: "Mutton Biriyani", price: 16 },
{ id: 52, name: "Egg Biriyani", price: 12 },
{ id: 53, name: "Prawns Biriyani", price: 18 },
{ id: 54, name: "Fish Biriyani", price: 17 },
{ id: 55, name: "Plain Biriyani", price: 11 },

{ id: 56, name: "Veg Fried Rice", price: 9 },
{ id: 57, name: "Jeera Rice", price: 9 },
{ id: 58, name: "Ghee Rice", price: 9 },
{ id: 59, name: "Gobi Fried Rice", price: 9 },
{ id: 60, name: "Ginger Fried Rice", price: 9 },
{ id: 61, name: "Egg Fried Rice", price: 9 },
{ id: 62, name: "Chicken Fried Rice", price: 9 },
{ id: 63, name: "Mutton Fried Rice", price: 9 },
{ id: 64, name: "Mix Fried Rice", price: 9 },
{ id: 65, name: "Schezwan Egg Fried Rice", price: 9 },
{ id: 66, name: "Schezwan Chicken Fried Rice", price: 9 },
{ id: 67, name: "Schezwan Mutton Fried Rice", price: 9 },
{ id: 68, name: "Prawns Fried Rice", price: 9 },

{ id: 69, name: "Veg Noodles", price: 11 },
{ id: 70, name: "Egg Noodles", price: 12 },
{ id: 71, name: "Mix Noodles", price: 16 },
{ id: 72, name: "Chicken Noodles", price: 13 },
{ id: 73, name: "Mutton Noodles", price: 15 },

{ id: 74, name: "Fish Masala", price: 9 },
{ id: 75, name: "Fish Fry", price: 15 },
{ id: 76, name: "Sherry Fry", price: 15 },
{ id: 77, name: "Fish Manchurian", price: 15 },
{ id: 78, name: "Fish Chilli", price: 14 },
{ id: 79, name: "Ayala Fish Fry", price: 15 },
{ id: 80, name: "Nethili Fish", price: 12 },
{ id: 81, name: "Prawns Masala", price: 15 },
{ id: 82, name: "Prawns 65", price: 15 },
{ id: 83, name: "Prawns Ginger", price: 15 },
{ id: 84, name: "Prawns Sukka", price: 15 },

{ id: 85, name: "Egg Masala", price: 8 },
{ id: 86, name: "Egg Roast", price: 8 },
{ id: 87, name: "Egg Bhurji", price: 6 },

{ id: 88, name: "Veg Soup", price: 5 },
{ id: 89, name: "Chicken Soup", price: 5 },
{ id: 90, name: "Mutton Soup", price: 6 },
{ id: 91, name: "Nandu Soup", price: 12 },

{ id: 92, name: "Tea", price: 1 },
{ id: 93, name: "Coffee", price: 3 },
{ id: 94, name: "Fresh Milk", price: 2 },
{ id: 95, name: "Soft drinks", price: 3 },
{ id: 96, name: "Badam Milk (H)", price: 3 },
{ id: 97, name: "Sukku Coffee", price: 2 },
{ id: 98, name: "Mineral Water", price: 1 },

{ id: 99, name: "Chetinadu Chicken", price: 13 },
{ id: 100, name: "Nandu Masala (Crab)", price: 12 },
{ id: 101, name: "Mutton Boti Masala", price: 11 },
{ id: 102, name: "Mutton Liver Masala", price: 12 },

{ id: 103, name: "Parotta", price: 1 },
{ id: 104, name: "Parotta Set(2Pcs)", price: 5 },
{ id: 105, name: "Wheat Parotta", price: 2 },
{ id: 106, name: "Wheat Parotta Set(2Pcs)", price: 7 },
{ id: 107, name: "Chappathi", price: 1 },
{ id: 108, name: "Chappathi Set(2Pcs)", price: 5 },
{ id: 109, name: "Egg Lappa", price: 7 },
{ id: 110, name: "Veche Plain Parotta", price: 3 },
{ id: 111, name: "Egg Veche Parotta", price: 5 },
{ id: 112, name: "Egg Kothu Parotta", price: 12 },
{ id: 113, name: "Kothu Parotta Vegetable", price: 11 },
{ id: 114, name: "Kothu Parotta Chicken", price: 12 },
{ id: 115, name: "Kothu Parotta Mutton", price: 14 },
{ id: 116, name: "Kothu Parotta Prawn", price: 15 },
{ id: 117, name: "Mix Kothu Parotta", price: 15 },
{ id: 118, name: "Chilli Parotta Chicken", price: 13 },
{ id: 119, name: "Chilli Parotta Vegetable", price: 11 },
{ id: 120, name: "Chilli Parotta Mutton", price: 14 },
{ id: 121, name: "Chicken Lappa", price: 8 },
{ id: 122, name: "Chicken Murthaba", price: 10 }

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
