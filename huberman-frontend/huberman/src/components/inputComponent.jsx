import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function InputComponent({ onReceiveResponse }) {
  // State to store the user's question
  const [question, setQuestion] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Make the API call
    try {
      const response = await fetch('https://huberman-api-snowy-snowflake-9638.fly.dev/ask_huberman', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: question,
          history: [],
        }),
      });

      const json_response = await response.json();
      console.log(json_response);
      if (json_response && json_response.data && json_response.data.open_ai_response) {
        console.log(json_response.data.open_ai_response)
        const youtubeUrls = json_response.data.context_responses.map(cr => cr.youtube_url).filter(url => !!url);
        console.log(youtubeUrls)
        onReceiveResponse(json_response.data.open_ai_response, youtubeUrls); // Pass the response up to the parent
      }
    } catch (error) {
      console.error("Failed to fetch:", error);
      // Handle error scenarios
    }
  };

  return (
    <div className="w-full max-w-md">
      <form className="relative" onSubmit={handleSubmit}>
        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
        <Input
          className="pl-8 pr-12 py-2 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500"
          placeholder="Ask a question..."
          type="text"
          value={question} // Bind input value to state
          onChange={(e) => setQuestion(e.target.value)} // Update state on input change
        />
        <Button className="absolute right-2.5 top-2.5" type="submit">
          <ArrowRightIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
        </Button>
      </form>
    </div>
  );
}


function ArrowRightIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    )
  }
  
  
  function SearchIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }
