import React from 'react'
import UrlForm from '../components/UrlForm'
import UserUrl from '../components/UserUrl'

const DashboardPage = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[#042940] flex justify-center px-4 py-10">
      <div className="w-full max-w-6xl">
        <div className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl border border-[#D6D58E]/60 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#042940]">
                Your URL Dashboard
              </h1>
              <p className="text-sm md:text-base text-gray-600 mt-1">
                Create new short links and track how they perform over time.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#005C53]/10 text-[#005C53] border border-[#005C53]/30">
                Live stats every 30s
              </span>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr,1.2fr] items-start">
            <section className="order-1">
              <h2 className="text-lg font-semibold mb-3 text-[#042940]">
                Create a new short link
              </h2>
              <UrlForm />
            </section>

            <section className="order-2">
              <h2 className="text-lg font-semibold mb-3 text-[#042940]">
                Your links
              </h2>
              <UserUrl />
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage