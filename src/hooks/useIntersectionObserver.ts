import React from "react"

// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

type ConfigParams = {
  /** React ref used to access DOM node */
  ref: React.MutableRefObject<any>
  /** Margin around the root */
  rootMargin?: string
  /** Indicates the percentage of the target's visibility the observer's
   * callback should be executed */
  threshold?: number
  /** Indicates whether there are more items to fetch */
  hasMore: boolean
}

const useIntersectionObserver = ({
  ref,
  rootMargin = "0px",
  threshold = 0.25,
  hasMore,
}: ConfigParams) => {
  const [intersecting, setIntersecting] = React.useState(false)

  React.useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      if (hasMore) {
        setIntersecting(entries[0].isIntersecting)
      }
    }

    const observer = new IntersectionObserver(callback, {
      rootMargin: rootMargin,
      threshold: threshold,
    })
    const target = ref.current
    observer.observe(target)

    return () => observer.unobserve(target)
  }, [hasMore, intersecting, ref, rootMargin, threshold])

  return intersecting
}

export default useIntersectionObserver
