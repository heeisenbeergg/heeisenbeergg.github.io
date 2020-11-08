import React from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

import { Sticky } from '../../styles'

const FirstAndSecond: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()
  const frameOpacity = useTransform(scrollYProgress, [0.196, 0.198], [0, 1])
  const frameScale = useTransform(scrollYProgress, [0.558, 0.627], [0.511, 0.8])

  return (
    <Sticky className="second">
      <img
        className="universi"
        src="https://data.1freewallpapers.com/download/helix-nebula-space-stars-explosion-brilliance.jpg"
      />
      <First />

      <motion.div
        style={{
          height: '100vh',
          borderRadius: '4px',
          border: '4px solid #fff',
          opacity: frameOpacity,
          scale: frameScale,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0
        }}
      />
    </Sticky>
  )
}

const First: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()

  const firstScale = useTransform(
    scrollYProgress,
    [0.198, 0.264, 0.558, 0.627],
    [1, 0.511, 0.511, 1]
  )

  const firstRadius = useTransform(
    scrollYProgress,
    [0.198, 0.264, 0.558, 0.627],
    [0, 4, 4, 0]
  )

  const leftSideHeight = useTransform(
    scrollYProgress,
    [0, 0.058],
    ['20vh', '100vh']
  )

  const leftSideTranslateY = useTransform(
    scrollYProgress,
    [0.27, 0.49],
    ['translateY(0vh)', 'translateY(-400vh)']
  )

  const rightSideY = useTransform(
    scrollYProgress,
    [0.047, 0.093],
    ['58vh', '0vh']
  )

  const rightSideScale = useTransform(
    scrollYProgress,
    [0.047, 0.093],
    [0, 0.511]
  )

  const offsetY = useTransform(
    scrollYProgress,
    [0.328, 0.397, 0.461, 0.53],
    ['0%', '-100%', '-100%', '-200%']
  )

  return (
    <Sticky
      className="first"
      style={{ scale: firstScale, borderRadius: firstRadius }}
    >
      <motion.div className="offset" style={{ y: offsetY }}>
        <div className="a">
          <motion.div
            className="left-side"
            style={{
              height: leftSideHeight,
              transform: leftSideTranslateY
            }}
          />
          <div className="right-side">
            <motion.img
              src="https://avatars1.githubusercontent.com/u/40906956?s=460&u=d60ac8242d37f44fd9891dcdd22efd15d8ccf9d4&v=4"
              className="right-image"
              style={{ y: rightSideY, scale: rightSideScale }}
            />
          </div>
        </div>
        <div className="b"></div>
        <div className="c"></div>
      </motion.div>
    </Sticky>
  )
}

export default FirstAndSecond
