import React from 'react'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined'
import { useState } from 'react'
import "./ExploreSection.css"

function ExploreSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    "./img11.png",
    "./img12.png",
    "./img13.png",
    "./img4.png",
  ]

  const prevSlide = () => {
    setCurrentSlide((prev) => { return prev === 0 ? 1 : prev - 1 })
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => { return prev === 1 ? 0 : prev + 1 })
  }

  return (
    <div className="slider">
      <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
        <img src={data[3]} alt="" />
      </div>

      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  )
}

export default ExploreSection







