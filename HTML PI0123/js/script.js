// Get the image element
const image = document.getElementById('image');

// Add a mousemove event listener to the document
document.addEventListener('mousemove', (event) => {
    // Update the position of the image to follow the cursor
    image.style.left = event.clientX + 'px';
    image.style.top = event.clientY + 'px';
});