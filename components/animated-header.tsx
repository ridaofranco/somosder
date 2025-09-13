"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Header from "@/components/header"

export function AnimatedHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (typeof window === "undefined") return
    
    const handleScroll = () => {
      const currentScrollPos = window.scrollY

      // Determine if we've scrolled past the threshold
      setScrolled(currentScrollPos > 20)

      // Determine if we should show or hide the header
      const isScrollingDown = prevScrollPos < currentScrollPos
      const isScrollingSignificantly = Math.abs(prevScrollPos - currentScrollPos) > 10

      if (isScrollingDown && isScrollingSignificantly && currentScrollPos > 80) {
        setVisible(false)
      } else {
        setVisible(true)
      }

      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos])

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 ${scrolled ? "shadow-md" : ""}`}
    >
      <Header />
    </motion.div>
  )
}
