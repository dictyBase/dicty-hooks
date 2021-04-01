import React from "react"

// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

type ConfigParams = {
  /** Element used as viewport for checking visibility of target */
  root?: Element | null
  /** Margin around the root (i.e. "20px") */
  rootMargin?: string
  /** Indicates the percentage of the target's visibility the observer's
   * callback should be executed (number between 0 and 1) */
  threshold?: number
}

type UseIntersectionObserverResponse = {
  /** Target ref to observe */
  ref: (node?: Element | null) => void
  /** Indicates if target ref is visible */
  intersecting: boolean
}

const useIntersectionObserver = ({
  root = null,
  rootMargin = "0px",
  threshold = 0.25,
}: ConfigParams = {}) => {
  const [intersecting, setIntersecting] = React.useState(false)
  const [targetRef, setTargetRef] = React.useState(null)
  const observerRef = React.useRef<any>(null)

  // set up callback fn that updates intersecting state
  const observerCallback = React.useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      setIntersecting(entry.isIntersecting)
    },
    [],
  )

  // callback fn that adds intersection observer to observer ref
  // and observes the target ref if it exists
  // https://medium.com/@teh_builder/ref-objects-inside-useeffect-hooks-eb7c15198780#
  const observe = React.useCallback(() => {
    // preserve the intersection observer by storing the mutable value in the '.current' property
    observerRef.current = new IntersectionObserver(observerCallback, {
      root,
      rootMargin,
      threshold,
    })

    if (targetRef) {
      observerRef.current.observe(targetRef)
    }
  }, [observerCallback, root, rootMargin, targetRef, threshold])

  // set up the intersection observer
  React.useEffect(() => {
    observe()

    return () => observerRef.current.disconnect()
  }, [observe])

  return { intersecting, ref: setTargetRef } as UseIntersectionObserverResponse
}

export default useIntersectionObserver
