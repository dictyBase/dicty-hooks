# useFooter 🦶

Fetches footer JSON data and converts it to [dicty-components-header-footer](https://github.com/dictyBase/dicty-components-header-footer) format. If there is an error during fetching,
it returns static data as a fallback.

## Usage

```jsx
import { Footer } from "dicty-components-header-footer"
import { useNavbar } from "dicty-hooks"

const Demo = () => {
  const { footerData } = useFooter()

  return <Footer items={footerData} />
}
```
