"use client"

import type React from "react"
import { useState } from "react"
import { Lock, User, Send } from "lucide-react"

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  const [passcode, setPasscode] = useState("")
  const [showToast, setShowToast] = useState(false)

  const VALID_PASSCODE = "chris@crc"

  const handlePasscodeSubmit = () => {
    if (passcode === VALID_PASSCODE) {
      setCurrentPage(3)
    } else {
      setShowToast(true)
      setPasscode("")
      setTimeout(() => setShowToast(false), 3000)
    }
  }

  const handleOpenForm = () => {
    const n8nFormUrl = "https://brandmultiplier.app.n8n.cloud/form-test/3efd1ee4-892c-4249-9786-8bc312b21456"
    window.open(n8nFormUrl, "_blank")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handlePasscodeSubmit()
    }
  }

  // Page 1 - Welcome
  if (currentPage === 1) {
    return (
      <div className="h-screen w-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Brand
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Multiplier
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-12">
            Welcome to B* StoryLens Generator
          </h2>
          <button
            onClick={() => setCurrentPage(2)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Get started
          </button>
        </div>
      </div>
    )
  }

  // Page 2 - Passcode
  if (currentPage === 2) {
    return (
      <div className="h-screen w-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative">
        {showToast && (
          <div className="absolute top-4 right-4 bg-red-500 bg-opacity-90 backdrop-blur-lg text-white px-4 py-2 rounded-lg flex items-center gap-2 z-50 border border-red-400 border-opacity-30">
            <Lock size={16} />
            <span>Invalid passcode. Please try again.</span>
          </div>
        )}

        <div
          className="rounded-2xl p-8 w-full max-w-sm mx-4 shadow-2xl"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <div className="text-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Lock className="text-white" size={24} />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Secure Access</h2>
            <p className="text-white text-opacity-70 text-sm">Enter your authorized passcode</p>
          </div>

          <div className="space-y-4">
            <input
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 rounded-lg text-white placeholder-white placeholder-opacity-50 text-center tracking-widest focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
              placeholder="Enter Your Passcode"
              autoFocus
            />

            <button
              onClick={handlePasscodeSubmit}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Access Portal
            </button>

            <button
              onClick={() => setCurrentPage(1)}
              className="w-full text-white text-opacity-70 hover:text-opacity-100 transition-colors text-sm mt-4"
            >
              ← Back to Welcome
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Page 3 - Dashboard
  if (currentPage === 3) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 sm:p-6">
        <div className="max-w-4xl mx-auto w-full">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 md:p-12 border border-white/20 shadow-2xl text-center">
            <div className="mb-6 sm:mb-8">
              <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-xl">
                <User className="text-white" size={28} />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Hello Chris! 👋</h1>
              <p className="text-white/80 text-lg sm:text-xl">Your Lead Intake form is ready</p>
            </div>

            <div className="mb-8 sm:mb-12">
              <p className="text-white/70 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
                Click the below button to visit the form and fill out leads info.
                <br />
                <br />
                <span className="text-blue-300 font-medium">
                  Entered lead's report will be automatically mailed by the Story Lens Automation to your email in couple of
                  minutes/hours. If Any Issues arises, please contact at <a href="mailto:sivasish@chrisrubincreativ.com">sivasish@chrisrubincreativ.com</a> or <a href="mailto:support@chrisrubincreativ.com">support@chrisrubincreativ.com</a>
                </span>
              </p>
            </div>

            <div className="flex justify-center gap-4 mb-6 sm:mb-8">
              <button
                onClick={handleOpenForm}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 md:px-12 py-4 sm:py-5 rounded-xl font-semibold text-base sm:text-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center"
              >
                <Send size={20} className="sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base md:text-lg">Click here to visit the form link</span>
              </button>
            </div>

            <button
              onClick={() => setCurrentPage(1)}
              className="text-white/60 hover:text-white/80 transition-colors text-sm"
            >
              ← Logout
            </button>
          </div>
        </div>
      </div>
    )
  }

  return null
}
