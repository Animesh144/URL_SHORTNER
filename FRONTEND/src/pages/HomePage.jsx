
import React from 'react'
import UrlForm from '../components/UrlForm'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#042940] text-white relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="pointer-events-none absolute -top-16 -left-10 w-56 h-56 rounded-full bg-[#005C53]/40 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute top-1/3 -right-10 w-72 h-72 rounded-full bg-[#9FC131]/25 blur-3xl animate-[spin_18s_linear_infinite]" />
      <div className="pointer-events-none absolute bottom-[-4rem] left-10 w-64 h-64 rounded-[3rem] bg-[#DBF227]/20 blur-2xl animate-[bounce_6s_ease-in-out_infinite]" />

      <div className="relative max-w-6xl mx-auto px-4 py-16 lg:py-24 grid gap-12 lg:grid-cols-[1.2fr,1fr] items-center">
        {/* Left: Hero content */}
        <section>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#005C53]/20 text-[#DBF227] border border-[#005C53]">
            Lightning‑fast URL shortener
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight transition-transform duration-700 ease-out hover:translate-y-1">
            Short links, <span className="text-[#DBF227]">smarter</span> clicks.
          </h1>
          <p className="mt-4 text-base md:text-lg text-[#D6D58E] max-w-xl">
            Turn long, messy URLs into clean, trackable short links. Perfect for sharing on social media,
            campaigns, or anywhere you want a professional touch.
          </p>

          {/* Feature highlights */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-[#005C53]/60 border border-[#005C53] p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="font-semibold text-sm">One‑click shortening</h3>
              <p className="mt-1 text-xs text-[#D6D58E]">Paste, shorten, share. It really is that simple.</p>
            </div>
            <div className="rounded-xl bg-[#005C53]/60 border border-[#005C53] p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="font-semibold text-sm">Custom slugs</h3>
              <p className="mt-1 text-xs text-[#D6D58E]">Create branded links that match your content.</p>
            </div>
            <div className="rounded-xl bg-[#005C53]/60 border border-[#005C53] p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="font-semibold text-sm">Click tracking</h3>
              <p className="mt-1 text-xs text-[#D6D58E]">See how many times your links are clicked.</p>
            </div>
          </div>
        </section>

        {/* Right: Shortener card */}
        <section className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 text-gray-900 transform transition-transform duration-500 ease-out hover:-translate-y-1.5">
          <h2 className="text-xl font-bold text-center mb-4 text-[#042940]">
            Try it now
          </h2>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Paste a URL below to generate a short link instantly.
          </p>
          <UrlForm />

          {/* Palette strip */}
          <div className="mt-8 flex rounded-xl overflow-hidden">
            <div className="flex-1 h-3" style={{ backgroundColor: '#042940' }} />
            <div className="flex-1 h-3" style={{ backgroundColor: '#005C53' }} />
            <div className="flex-1 h-3" style={{ backgroundColor: '#9FC131' }} />
            <div className="flex-1 h-3" style={{ backgroundColor: '#DBF227' }} />
            <div className="flex-1 h-3" style={{ backgroundColor: '#D6D58E' }} />
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomePage