# Certificate Generator from Excel Sheet to PDF Certificates

## Description
This project is a simple web-based Certificate Generator that allows users to create personalized certificates in PDF format from a list of names provided in an Excel sheet. Users upload an Excel file containing names and a PDF certificate template, and the application generates individual certificates for each name by embedding the name onto the template.

## Features
- Upload an Excel file (.xlsx or .xls) containing a list of names.
- Upload a PDF certificate template.
- Automatically generate personalized PDF certificates for each name in the Excel sheet.
- Download each generated certificate as a separate PDF file.
- Client-side processing with no server required.

## Prerequisites
- A modern web browser with JavaScript enabled.
- No server or backend setup is required; the application runs entirely in the browser.

## Usage Instructions
1. Open the `index.html` file in your web browser.
2. Click on the "Select Excel File (Names List)" input and upload your Excel file containing the names. The Excel file should have a column named `Name`.
3. Click on the "Select Certificate Template (PDF)" input and upload your PDF certificate template.
4. Click the "Generate Certificates" button.
5. The application will generate and download a personalized PDF certificate for each name in the Excel sheet.
6. An alert will notify you when the certificates have been generated successfully.

## File Descriptions
- `index.html`: The main HTML page that provides the user interface for uploading files and triggering certificate generation.
- `script.js`: Contains the JavaScript logic to read the Excel file, process the PDF template, embed names onto the certificate, and save the generated PDFs.
- External Libraries:
  - [xlsx](https://github.com/SheetJS/sheetjs): For reading and parsing Excel files.
  - [pdf-lib](https://github.com/Hopding/pdf-lib): For manipulating PDF files and embedding text.
  - [FileSaver.js](https://github.com/eligrey/FileSaver.js): For saving generated PDF files on the client side.

## How It Works
- The user uploads an Excel file and a PDF template.
- The Excel file is parsed to extract the list of names from the `Name` column.
- For each name, the PDF template is loaded, and the name is drawn onto the first page at a predefined position using a bold Helvetica font.
- Each personalized PDF is saved and downloaded individually using the FileSaver.js library.

## License
This project is open source and free to use.
