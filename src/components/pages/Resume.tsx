// this is the librarry forshowing pdf page using the react but worn't work for me i don't know.
// import { Document, Page } from 'react-pdf';
import {Document} from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// I'm unable to fetch the pdf version can someone help me
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// export default function PdfViewer() {
//   return (
//     <div className="absolute w-full h-[calc(100vh-160px)]">
//       <Document file="/resume.pdf">
//         <Page pageNumber={1} />
//       </Document>
//     </div>
//   );
// }

export default function PdfFallback() {
  return (
    <div className="w-full h-[calc(100vh-160px)] flex items-center justify-center">
      <iframe 
        src="/resume.pdf" 
        className="w-full h-full min-h-[500px]"
        title="Resume"
      />
      <div className="mt-4">
        <a
          href="/resume.pdf" 
          download="Dipesh-Sharma-Resume.pdf"
          className="bg-[#8a2be2] p-2 rounded hover:bg-[#7a1be2] flex items-center"
        >
          <Document className="text-white mr-2" />
          <span>Download Resume</span>
        </a>
      </div>
    </div>
  );
}