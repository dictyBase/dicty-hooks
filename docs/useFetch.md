# useFetch 🐶

Fetches and returns JSON data.

## Usage

```jsx
import { useFetch } from "dicty-hooks"

const Demo = () => {
  const { data, error } = useFetch()

  if (error) {
    return <div>got an error :(</div>
  }

  return (
    <div>
      This is a sample app.
      {data && <Footer items={data} />}
    </div>
  )
}
```
