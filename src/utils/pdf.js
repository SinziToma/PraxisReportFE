import {PDFDocument, rgb, StandardFonts} from 'pdf-lib';


/**
 * Write a text to a pdf.
 * @param pdfBytes This should be a Uint8Array or ArrayBuffer. You could make a fetch() call and use res.arrayBuffer()
 * to obtain it.
 * @param page_number The page index of the page you want to add the text to. First page has the index 0.
 * @param text The text you want to write
 * @param x_coord
 * @param y_coord
 * @returns {Promise<Uint8Array>}
 */
export async function writeTextToPdf(pdfBytes, page_number, text, x_coord, y_coord) {

    const pdfDoc = await PDFDocument.load(pdfBytes);

    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const size = 14;
    const color = rgb(0,0,0);

    const pages = pdfDoc.getPages();
    const current_page = pages[page_number];

    current_page.drawText(text, {
        x: x_coord,
        y: y_coord,
        size: size,
        font: helveticaFont,
        color: color
    });

    return await pdfDoc.save();

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

/**
 * Pdfs should live in the public folder (process.env.PUBLIC_URL + '/pdfname.pdf')
 * @param url
 * @returns {Uint8Array}
 */
export function getPdfBytes(url) {
    var byteArray = [];
    var req = new XMLHttpRequest();
    req.open('GET', url, false);
    req.overrideMimeType('text\/plain; charset=x-user-defined');
    req.send(null);
    if (req.status !== 200) return byteArray;
    for (var i = 0; i < req.responseText.length; ++i) {
        byteArray.push(req.responseText.charCodeAt(i) & 0xff)
    }
    return Uint8Array.from(byteArray);
}

/**
 * Save bytearray in browser
 * @param fileName
 * @param byte
 */
function saveByteArray(fileName, byte) {
    let blob = new Blob([byte], {type: "application/pdf"});
    let link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
}


export async function writeConventie(student_obj, mentor_obj, prof_obj, pdfBytes) {
    const pdfDoc = await PDFDocument.load(pdfBytes);

    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const size = 14;
    const color = rgb(0, 0, 0);


    getPdfWidthHeight(pdfBytes).then(r => {
        console.log(r);
    });



    const pages = pdfDoc.getPages();
    const current_page = pages[0];

    current_page.drawText(student_obj.nume, {
        x: 10,
        y: 10,
        size: size,
        font: helveticaFont,
        color: color



    });
    return await pdfDoc.save();
}


export function generateConventie(student_obj,mentor_obj,prof_obj) {
    let pdfBytes = getPdfBytes(process.env.PUBLIC_URL + 'ConventiePractica2020.pdf');

    writeConventie(
        student_obj,
        mentor_obj,
        prof_obj,
        pdfBytes,
    ).then(r => {
        saveByteArray("ConventiePractica.pdf",r)
    })

}
