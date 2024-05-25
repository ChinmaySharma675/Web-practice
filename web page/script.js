// -------------------- hamburger icon ------------------------------------------------------------




function toggleMenu() {
    var navList = document.getElementById("nav-list");
    navList.classList.toggle("active");
}
window.addEventListener('resize', function() {
    var screenWidth = window.innerWidth;
    var navList = document.getElementById("nav-list");
    if (screenWidth > 768) {
        navList.classList.remove("active");
    }
});
           





document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
});




















// ----------------------------- Search ------------------------------------------------------------








function searchItems() {
    var searchValue = document.getElementById('search').value.toLowerCase().trim();
    var items = document.querySelectorAll('.content');
    var found = false;

    // If the search input is empty, show all items and return
    if (searchValue === '') {
        items.forEach(function(item) {
            item.style.display = 'block';
        });
        // Remove any "No book found" message
        var noBookMessage = document.querySelector('.no-book-message');
        if (noBookMessage) {
            noBookMessage.remove();
        }
        return;
    }

    // Perform search
    items.forEach(function(item) {
        var bookName = item.querySelector('p').textContent.toLowerCase();
        var bookTitle = item.querySelector('h3').textContent.toLowerCase();
        if (bookName.includes(searchValue) || bookTitle.includes(searchValue)) {
            item.style.display = 'block';
            found = true;
        } else {
            item.style.display = 'none';
        }
    });

    // Show "No book found" message if no matches
    var noBookMessage = document.querySelector('.no-book-message');
    if (!found) {
        if (!noBookMessage) {
            noBookMessage = document.createElement('p');
            noBookMessage.textContent = 'No book found';
            noBookMessage.className = 'no-book-message';
            document.querySelector('.product').appendChild(noBookMessage);
        }
    } else {
        if (noBookMessage) {
            noBookMessage.remove();
        }
    }
}

// Add event listener for the "Enter" key on the input field
document.getElementById('search').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the form from submitting
        searchItems(); // Call the search function
    }
});














// ------------------------- Filter -------------------------------------------------------------



function filterItems(category) {
    var items = document.querySelectorAll('.content');
    var filterOptions = document.querySelectorAll('.filter-options button');

    // Remove 'active' class from all filter options
    filterOptions.forEach(function(option) {
        option.classList.remove('active');
    });

    // Show all items by default
    items.forEach(function(item) {
        item.style.display = 'block';
    });

    // If a category is provided, hide items not matching that category
    if (category !== 'All') {
        items.forEach(function(item) {
            if (item.getAttribute('data-category') !== category) {
                item.style.display = 'none';
            }
        });
    }

    // Add 'active' class to the clicked filter option
    if (category) {
        document.querySelector('.filter-options button[data-category="' + category + '"]').classList.add('active');
    }
}














