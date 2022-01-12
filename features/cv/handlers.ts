import { PDFExport } from '@progress/kendo-react-pdf';

export function handleDownloadCV(ref: React.MutableRefObject<PDFExport | null>): () => void {
  return function () {
    if (ref.current) {
      ref.current.save();
    }
  };
}
