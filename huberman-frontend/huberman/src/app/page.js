"use client"
import React, { useState, useEffect } from 'react';
import Header from '@/components/headerComponent'
import InputComponent from '@/components/inputComponent'
import Answer from '@/components/answerComponent'
import Sources from '@/components/sourceComponent'
import Footer from '@/components/footerComponent'

export default function MyPage() {

  return (
    <div className="flex flex-col justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
    <div className="w-full flex flex-col items-center">
        <Header />
        <InputComponent />
        <Answer />
        <Sources />
        <Footer />
    </div>
    </div>
  );
}
