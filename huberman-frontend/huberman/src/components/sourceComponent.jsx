// Sources.js
import Link from "next/link";

export default function Sources() {
  // Assuming the structure and data for sources could be dynamic or come from props
  return (
    <div className="mt-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Sources</h2>
      <div className="grid grid-cols-5 gap-4">
        {/* This part could be dynamically generated based on data */}
        {/* Example with static content for illustration */}
        {[1, 2, 3, 4, 5].map((source) => (
          <div key={source} className="flex flex-col items-center space-y-2">
            <img
              alt={`Source ${source}`}
              className="rounded-full"
              height="80"
              src="/placeholder.svg"
              style={{ aspectRatio: "80/80", objectFit: "cover" }}
              width="80"
            />
            <Link className="text-sm font-medium text-gray-800 dark:text-gray-200" href="#">
              Source {source}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
