const list = document.getElementById('infi-list'); // ✅ match the HTML id

let itemCount = 10; // start with 10 items

// Function to add list items
function addItems(count) {
  for (let i = 1; i <= count; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(li);
  }
}

// Add initial 10 items
addItems(itemCount);

// Add 2 more when scrolled to bottom
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
    addItems(2);
  }
});
