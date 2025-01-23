document.getElementById('downloadBtn').addEventListener('click', function() {
    const element = document.querySelector('page'); // Target the entire page

    // Define the PDF options
    const opt = {
        margin:       1,
        filename:     'Vakhovska_CV.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, logging: false, letterRendering: true },
        jsPDF:        { unit: 'cm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).toPdf().get('pdf').then(function(pdf) {
        const pageCount = pdf.internal.pages.length;

        // Check if there is a second page, and if so, remove it
        if (pageCount > 1) {
            pdf.deletePage(2); // Delete the second page if it exists
        }

        // Save the result as a PDF with only one page
        pdf.save('Vakhovska_CV.pdf');
    });
});
