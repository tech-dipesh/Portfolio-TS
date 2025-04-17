import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Plus, Minus, Download } from 'lucide-react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PdfViewer() {
  const [scale, setScale] = useState(1.0);

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.2, 2.0));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.6));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#30339d] text-white p-4">
      <div className="bg-[#3498db] p-4 rounded-md shadow-md w-full max-w-4xl">
        <div className="flex justify-center mb-4 space-x-4">
          <button
            onClick={handleZoomOut}
            className="bg-[#8a2be2] p-2 rounded hover:bg-[#7a1be2]"
          >
            <Minus className="text-white" />
          </button>
          <button
            onClick={handleZoomIn}
            className="bg-[#8a2be2] p-2 rounded hover:bg-[#7a1be2]"
          >
            <Plus className="text-white" />
          </button>
        </div>
        <Document file="/assets/resume.pdf">
          <Page pageNumber={1} scale={scale} />
        </Document>
        <div className="flex justify-center mt-4">
          <a
            href="/assets/resume.pdf"
            download
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
