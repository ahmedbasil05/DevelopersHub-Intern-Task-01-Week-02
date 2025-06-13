// Simulate search functionality
document.querySelector('.search-bar button').addEventListener('click', () => {
  const query = document.querySelector('.search-bar input').value.trim();
  if (query) {
    alert(`You searched for: ${query}`);
  } else {
    alert('Please enter a search term.');
  }
});

// Subscribe newsletter validation
document.querySelector('.newsletter button').addEventListener('click', () => {
  const email = document.querySelector('.newsletter input').value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    alert('Thank you for subscribing!');
  } else {
    alert('Please enter a valid email address.');
  }
});

// Product Buy Now click simulation
document.querySelectorAll('.product-card button').forEach(button => {
  button.addEventListener('click', () => {
    alert('Item added to cart!');
  });
});

// Optional: handle category clicks (demo only)
document.querySelectorAll('.category-item').forEach(item => {
  item.addEventListener('click', () => {
    alert(`You clicked category: ${item.innerText}`);
  });
});
