// this is the librarry forshowing pdf page using the react but worn't work for me i don't know.
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// I'm unable to fetch the pdf version can someone help me
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PdfViewer() {
  return (
    <div className="absolute w-full h-[calc(100vh-160px)]">
      <Document file="/resume.pdf">
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}