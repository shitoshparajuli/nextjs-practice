import React, { useState, useEffect } from 'react';

export default function Answer({ response }) {
  const [typedResponse, setTypedResponse] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Only start the typing effect if there is a response and we haven't started typing yet
    if (response && currentIndex < response.length) {
      // Determine the typing speed and schedule the next character to be appended
      const typingSpeed = 5; // milliseconds
      const timeoutId = setTimeout(() => {
        setTypedResponse((typed) => typed + response.charAt(currentIndex));
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timeoutId); // Cleanup timeout if the component unmounts
    }
  }, [response, currentIndex]); // Depend on response and currentIndex to trigger effect

  return (
    <div className="mt-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Answer</h2>
      <p className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap break-words">
        {typedResponse}
        {/* Only show the typing cursor if we haven't finished typing out the response */}
        {currentIndex < response.length && <span className="typing-cursor">|</span>}
      </p>
    </div>
  );
}
