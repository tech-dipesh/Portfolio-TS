import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Plus, Minus, Download } from 'lucide-react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// can you help me for the reac-pdf i'm tired of unable to showing my pdf.
import Loader from '../add/Loader'; 
// main logic for the pdf-js but won't work.
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PdfViewer() {
  const [scale, setScale] = useState(1.0);
  const [numPages, setNumPages] = useState<number | null>(null);

  const handleLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div className="flex w-full h-[calc(100vh-160px)] flex-col items-center justify-center min-h-screen bg-[#30339d] text-white p-4">
      <div className="bg-[#3498db] p-4 rounded-md shadow-md w-full max-w-4xl">
        <div className="flex justify-center mb-4 space-x-4">
          {/* js logic which will zoom out and zoomout with tailwind */}
          <button
            onClick={() => setScale(prev => Math.max(prev - 0.2, 0.5))}
            className="bg-[#8a2be2] p-2 rounded hover:bg-[#7a1be2]"
            disabled={scale <= 0.5}
            >
            <Minus className="text-white" />
          </button>
            {/* js logic which will zoom out and zoomout with tailwind */}
          <button
            onClick={() => setScale(prev => Math.min(prev + 0.2, 2.0))}
            className="bg-[#8a2be2] p-2 rounded hover:bg-[#7a1be2]"
            disabled={scale >= 2.0}
          >
            <Plus className="text-white" />
          </button>
        </div>
        <Document
          file="/resume.pdf"
          onLoadSuccess={handleLoadSuccess}
          onLoadError={(error) => console.error("PDF error:", error)}
          loading={<Loader />}
        >
          {numPages && (
            <Page 
              pageNumber={1} 
              scale={scale}
              loading={<Loader />}
              className="w-full" 
              // showing on full page
            />
          )}
        </Document>

        <div className="flex justify-center mt-4">
          {/* where my resume located */}
          <a
            href="/resume.pdf" 
            download="Dipesh-Sharma.pdf"
            className="bg-[#8a2be2] p-2 rounded hover:bg-[#7a1be2] flex items-center"
          >
            <Download className="text-white mr-2" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
}