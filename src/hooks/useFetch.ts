import React from "react"

type UseFetch<T> = {
  error: boolean
  data: T
}

/**
 * useFetch is a hook for fetching JSON data.
 */
const useFetch = <T>(url: string, initialData: T = {} as T): UseFetch<T> => {
  const [data, setData] = React.useState<T>(initialData)
  const [error, setError] = React.useState<boolean>(false)

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
