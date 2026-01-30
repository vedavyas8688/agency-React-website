 import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({ theme, setTheme }) => {

   useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDarkMode =
      window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      setTheme(prefersDarkMode ? 'dark' : 'light')
    }
  }, [])

   useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (theme) {
      localStorage.setItem('theme', theme)
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <button onClick={toggleTheme}>
      {theme === 'dark' ? (
        <img
          src={assets.sun_icon}
          className="size-8.5 p-1.5 border border-gray-500 rounded-full"
          alt="Switch to light mode"
        />
      ) : (
        <img
          src={assets.moon_icon}
          className="size-8.5 p-1.5 border border-gray-500 rounded-full"
          alt="Switch to dark mode"
        />
      )}
    </button>
  )
}

export default ThemeToggleBtn
