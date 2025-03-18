document.getElementById('excelFile').addEventListener('change', handleExcelUpload);
document.getElementById('pdfTemplate').addEventListener('change', handlePdfUpload);

let namesList = [];
let pdfTemplateArrayBuffer = null;

// 📌 Handle Excel Upload
function handleExcelUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

        namesList = sheet.map(row => row.Name); // Assuming column is named 'Name'
        console.log("Names Loaded:", namesList);
    };

    reader.readAsArrayBuffer(file);
}

// 📌 Handle PDF Upload
function handlePdfUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        pdfTemplateArrayBuffer = e.target.result;
        console.log("PDF Template Loaded Successfully");
    };

    reader.readAsArrayBuffer(file);
}

// 📌 Generate Certificates
async function generateCertificates() {
    if (!pdfTemplateArrayBuffer || namesList.length === 0) {
        alert("Please upload both Excel and PDF template before generating certificates.");
        return;
    }

    for (let i = 0; i < namesList.length; i++) {
        const name = namesList[i];
        const pdfDoc = await PDFLib.PDFDocument.load(pdfTemplateArrayBuffer);
        const pages = pdfDoc.getPages();
        const firstPage = pages[0];

        // 📌 Customize font, position, and size
        const { width, height } = firstPage.getSize();
        const font = await pdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);
        const fontSize = 24;
        const textX = width / 2 - 100;
        const textY = height / 2;

        firstPage.drawText(name, {
            x: textX,
            y: textY,
            size: fontSize,
            font: font,
            color: PDFLib.rgb(0, 0, 0),
        });

        // 📌 Save PDF
        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: "application/pdf" });
        saveAs(blob, `Certificate_${name}.pdf`);
    }

    alert("Certificates generated successfully!");
}
