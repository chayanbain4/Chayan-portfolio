import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Replay each entrance whenever its content returns to the viewport.
// Completed content stays visible between entries, preventing grouped content
// from disappearing when its first child scrolls past the top edge.
export default function useReveal(groups, sharedOptions = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return undefined

    const list =
      typeof groups === 'string' ? [{ selector: groups, ...sharedOptions }] : groups

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      list.forEach((group) => {
        gsap.set(root.querySelectorAll(group.selector), {
          clearProps: 'opacity,transform,filter,visibility',
        })
      })
      return undefined
    }

    const ctx = gsap.context(() => {
      list.forEach((group) => {
        const targets = gsap.utils.toArray(group.selector, root)
        if (!targets.length) return

        const animate = (items, trigger, stagger = group.stagger ?? 0.09) => gsap.fromTo(
          items,
          {
            autoAlpha: 0,
            y: group.y ?? 48,
            x: group.x ?? 0,
            rotateX: group.rotateX ?? 0,
            rotateY: group.rotateY ?? 0,
            rotateZ: group.rotateZ ?? 0,
            scale: group.scale ?? 0.985,
            filter: `blur(${group.blur ?? 7}px)`,
            transformPerspective: group.perspective ?? 1000,
            transformOrigin: group.transformOrigin ?? 'center center',
            willChange: 'transform, opacity, filter',
          },
          {
            autoAlpha: 1,
            y: 0,
            x: 0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: group.duration ?? 0.9,
            ease: group.ease ?? 'power3.out',
            stagger,
            scrollTrigger: {
              trigger,
              start: group.start ?? 'top 86%',
              end: group.end ?? 'bottom top',
              once: false,
              toggleActions: 'restart none restart none',
              invalidateOnRefresh: true,
            },
            onComplete: () => {
              gsap.set(items, {
                willChange: 'auto',
              })
            },
          },
        )

        if (group.each) {
          targets.forEach((target) => animate([target], target, 0))
          return
        }

        const trigger = group.trigger
          ? root.querySelector(group.trigger) || targets[0]
          : targets[0]

        animate(targets, trigger)
      })
    }, root)

    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 80)

    return () => {
      window.clearTimeout(refreshTimer)
      ctx.revert()
    }
    // Animation configuration is intentionally fixed after mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ref
}
