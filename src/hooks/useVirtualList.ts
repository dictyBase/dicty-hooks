import React from "react"

// reference: https://medium.com/ingeniouslysimple/building-a-virtualized-list-from-scratch-9225e8bec120

type ConfigParams = {
  /** React ref used to access DOM node */
  ref: React.MutableRefObject<any>
  /** Height of the scrollable area (inner container) */
  viewportHeight: number
  /** Height of individual row */
  rowHeight: number
  /** Number of items in total */
  numItems: number
  /** Number of elements to render above and below viewport */
  overscan?: number
}

const useVirtualList = ({
  ref,
  viewportHeight,
  rowHeight,
  numItems,
  overscan,
}: ConfigParams) => {
  /**
   * scrollTop measures how far the inner container is scrolled.
   * It is the difference between the total list height and the viewport
   * height.
   */
  const [scrollTop, setScrollTop] = React.useState(0)

  let startIndex = Math.floor(scrollTop / rowHeight)
  let endIndex = Math.min(
    numItems - 1, // don't render past the end of the list
    Math.floor((scrollTop + viewportHeight) / rowHeight),
  )

  if (overscan) {
    startIndex = Math.max(0, startIndex - overscan)
    endIndex = Math.min(numItems - 1, endIndex + overscan)
  }

  const items = []
  for (let i = startIndex; i <= endIndex; i++) {
    items.push({
      // index is required so we know the exact row of data to display
      index: i,
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: `${rowHeight}px`,
        transform: `translateY(${i * rowHeight}px)`,
      },
    })
  }

  const handleScroll = (event: React.UIEvent<HTMLElement>) => {
    setScrollTop(event.currentTarget.scrollTop)
  }

  React.useEffect(() => {
    if (ref && ref.current) {
      const element = ref.current
      element.onscroll = handleScroll
    }
  }, [ref])

  return { items }
}

export default useVirtualList
