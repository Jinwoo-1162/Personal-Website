import React from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import resumePdf from '../Resumes/ResumeJinParkDec2021.pdf'
import '../CSS/Resume.css';

export const Resume = (props) => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    return (
        <div className="condiv resumeBox">
            <Document className="resume-pdf" file={resumePdf}>
                <Page pageNumber={1}>
                </Page>
            </Document>
        </div>
    );
}