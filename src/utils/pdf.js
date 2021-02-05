import {  PDFDocument, rgb, StandardFonts } from 'pdf-lib';


/**
 * Write a text to a pdf.
 * @param pdfBytes This should be a Uint8Array or ArrayBuffer. You could make a fetch() call and use res.arrayBuffer()
 * to obtain it.
 * @param page_number The page index of the page you want to add the text to. First page has the index 0.
 * @param text The text you want to write
 * @param x_coord
 * @param y_coord
 * @returns {Promise<void>}
 */
export async function writeTextToPdf(pdfBytes, page_number, text, x_coord, y_coord) {

    const pdfDoc = await PDFDocument.load(pdfBytes)

    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const size = 50;
    const color = rgb(0,0,0);

    const pages = pdfDoc.getPages();
    const current_page = pages[page_number];

    current_page.drawText('This text was added with JavaScript!', {
        x: x_coord,
        y: y_coord,
        size: size,
        font: helveticaFont,
        color: color
    })

}


/**
 * Get the width and height of the pages in the pdf.
 * @param pdfBytes
 * @returns {Promise<{width: number, height: number}>}
 */
export async function getPdfWidthHeight(pdfBytes) {
    const pdfDoc = await PDFDocument.load(pdfBytes)
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const { width, height } = firstPage.getSize();
    return {'width':width, 'height':height};
}



