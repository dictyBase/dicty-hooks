import { useEffect, useState } from "react"
import navbarItems from "../data/navbar"

type NavbarJson = {
  data: Array<{
    id: string
    type: string
    attributes: {
      display: string
      items: Array<Item>
    }
  }>
}

type Item = {
  label: string
  link: string
}

type NavbarArray = Array<{
  dropdown: boolean
  title: string
  items: Array<{
    name: string
    href: string
  }>
}>

const navbarUrl = process.env.REACT_APP_NAVBAR_JSON || ""

/**
 * formatNavbarItems is a helper function to convert the links
 * under each header into the accepted navbar data format.
 */
const formatNavbarItems = (items: Array<Item>) =>
  items.map(c => ({
    name: c.label,
    href: c.link,
  }))

/**
 * formatNavbarData converts the received navbar JSON data and
 * converts it into the dicty-navbar data format.
 */
const formatNavbarData = (json: NavbarJson) =>
  json.data.map(item => ({
    dropdown: true,
    title: item.attributes.display,
    items: formatNavbarItems(item.attributes.items),
  }))

/**
 * useNavbar is a hook for fetching dictyBase navbar
 * JSON data. It uses an included data array as its
 * initial state then replaces it with fetched data
 * on a successful request.
 */

const useNavbar = () => {
  const [navbarData, setNavbarData] = useState<NavbarArray>(navbarItems)
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    const fetchNavbar = async () => {
      try {
        const res = await fetch(navbarUrl)
        const json = await res.json()
        if (res.ok) {
          setNavbarData(formatNavbarData(json))
        } else {
          setError(res.statusText)
        }
      } catch (error) {
        setError(error.toString())
      }
    }
    fetchNavbar()
  }, [])

  return { navbarData, error }
}

export { formatNavbarData }
export default useNavbar
