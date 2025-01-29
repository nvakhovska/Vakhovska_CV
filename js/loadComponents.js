// Function to load external HTML components dynamically
function loadComponent(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error loading ${filePath}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
}

// Load header and footer dynamically
document.addEventListener("DOMContentLoaded", () => {
    loadComponent('header-placeholder', 'components/header.html');
    loadComponent('footer-placeholder', 'components/footer.html');
});