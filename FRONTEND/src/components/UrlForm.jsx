import React, { useState } from 'react'
import { createShortUrl } from '../api/shortUrl.api'
import { useSelector } from 'react-redux'
import { queryClient } from '../main'

const UrlForm = () => {
  
  const [url, setUrl] = useState("https://www.google.com")
  const [shortUrl, setShortUrl] = useState()
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState(null)
  const [customSlug, setCustomSlug] = useState("")
  const {isAuthenticated} = useSelector((state) => state.auth)

  const handleSubmit = async () => {
    try{
      const shortUrl = await createShortUrl(url,customSlug)
      setShortUrl(shortUrl)
      queryClient.invalidateQueries({queryKey: ['userUrls']})
      setError(null)
    }catch(err){
      setError(err.message)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    
    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div className="space-y-4">
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-[#042940] mb-1">
            Enter your URL
          </label>
          <input
            type="url"
            id="url"
            value={url}
            onInput={(event)=>setUrl(event.target.value)}
            placeholder="https://example.com"
            required
            className="w-full px-4 py-3 border border-[#D6D58E] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9FC131] focus:border-[#9FC131] bg-[#F9FAFB]"
          />
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full bg-[#005C53] text-white py-3 px-4 rounded-xl hover:bg-[#042940] focus:outline-none focus:ring-2 focus:ring-[#DBF227] focus:ring-offset-2 focus:ring-offset-white disabled:opacity-50 font-semibold shadow-md"
        >
          Shorten URL
        </button>
         {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}
        {isAuthenticated && (
          <div className="mt-4">
            <label htmlFor="customSlug" className="block text-sm font-medium text-[#042940] mb-1">
              Custom URL (optional)
            </label>
            <input
              type="text"
              id="customSlug"
              value={customSlug}
              onChange={(event) => setCustomSlug(event.target.value)}
              placeholder="my‑campaign"
              className="w-full px-4 py-3 border border-[#D6D58E] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9FC131] focus:border-[#9FC131] bg-[#F9FAFB]"
            />
          </div>
        )}
        {shortUrl && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2 text-[#042940]">Your shortened URL</h2>
            <div className="flex items-center">
              <input
                type="text"
                readOnly
                value={shortUrl}
                className="flex-1 p-3 border border-[#D6D58E] rounded-l-xl bg-gray-50 text-sm"
              />
               <button
                onClick={handleCopy}
                className={`px-4 py-3 rounded-r-xl text-sm font-medium transition-colors duration-200 ${
                  copied 
                    ? 'bg-[#9FC131] text-[#042940] hover:bg-[#DBF227]' 
                    : 'bg-[#005C53] text-white hover:bg-[#042940]'
                }`}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        )}
      </div>
  )
}

export default UrlForm