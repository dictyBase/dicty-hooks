# useFetchRefreshToken ⏱️

Executes a callback function on mount, then fires off the callback
at a specified interval if `isAuthenticated` is true. This is used to silently
fetch a refresh token in the background.

[Explanation of process](https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/#silent_refresh).

## Usage

```jsx
import { useRef } from "react"
import { useFetchRefreshToken } from "dicty-hooks"

const Demo = () => {
  const delay = 60000
  const interval = useRef(null)
  const isAuthenticated = true

  const fetchRefreshToken = useCallback(async () => {
    // add token fetching logic
  }, [])

  useFetchRefreshToken(fetchRefreshToken, interval, delay, isAuthenticated)

  return null
}
```
