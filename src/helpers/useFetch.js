import { useEffect, useState } from 'react'

export default function useFetch (url) {
  const [data, setData] = useState([]) // Need some conditional rendering that works when this is default to null
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [url])

  return {data, loading, error}
}
