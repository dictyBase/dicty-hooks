# useIntersectionObserver 🧐

Determines if a target element is intersecting with an ancestor element.

[IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

## Usage

```jsx
import React from "react"
import { useIntersectionObserver } from "dicty-hooks"

const Demo = () => {
  const targetRef = React.useRef(null)
  const { intersecting, ref } = useIntersectionObserver()

  React.useEffect(() => {
    if (intersecting && hasMore) {
      loadMore()
    }
  }, [hasMore, loadMore, intersecting])

  return (
    <List>
      {data.map((item, index) => (
        <ListItem>{item}</ListItem>
      ))}
      {isLoadingMore && <ListItem>Fetching more list items...</ListItem>}
      <div ref={ref} />
    </List>
  )
}
```
