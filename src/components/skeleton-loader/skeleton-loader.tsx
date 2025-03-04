import { ImageIcon } from "lucide-react";

export default function SkeletonLoader() {
  return (
    <div
      role="status"
      className="max-w-sm p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6"
    >
      <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
      <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm">
        <ImageIcon size={32} />
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="h-6 bg-gray-200 rounded-full w-32 mb-2"></div>
        <div className="h-6 bg-gray-200 rounded-full w-32 mb-2"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
