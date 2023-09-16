'use client' ;
import { useState } from 'react';
import Image from 'next/image'

export default function Home() {
    // State to store the URL entered by the user
    const [url, setUrl] = useState('');
    // State to store the result of phishing detection
    const [isPhishing, setIsPhishing] = useState<boolean | null>(null);
  
    // Function to handle URL input changes
    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUrl(e.target.value);
    };
  
    // Function to check if the URL is a phishing site
    const checkPhishing = async () => {
      try {
        // You would implement your phishing detection logic here.
        // For the sake of this example, we'll assume a simple check.
        const isPhishingSite = url.includes('phishing');
        setIsPhishing(isPhishingSite);
      } catch (error) {
        console.error('Error checking for phishing:', error);
        setIsPhishing(false); // Set to false in case of an error
      }
    };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Phishing Site Checker</h1>
        <p className="text-gray-600 mb-4">
          Enter a URL below to check if it's a phishing site:
        </p>

        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Enter URL"
            value={url}
            onChange={handleUrlChange}
            className="w-full py-2 px-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-400"
          />

          <button
            onClick={checkPhishing}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:shadow-md transition duration-300"
          >
            Check
          </button>
        </div>

        {isPhishing !== null && (
          <p className={`text-${isPhishing ? 'red' : 'green'}-600 mt-4`}>
            {isPhishing ? 'This is a phishing site!' : 'This site is safe.'}
          </p>
        )}
      </div>
    </div>
    </main>
  )
}
