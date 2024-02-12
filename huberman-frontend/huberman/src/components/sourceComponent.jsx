// Sources.js
import Link from "next/link";

export default function Sources({ youtubeUrls }) {

  if (youtubeUrls.length == 0) {
    return null; // Don't render the div if there's no response yet
  }
  return (
    <div className="mt-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Sources</h2>
      <div className="grid grid-cols-5 gap-4">
        {youtubeUrls.map((url, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            {/* Rendering YouTube thumbnails or links */}
            <Link href={url} className="text-sm font-medium text-gray-800 dark:text-gray-200">
              {`Source ${index + 1}`}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
