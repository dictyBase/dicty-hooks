# useNavbar 🧭

Fetches navbar JSON data and converts it to [dicty-components-navbar](https://github.com/dictyBase/dicty-components-navbar) format. If there is an error during fetching,
it returns static data as a fallback.

## Usage

```jsx
import { Navbar } from "dicty-components-navbar"
import { useNavbar } from "dicty-hooks"

const Demo = () => {
  const { navbarData } = useNavbar()

  return <Navbar items={navbarData} theme={navTheme} />
}
```
