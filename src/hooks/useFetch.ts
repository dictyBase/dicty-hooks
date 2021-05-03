import React from "react"

/**
 * useFetch is a hook for fetching JSON data.
 */
const useFetch = (url: string, initialData = {}) => {
  const [data, setData] = React.useState(initialData)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    let didCancel = false
    const fetchData = async () => {
      try {
        const res = await fetch(url)
        const json = await res.json()
        if (!didCancel) {
          setData(json)
        }
      } catch (error) {
        setError(true)
      }
    }

    fetchData()

    // prevent unnecessary refetching
    // https://www.robinwieruch.de/react-hooks-fetch-data
    return () => {
      didCancel = true
    }
  }, [url])

  return { data, error }
}

export default useFetch
