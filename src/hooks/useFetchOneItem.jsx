import { useState, useEffect } from 'react'

export function useFetch(url, id) {


    const [data, setData] = useState({})

    const [isLoading, setLoading] = useState(true)

    const [error, setError] = useState(false)

    const [item, setItem] = useState({})

    useEffect(() => {
        if (!url) return

        setLoading(true)

        async function fetchData() {
            try {
                const response = await fetch(url)

                const data = await response.json()

                setData(data)
                setItem(data.find(obj => {
                 return obj.id === (id)}))
            } catch (err) {
                console.log(err)

                setError(true)
            } finally {
                setLoading(false)

            }
        }

        fetchData()
    }, [url, id])

    return { isLoading, data, error, item }
}