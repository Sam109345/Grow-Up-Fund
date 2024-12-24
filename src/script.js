document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.customer-image');
    const reviewText = document.getElementById('review-text');
    const customerName = document.getElementById('customer-name');
    const customerCity = document.getElementById('customer-city');

    // Define the review data for each customer
    const reviewData = [
        {
            text: 'Aenean sit amet est orci. Aenean at nisi eget nulla lobortis commodo. Nam eget lorem in ex aliquam dapibus sed augue auctor purus vitae, venenatis ex.',
            name: 'Client 1',
            city: 'City 1',
            image: 'images/Ellipse 41.png'
        },
        {
            text: 'Nullam at nisi eget nulla lobortis commodo. Nam eget lorem in ex aliquam dapibus sed augue auctor purus vitae, venenatis ex.',
            name: 'Client 2',
            city: 'City 2',
            image: 'images/Ellipse 42.png'
        },
        {
            text: 'Quisque at nisi eget nulla lobortis commodo. Nam eget lorem in ex aliquam dapibus sed augue auctor purus vitae, venenatis ex.',
            name: 'Client 3',
            city: 'City 3',
            image: 'images/Ellipse 38.png'
        },
        {
            text: 'Fusce auctor purus vitae, venenatis ex. Aenean sit amet est orci. Aenean at nisi eget nulla lobortis commodo.',
            name: 'Client 4',
            city: 'City 4',
            image: 'images/Ellipse 39.png'
        },
        {
            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            name: 'Client 5',
            city: 'City 5',
            image: 'images/Ellipse 42.png'
        }
    ];

    // Function to update the content based on the active image
    const updateReviewContent = (index) => {
        // Update review text, customer name, and city
        reviewText.textContent = reviewData[index].text;
        customerName.textContent = reviewData[index].name;
        customerCity.textContent = reviewData[index].city;

        // Update images to highlight the active one
        images.forEach((image, i) => {
            image.classList.remove('active-image');
            if (i === index) {
                image.classList.add('active-image');
            }
        });
    };

    // Add click event listeners to all images
    images.forEach((image, index) => {
        image.addEventListener('click', () => {
            updateReviewContent(index);
        });
    });

    // Initialize with the first review content
    updateReviewContent(0);
});


// FAQs

