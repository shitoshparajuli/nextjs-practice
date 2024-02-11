"use client"
import React, { useState, useEffect } from 'react';
import Header from '@/components/headerComponent'
import InputComponent from '@/components/inputComponent'
import Answer from '@/components/answerComponent'
import Sources from '@/components/sourceComponent'
import Footer from '@/components/footerComponent'

export default function MyPage() {

  const [openAiResponse, setOpenAiResponse] = useState('');
  const [youtubeUrls, setYoutubeUrls] = useState([]);

  const handleSetOpenAiResponse = (response, youtubeUrls) => {
    setOpenAiResponse(response);
    setYoutubeUrls(youtubeUrls);
  };

  return (
    <div className="flex flex-col justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
    <div className="w-full flex flex-col items-center">
        <Header />
        <InputComponent onReceiveResponse={handleSetOpenAiResponse} />
        <Answer response={openAiResponse} />
        <Sources youtubeUrls={youtubeUrls} />
        <Footer />
    </div>
    </div>
  );
}
