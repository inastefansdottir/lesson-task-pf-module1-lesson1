// An array of image URLs (web addresses of images from unsplash)
const images = [
  "https://images.unsplash.com/photo-1517184118278-02a369aab35d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1602469906774-8f6114f2a186?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1695231329700-c88d5b793c84?q=80&w=2568&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1582315292427-ec697270d11a?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1597843994034-3bf3cc86ed10?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1579267217516-b73084bd79a6?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1591530201596-c5076b7c60ce?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1656297826876-b0dec989c43c?q=80&w=2773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1541186877-bb5a745edde5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1585517342886-1f076085742a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

// Log the array of image URLs to the browser console for debugging
console.log(images);

// Function to create an img element for a given image URL
function createImage(imageUrl) {
  const img = document.createElement("img"); // Create a new <img> element
  img.src = imageUrl; // Set the image source to the provided URL
  img.alt = "Dynamically created image"; // Set alt text for accessibility
  img.style.width = "300px"; // Example styling: set image width
  img.style.height = "300px"; // set image height
  img.style.objectFit = "cover"; // Maintain aspect ratio while filling the space

  return img; // Return the created <img> element
}

// Function to add a single img element to a specified container
function renderImage(image, container) {
  container.append(image); // Add the image element as a child of the container
}

// Function to loop through the array of image URLs and render each one
function renderGallery(images, container) {
  images.forEach((imageUrl) => {
    // For each URL in the images array, create and render an image
    renderImage(createImage(imageUrl), container);
  });
}

// Call the renderGallery function to display all images on the page
// pass the images array and the <body> element as the container
renderGallery(images, document.body);

// Function to handle adding a new image when a form is submitted
function onAddImage(event) {
  event.preventDefault(); // Stop the page from refreshing when the form is submitted

  // Desctructure the "value" property from the form's image input field
  const { value } = event.target.image;

  // Create an image using the value (URL) from the input and render it to the page
  renderImage(createImage(value), document.body);
}

// Add an event listener to the form with the name "image"
// When the form is submitted, it runs the "onAddImage" function
document.forms.image.addEventListener("submit", onAddImage);
