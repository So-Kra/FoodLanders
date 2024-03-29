console.log("JavaScript code starts executing...");

// Define a custom include HTML directive
document.querySelectorAll('include').forEach(async (element) => {
  // Get the 'src' attribute value from the 'include' element
  const src = element.getAttribute('src');

  // Fetch the content of the specified file (e.g., header.html or footer.html)
  const response = await fetch(src);

  // Extract the text content from the response
  const content = await response.text();

  // Insert the fetched content after the 'include' element's position in the DOM
  element.insertAdjacentHTML('afterend', content);

  // Remove the 'include' element from the DOM, leaving only the fetched content
  element.remove();
});

console.log("HTML inclusions done...");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Load the dataset from an external JSON file
async function loadDataset() {
  try {
    const response = await fetch('datasetEL.json');
    const dataset = await response.json();
    return dataset;
  } catch (error) {
    console.error('Error loading dataset:', error);
    return [];
  }
}

// Function to check if input is contained within the dataset
async function search() {
  const searchInput = document.getElementById('searchInput');
  const query = searchInput.value.toLowerCase();
  const suggestionList = document.getElementById('suggestionList');

  // Clear previous suggestions
  suggestionList.innerHTML = '';

  if (query.length >= 2) {
    const dataset = await loadDataset();
    const filteredResults = dataset.filter(item => item.matchingWords.some(word => word.toLowerCase().includes(query)));
    
    // Do something with the filtered results, e.g., display them on the page as suggestions
    filteredResults.forEach(result => {
      const suggestionItem = document.createElement('li');
      suggestionItem.textContent = result.matchingWords[0];
      suggestionItem.addEventListener('click', () => redirectToLink(result.link));
      suggestionList.appendChild(suggestionItem);
    });
  }
}

// Function to redirect to a link
function redirectToLink(link) {
  window.location.href = link;
}

// Check if the searchInput element exists before adding the event listener
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  // Event listener for input change
  searchInput.addEventListener('input', search);
  console.log("Search up and running...");
} else {
  console.log("SearchInput element is missing, search functionality skipped.");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Fetch the header HTML
fetch('../el/header.html')
  .then(response => response.text())
  .then(data => {
    // Insert the fetched HTML into the DOM
    const headerContainer = document.createElement('div');
    headerContainer.innerHTML = data.trim();
    document.body.appendChild(headerContainer);

    // Your code for toggling the hamburger menu
    const navLinks = document.querySelector('.hamburgerNavLinks');
    const hamburgerNavLinks = document.querySelectorAll('.hamburgerNavLinks a');
    const hamburger = document.querySelector('.hamburger');
                  
    // Initially hide the navLinks
    navLinks.classList.add('hidden');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    function removeActiveClass() {
      navLinks.classList.remove('active');
      hamburger.classList.toggle('active');
    }

    // Add a click event listener to each link within .hamburgerNavLinks
    hamburgerNavLinks.forEach(function (link) {
      link.addEventListener('click', removeActiveClass);
    });

    document.addEventListener('click', function (event) {
      if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
          // Click occurred outside of navLinks and hamburger, so remove 'active' class
          navLinks.classList.remove('active');
          hamburger.classList.remove('active');
      }
    });

    window.addEventListener('scroll', () => {
      const header = document.querySelector("header");
      if (window.scrollY > 200) { // Adjust the value as needed
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  });
                    
    console.log("Header fetched...");
  })
  .catch(error => console.error(error));


// Fetch and insert the footer area
fetch('../el/footer.html')
  .then(response => response.text())
  .then(data => {
    const footerContainer = document.createElement('div');
    footerContainer.innerHTML = data.trim();
    document.body.appendChild(footerContainer);
    console.log("Footer fetched...");
  })
  .catch(error => console.error(error));





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById('contentContainer');

  // Using JavaScript to fetch and insert content
  fetch('../el/socialBanner.html')
    .then(response => response.text())
    .then(data => {
      banner.innerHTML = data; // Change 'document.getElementById('banner')' to 'banner'
    })
    .catch(error => console.error(error));
});


/* 
  .then(data => {
    const triggerAreaContainer = document.createElement('div');
    triggerAreaContainer.innerHTML = data.trim();
    //document.body.prepend(triggerAreaContainer);  
    // Function to show the pop-up message
      function showPopupMessage() {
        if (popupMessage && modalBack) {
          popupMessage.style.display = "block";
          modalBack.style.display = "block";
        }
      }

    // Function to hide the pop-up message
      function hidePopupMessage() {
        if (popupMessage && modalBack) {
          popupMessage.style.display = "none";
          modalBack.style.display = "none";
        }
      }

    // Get references to the trigger area and the pop-up message
    var triggerButton = document.getElementById("triggerArea");
    console.log(triggerButton);
    var popupMessage = document.getElementById("popupMessage");
    console.log(popupMessage);
    var modalBack = document.getElementById("modalBack");
    console.log(modalBack);

    if (triggerButton && popupMessage) {
      // Attach event listener for click on the trigger area to show the pop-up message
      triggerButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent click event from bubbling up to the document
        showPopupMessage();
      });

      // Attach event listener for click outside the pop-up to hide it
      document.addEventListener("click", function () {
        hidePopupMessage();
      });

      // Attach event listener to the pop-up message to prevent hiding when clicking inside the message
      popupMessage.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent click event from bubbling up to the document
      });
    } else {
      console.log("Trigger area or popup message element is missing, pop-up functionality skipped.");
    }

    // Insert the loaded content into the container
    container.innerHTML = data;
  })
  .catch(error => console.error(error));
*/

