// components/resume/PdfViewer.jsx
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PdfViewer() {
  return (
    <div className="w-full h-[calc(100vh-160px)]">
      <Document file="/resume.pdf">
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}