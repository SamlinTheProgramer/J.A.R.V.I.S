document.addEventListener("DOMContentLoaded", function () {
    console.log("Page is fully loaded.");

    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Attach a click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default link behavior

            // Get the href attribute of the clicked link
            const page = this.getAttribute('href');

            // Load the content of the selected page
            loadPage(page);
        });
    });

    // Function to load page content dynamically
    function loadPage(page) {
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Replace the content of the <section> element with the loaded page content
                document.querySelector('section').innerHTML = xhr.responseText;
            }
        };

        // Open and send a request to the specified page
        xhr.open('GET', page, true);
        xhr.send();
    }
});
