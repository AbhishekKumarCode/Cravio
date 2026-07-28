import { useEffect, useRef, useState } from 'react'

const CAPTURE_WIDTH = 960
const FPS = 30

// Plays the source video once, capturing every frame to offscreen canvases,
// then loops the captured frames forward->reverse->forward forever (a
// "boomerang") instead of the video's native loop restarting with a jump cut.
function BoomerangVideoBg({ src }) {
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const framesRef = useRef([])
  const lastCaptureTimeRef = useRef(-1)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    let rafId = null
    let vfcId = null

    function captureFrame() {
      if (!video.videoWidth || video.currentTime === lastCaptureTimeRef.current) return
      lastCaptureTimeRef.current = video.currentTime
      const scale = CAPTURE_WIDTH / video.videoWidth
      const w = CAPTURE_WIDTH
      const h = Math.round(video.videoHeight * scale)
      const frameCanvas = document.createElement('canvas')
      frameCanvas.width = w
      frameCanvas.height = h
      frameCanvas.getContext('2d').drawImage(video, 0, 0, w, h)
      framesRef.current.push(frameCanvas)
    }

    function frameLoop() {
      captureFrame()
      if (video.requestVideoFrameCallback) {
        vfcId = video.requestVideoFrameCallback(frameLoop)
      } else {
        rafId = requestAnimationFrame(frameLoop)
      }
    }

    function handlePlaying() {
      if (video.requestVideoFrameCallback) {
        vfcId = video.requestVideoFrameCallback(frameLoop)
      } else {
        rafId = requestAnimationFrame(frameLoop)
      }
    }

    function handleEnded() {
      if (rafId) cancelAnimationFrame(rafId)
      setReady(true)
    }

    video.addEventListener('playing', handlePlaying)
    video.addEventListener('ended', handleEnded)
    video.play().catch(() => {})

    return () => {
      video.removeEventListener('playing', handlePlaying)
      video.removeEventListener('ended', handleEnded)
      if (rafId) cancelAnimationFrame(rafId)
      if (vfcId && video.cancelVideoFrameCallback) video.cancelVideoFrameCallback(vfcId)
    }
  }, [src])

  useEffect(() => {
    if (!ready) return
    const canvas = canvasRef.current
    const frames = framesRef.current
    if (!canvas || !frames.length) return
    const ctx = canvas.getContext('2d')
    canvas.width = frames[0].width
    canvas.height = frames[0].height

    let index = 0
    let direction = 1
    const drawFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(frames[index], 0, 0)
      if (index >= frames.length - 1) direction = -1
      else if (index <= 0) direction = 1
      index += direction
    }
    const intervalId = setInterval(drawFrame, 1000 / FPS)
    return () => clearInterval(intervalId)
  }, [ready])

  return (
    <div className="boomerang-video-wrap">
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="auto"
        crossOrigin="anonymous"
        className="boomerang-video"
        style={{ display: ready ? 'none' : 'block' }}
      />
      <canvas
        ref={canvasRef}
        className="boomerang-canvas"
        style={{ display: ready ? 'block' : 'none' }}
      />
    </div>
  )
}

export default BoomerangVideoBg
