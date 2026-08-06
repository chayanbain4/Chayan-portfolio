import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

const disciplines = ['Web platforms', 'Mobile apps', 'AI systems', 'Automation']

const Preloader = ({ onDone }) => {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const resetHorizontalScroll = () => {
      document.documentElement.scrollLeft = 0
      document.body.scrollLeft = 0
    }

    resetHorizontalScroll()
    document.body.style.overflow = 'hidden'

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete: () => {
          document.body.style.overflow = ''
          resetHorizontalScroll()
          onDone?.()
        },
      })

      timeline
        .set('.pl-ring', { opacity: 0, scale: 0, transformOrigin: 'center center' })
        .set('.pl-letter', { opacity: 0, y: 72, rotateX: -70 })
        .set('.pl-kicker, .pl-subtitle, .pl-discipline, .pl-progress-label', { opacity: 0, y: 20 })
        .set('.pl-disciplines, .pl-progress-track', { opacity: 0 })
        .set('.pl-rule, .pl-progress-fill', { opacity: 0, scaleX: 0, transformOrigin: 'left center' })
        .to('.pl-ring--gold', { opacity: 1, scale: 1, duration: 0.66, ease: 'power3.inOut' }, 0)
        .to('.pl-ring--rust', { opacity: 1, scale: 1, duration: 0.7, ease: 'power3.inOut' }, 0.12)
        .to('.pl-ring--dark', { opacity: 1, scale: 1, duration: 0.76, ease: 'power3.inOut' }, 0.26)
        .to('.pl-rule', { opacity: 1, scaleX: 1, duration: 0.7 }, 0.88)
        .to('.pl-kicker', { opacity: 1, y: 0, duration: 0.5 }, 0.92)
        .to('.pl-letter', { opacity: 1, y: 0, rotateX: 0, duration: 0.68, stagger: 0.055, ease: 'power4.out' }, 1)
        .to('.pl-subtitle', { opacity: 1, y: 0, duration: 0.5 }, 1.32)
        .to('.pl-disciplines', { opacity: 1, duration: 0.35 }, 1.42)
        .to('.pl-discipline', { opacity: 1, y: 0, duration: 0.46, stagger: 0.06 }, 1.46)
        .to('.pl-progress-track', { opacity: 1, duration: 0.3 }, 1.6)
        .to('.pl-progress-label', { opacity: 1, y: 0, duration: 0.36 }, 1.62)
        .to('.pl-progress-fill', { opacity: 1, scaleX: 1, duration: 0.86, ease: 'power2.inOut' }, 1.62)
        .to({}, { duration: 0.24 })
        .to('.pl-stage', { y: -48, opacity: 0, duration: 0.6, ease: 'power2.in' }, 'exit')
        .to(rootRef.current, { clipPath: 'inset(0 0 100% 0)', duration: 0.9, ease: 'power3.inOut' }, 'exit+=0.2')
    }, rootRef)

    return () => {
      document.body.style.overflow = ''
      context.revert()
    }
  }, [onDone])

  return (
    <div className="preloader" ref={rootRef}>
      <div className="pl-ring pl-ring--gold" />
      <div className="pl-ring pl-ring--rust" />
      <div className="pl-ring pl-ring--dark" />
      <div className="pl-stage">
        <div className="pl-rule" />
        <span className="pl-kicker">Independent software developer</span>
        <div className="pl-wordmark" aria-label="Chayan">
          {'CHAYAN'.split('').map((letter, index) => (
            <strong className="pl-letter" key={`${letter}-${index}`}>{letter}</strong>
          ))}
        </div>
        <span className="pl-subtitle">Building dependable digital products end to end</span>
        <div className="pl-disciplines">
          {disciplines.map((discipline) => <span className="pl-discipline" key={discipline}>{discipline}</span>)}
        </div>
        <div className="pl-progress">
          <div className="pl-progress-track"><i className="pl-progress-fill" /></div>
          <span className="pl-progress-label">Preparing portfolio</span>
        </div>
      </div>
    </div>
  )
}

export default Preloader
