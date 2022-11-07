import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function useFetch(url, id) {
    const [data, setData] = useState({})

    const [isLoading, setLoading] = useState(true)

    const [error, setError] = useState(false)

    const [item, setItem] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        if (!url) return

        setLoading(true)

        async function fetchData() {
            try {
                const response = await fetch(url)

                const data = await response.json()

                setData(data)

                if (id !== 'all') {
                    data.find((obj) => {
                        return obj.id === id
                    })
                        ? setItem(
                              data.find((obj) => {
                                  return obj.id === id
                              })
                          )
                        : navigate('/Logement inexistant')
                }
            } catch (err) {
                console.log(err)

                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [url, id, navigate])

    return { isLoading, data, error, item }
}
