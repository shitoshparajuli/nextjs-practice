// Answer.js
export default function Answer({ response }) {
    return (
      <div className="mt-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Answer</h2>
        <p className="text-gray-600 dark:text-gray-400">{response}</p>
      </div>
    );
  }
  