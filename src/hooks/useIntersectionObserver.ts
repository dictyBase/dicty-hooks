import React from "react"

// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

type ConfigParams = {
  /** Margin around the root */
  rootMargin?: string
  /** Indicates the percentage of the target's visibility the observer's
   * callback should be executed */
  threshold?: number
  /** Indicates whether there are more items to fetch */
  hasMore?: boolean
}

type UseIntersectionObserverResponse = {
  /** Target ref to observe */
  ref: (node?: Element | null) => void
  /** Indicates if target ref is visible */
  intersecting: boolean
}

const useIntersectionObserver = ({
  rootMargin = "0px",
  threshold = 0.25,
  hasMore = true,
}: ConfigParams) => {
  const [intersecting, setIntersecting] = React.useState(false)
  const [targetRef, setTargetRef] = React.useState(null)
  const observerRef = React.useRef<any>(null)

  // set up callback fn that updates intersecting state if there is
  // more data to fetch
  const observerCallback = React.useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (hasMore) {
        setIntersecting(entry.isIntersecting)
      }
    },
    [hasMore],
  )

  // callback fn that adds intersection observer to observer ref
  // and observes the target ref if it exists
  // https://medium.com/@teh_builder/ref-objects-inside-useeffect-hooks-eb7c15198780#
  const observe = React.useCallback(() => {
    observerRef.current = new IntersectionObserver(observerCallback, {
      rootMargin,
      threshold,
    })

    if (targetRef) {
      observerRef.current.observe(targetRef)
    }
  }, [observerCallback, rootMargin, targetRef, threshold])

  // standard callback fn to disconnect from observer
  const disconnect = React.useCallback(() => {
    if (observerRef && observerRef.current) {
      observerRef.current.disconnect()
    }
  }, [])

  // set up the intersection observer
  React.useEffect(() => {
    observe()

    return () => {
      disconnect()
    }
  }, [observe, disconnect])

  return { intersecting, ref: setTargetRef } as UseIntersectionObserverResponse
}

export default useIntersectionObserver
