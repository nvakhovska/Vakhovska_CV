document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("savePdfBtn").addEventListener("click", () => {
        // Create an invisible link
        const link = document.createElement("a");
        
        // Set the link to the PDF file
        link.href = "Vakhovska_CV.pdf";  // Make sure the PDF file is in the same directory as the script
        link.download = "Vakhovska_CV.pdf";  // Set the file name to be downloaded

        // Append the link to the body and simulate a click
        document.body.appendChild(link);
        link.click();

        // Remove the link after triggering the download
        document.body.removeChild(link);
    });
});