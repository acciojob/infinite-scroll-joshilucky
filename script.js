const list = document.getElementById('list');
let itemCount = 10; // initial items

// Function to create and add items
function addItems(count) {
  for (let i = 1; i <= count; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(li);
  }
}

// Add 10 default items on page load
addItems(itemCount);

// Detect when user reaches bottom of the page
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
    // Add 2 more items when scrolled to bottom
    addItems(2);
  }
});
