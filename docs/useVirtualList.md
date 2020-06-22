# useVirtualList 📃

Provides a virtual list based on the number of elements to render, how big each row is,
the size of the viewport and overscan amount (optional). Components using this hook
are expected to provide an outer container using a ref, and an inner container with
`relative` position and `height` based on `data.length * rowHeight`.

## Usage

```jsx
import React from "react"
import { useVirtualList } from "dicty-hooks"

const VirtualList = ({ data }) => {
  const parentRef = React.useRef(null)
  const rowData = useVirtualList({
    ref: parentRef,
    rowHeight: 35,
    numItems: data.length,
    viewportHeight: 310,
  })
  // total height of the list itself
  const innerHeight = data.length * 35

  return (
    <Paper ref={parentRef}>
      <List style={{ position: "relative", height: `${innerHeight}px` }}>
        {rowData.items.map((item: any) => {
          const row = data[item.index]
          return (
            <ListItem key={item.index} style={item.style}>
              {row}
            </ListItem>
          )
        })}
      </List>
    </Paper>
  )
}
```
