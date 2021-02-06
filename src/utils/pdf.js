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

/**
 * Returns the completed pdf file in a Unit8Array
 * @param student_obj
 * @param mentor_obj
 * @param prof_obj
 * @param practica_obj
 * @param pdfBytes
 * @returns {Promise<Uint8Array>}
 */
export async function writeConventie(student_obj, mentor_obj, prof_obj,practica_obj, pdfBytes) {
    const pdfDoc = await PDFDocument.load(pdfBytes);

    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const size = 8;
    const color = rgb(0, 0, 0);


    getPdfWidthHeight(pdfBytes).then(r => {
        console.log(r);
    });



    const pages = pdfDoc.getPages();


    // prima pagina
    let current_page = pages[0];

    //mentor
    current_page.drawText(mentor_obj.societate, {
        x: 60,
        y: 495,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(mentor_obj.oras_sediu, {
        x: 420,
        y: 495,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(mentor_obj.strada_sediu, {
        x: 80,
        y: 480,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(mentor_obj.nr_sediu, {
        x: 200,
        y: 480,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(mentor_obj.telefon_sediu, {
        x: 280,
        y: 480,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(mentor_obj.fax, {
        x: 400,
        y: 480,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(mentor_obj.email, {
        x: 90,
        y: 460,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(mentor_obj.cod_fiscal, {
        x: 240,
        y: 460,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(mentor_obj.cont, {
        x: 340,
        y: 460,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(mentor_obj.banca_cont, {
        x: 70,
        y: 442,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(mentor_obj.reprezentant_legal, {
        x: 280,
        y: 442,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(mentor_obj.profesie_reprezentant, {
        x: 60,
        y: 425,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(mentor_obj.adresa_stagiu_practica, {
        x: 200,
        y: 405,
        size: size,
        font: helveticaFont,
        color: color
    });

    // student
    current_page.drawText(student_obj.nume, {
        x: 200,
        y: 390,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(student_obj.cetatenie, {
        x: 450,
        y: 390,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(student_obj.oras, {
        x: 140,
        y: 370,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(student_obj.strada, {
        x: 340,
        y: 370,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(student_obj.nr_cladire, {
        x: 475,
        y: 370,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(student_obj.apartament, {
        x: 75,
        y: 352,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(student_obj.judet, {
        x: 140,
        y: 352,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(student_obj.telefon, {
        x: 240,
        y: 352,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(student_obj.email, {
        x: 380,
        y: 352,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(student_obj.cnp, {
        x: 80,
        y: 334,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(student_obj.serie_ci, {
        x: 410,
        y: 334,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(student_obj.nr_ci, {
        x: 460,
        y: 334,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(student_obj.data_nasterii, {
        x: 120,
        y: 315,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(student_obj.locul_nasterii, {
        x: 245,
        y: 315,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText("student", {
        x: 60,
        y: 295,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(student_obj.an_studiu, {
        x: 155,
        y: 280,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(student_obj.grupa, {
        x: 220,
        y: 280,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(student_obj.specializarea, {
        x: 320,
        y: 280,
        size: size,
        font: helveticaFont,
        color: color
    });


    // practica
    current_page.drawText(practica_obj.durata, {
        x: 280,
        y: 112,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(practica_obj.data_inceput, {
        x: 360,
        y: 100,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(practica_obj.data_sfarsit, {
        x: 60,
        y: 90,
        size: size,
        font: helveticaFont,
        color: color
    });


    // pagina 2
    current_page = pages[1];

    //mentor
    current_page.drawText(mentor_obj.nume_mentor, {
        x: 120,
        y: 144,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(mentor_obj.profesie_mentor, {
        x: 120,
        y: 133,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(mentor_obj.telefon_mentor, {
        x: 120,
        y: 122,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(mentor_obj.fax_mentor, {
        x: 260,
        y: 122,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(mentor_obj.email_mentor, {
        x: 420,
        y: 122,
        size: size,
        font: helveticaFont,
        color: color
    });



//prof
    current_page.drawText(prof_obj.nume, {
        x: 120,
        y: 90,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(prof_obj.functie, {
        x: 120,
        y: 80,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(prof_obj.telefon, {
        x: 115,
        y: 67,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(prof_obj.fax, {
        x: 190,
        y: 67,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(prof_obj.email, {
        x: 270,
        y: 67,
        size: size,
        font: helveticaFont,
        color: color
    });

    current_page.drawText(prof_obj.nr_credite, {
        x: 100,
        y: 35,
        size: size,
        font: helveticaFont,
        color: color
    });



    return await pdfDoc.save();
}

export async function writeAcord(student_obj, mentor_obj, prof_obj,practica_obj, pdfBytes) {
    const pdfDoc = await PDFDocument.load(pdfBytes);

    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const size = 7;
    const color = rgb(0, 0, 0);


    getPdfWidthHeight(pdfBytes).then(r => {
        console.log(r);
    });



    const pages = pdfDoc.getPages();


    // prima pagina
    let current_page = pages[0];



    //mentor
    current_page.drawText(mentor_obj.societate, {
        x: 85,
        y: 638,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(mentor_obj.oras_sediu, {
        x: 235,
        y: 638,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(mentor_obj.strada_sediu, {
        x: 305,
        y: 638,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(mentor_obj.nr_sediu, {
        x: 375,
        y: 638,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(mentor_obj.telefon_sediu, {
        x: 410,
        y: 638,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(mentor_obj.fax, {
        x: 480,
        y: 638,
        size: size,
        font: helveticaFont,
        color: color
    });
    /*current_page.drawText(mentor_obj.email, {
        x: 90,
        y: 460,
        size: size,
        font: helveticaFont,
        color: color
    });*/
    current_page.drawText(mentor_obj.cod_fiscal, {
        x: 83,
        y: 627,
        size: size,
        font: helveticaFont,
        color: color
    });

    current_page.drawText(mentor_obj.banca_cont, {
        x: 190,
        y: 627,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(mentor_obj.cont, {
        x: 295,
        y: 627,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(mentor_obj.reprezentant_legal, {
        x: 60,
        y: 617,
        size: size,
        font: helveticaFont,
        color: color
    });


    return await pdfDoc.save();
}

export async function writeRaport(student_obj, mentor_obj, prof_obj,practica_obj,report_obj, pdfBytes) {
    const pdfDoc = await PDFDocument.load(pdfBytes);

    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const size = 14;
    const color = rgb(0, 0, 0);


    getPdfWidthHeight(pdfBytes).then(r => {
        console.log(r);
    });
    const pages = pdfDoc.getPages();
    // prima pagina
    let current_page = pages[0];


    current_page.drawText(student_obj.nume, {
        x: 290,
        y: 697,
        size: size,
        font: helveticaFont,
        color: color
    });

    current_page.drawText(student_obj.facultatea, {
        x: 130,
        y: 672,
        size: size,
        font: helveticaFont,
        color: color
    });

    current_page.drawText(student_obj.specializarea, {
        x: 130,
        y: 647,
        size: size,
        font: helveticaFont,
        color: color
    });

    current_page.drawText(student_obj.an_studiu, {
        x: 470,
        y: 642,
        size: size,
        font: helveticaFont,
        color: color
    });

    current_page.drawText(mentor_obj.nume_mentor, {
        x: 285,
        y: 600,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(practica_obj.data_inceput, {
        x: 265,
        y: 575,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(practica_obj.data_sfarsit, {
        x: 265,
        y: 545,
        size: size,
        font: helveticaFont,
        color: color
    });

    current_page.drawText(report_obj.perioada1, {
        x: 60,
        y: 435,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(report_obj.descriere1, {
        x: 130,
        y: 435,
        size: size,
        font: helveticaFont,
        color: color
    });

    current_page.drawText(report_obj.perioada2, {
        x: 60,
        y: 400,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(report_obj.descriere2, {
        x: 130,
        y: 400,
        size: size,
        font: helveticaFont,
        color: color
    });

    current_page.drawText(report_obj.perioada3, {
        x: 60,
        y: 365,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(report_obj.descriere3, {
        x: 130,
        y: 365,
        size: size,
        font: helveticaFont,
        color: color
    });

    current_page.drawText(report_obj.perioada4, {
        x: 60,
        y: 330,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(report_obj.descriere4, {
        x: 130,
        y: 330,
        size: size,
        font: helveticaFont,
        color: color
    });

    current_page.drawText(report_obj.perioada5, {
        x: 60,
        y: 295,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(report_obj.descriere6, {
        x: 130,
        y: 295,
        size: size,
        font: helveticaFont,
        color: color
    });

    current_page.drawText(report_obj.perioada5, {
        x: 60,
        y: 260,
        size: size,
        font: helveticaFont,
        color: color
    });
    current_page.drawText(report_obj.descriere6, {
        x: 130,
        y: 260,
        size: size,
        font: helveticaFont,
        color: color
    });




    return await pdfDoc.save();
}

export function generateConventie(student_obj,mentor_obj,prof_obj,practica_obj) {
    let pdfBytes = getPdfBytes(process.env.PUBLIC_URL + 'ConventiePractica2020.pdf');

    writeConventie(
        student_obj,
        mentor_obj,
        prof_obj,
        practica_obj,
        pdfBytes,
    ).then(r => {
        saveByteArray("ConventiePractica.pdf",r)
    })

}


export function generateRaport(student_obj,mentor_obj,prof_obj,practica_obj,report_obj) {
    let pdfBytes = getPdfBytes(process.env.PUBLIC_URL + 'RaportActivitatePractica2019.pdf');

    writeRaport(
        student_obj,
        mentor_obj,
        prof_obj,
        practica_obj,
        report_obj,
        pdfBytes,
    ).then(r => {
        saveByteArray("RaportPractica.pdf",r)
    })
}

export function generateAcord(student_obj,mentor_obj,prof_obj,practica_obj) {
    let pdfBytes = getPdfBytes(process.env.PUBLIC_URL + 'AcordPractica.pdf');
    writeAcord(
        student_obj,
        mentor_obj,
        prof_obj,
        practica_obj,
        pdfBytes,
    ).then(r => {
        saveByteArray("AcordPractica.pdf",r)
    })
}
