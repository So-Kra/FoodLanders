const dataset = [
  { item: 'Vegan Bolognese', link: 'https://www.google.com/' },
  { item: 'Vegan Meatballs', link: 'https://www.google.com/' },
  { item: 'Vegan burgers', link: 'https://www.google.com/' },
  { item: 'Balls', link: 'https://www.google.com/' },
  { item: 'Mango balls', link: 'https://www.google.com/' }
];

// Function to check if input is contained within the dataset
function search() {
  const searchInput = document.getElementById('searchInput');
  const query = searchInput.value.toLowerCase();
  const suggestionList = document.getElementById('suggestionList');

  // Clear previous suggestions
  suggestionList.innerHTML = '';

  if (query.length >= 2) {
    const filteredResults = dataset.filter(item => item.item.toLowerCase().includes(query));
    console.log(filteredResults);
    // Do something with the filtered results, e.g., display them on the page as suggestions
    filteredResults.forEach(result => {
      const suggestionItem = document.createElement('li');
      suggestionItem.textContent = result.item;
      suggestionItem.addEventListener('click', () => redirectToLink(result.link));
      suggestionList.appendChild(suggestionItem);
    });
  }
}

// Function to redirect to a link
function redirectToLink(link) {
  window.location.href = link;
}

// Event listener for input change
document.getElementById('searchInput').addEventListener('input', search);

