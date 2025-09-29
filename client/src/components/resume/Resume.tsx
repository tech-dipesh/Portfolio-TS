import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
  return (
    <main className="min-h-screen bg-[#06063a] text-white p-5 flex flex-col items-start">
      <h2 className="text-3xl font-bold text-[#8a2be2] mb-8">Resume</h2>

      <div className="w-full">
        <div className="bg-[#30339d] p-6 rounded-xl shadow-lg hover:scale-105 transform transition">
          <div className="w-full h-[600px] mb-6">
            <iframe
              src="/resume.pdf"
              className="w-full h-full rounded-lg border-none"
              title="Dipesh Sharma Resume"
            />
          </div>

          <div className="flex items-center justify-between">
            <a
              href="/resume.pdf"
              download="resume.pdf"
              className="bg-[#3498db] p-3 rounded-xl flex items-center gap-2"
            >
              <div className="w-4 h-4" />
              <span className="text-zinc-950">Download Resume</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              >
              <span className="text-zinc-950 bg-[#3498db] p-3 rounded-xl">
                View Full Resume
              </span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
