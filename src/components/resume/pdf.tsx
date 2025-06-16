import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Plus, Minus, Download } from 'lucide-react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import Loader from '../add/Loader';

// IMPORTANT: Fixed worker configuration
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PdfViewer() {
  const [scale, setScale] = useState(1.0);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fixed PDF path - use absolute path in public folder
  const pdfFile = '/resume.pdf';

  const handleLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setError(null);
  };

  const handleLoadError = (err: Error) => {
    console.error("PDF loading error:", err);
    setError(`Failed to load PDF: ${err.message}`);
  };

  return (
    <div className="flex w-full h-[calc(100vh-160px)] flex-col items-center justify-center min-h-screen bg-[#30339d] text-white p-4">
      <div className="bg-[#3498db] p-4 rounded-md shadow-md w-full max-w-4xl">
        <div className="flex justify-center mb-4 space-x-4">
          <button
            onClick={() => setScale(prev => Math.max(prev - 0.2, 0.5))}
            className="bg-[#8a2be2] p-2 rounded hover:bg-[#7a1be2]"
            disabled={scale <= 0.5}
          >
            <Minus className="text-white" />
          </button>

          <button
            onClick={() => setScale(prev => Math.min(prev + 0.2, 2.0))}
            className="bg-[#8a2be2] p-2 rounded hover:bg-[#7a1be2]"
            disabled={scale >= 2.0}
          >
            <Plus className="text-white" />
          </button>
        </div>

        {error ? (
          <div className="text-center py-8 text-red-300">
            <p className="mb-4">{error}</p>
            <p>Please try to download the resume instead.</p>
          </div>
        ) : (
          <Document
            file={pdfFile}
            onLoadSuccess={handleLoadSuccess}
            onLoadError={handleLoadError}
            onSourceError={handleLoadError}
            loading={<div className="h-96 flex items-center justify-center"><Loader /></div>}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page 
                key={`page_${index + 1}`}
                pageNumber={index + 1} 
                scale={scale}
                loading={<Loader />}
                className="w-full"
                renderAnnotationLayer={false}
              />
            ))}
          </Document>
        )}

        <div className="flex justify-center mt-4">
          <a
            href={pdfFile} 
            download="Dipesh-Sharma-Resume.pdf"
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