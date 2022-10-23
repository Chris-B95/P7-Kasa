import { useFetch } from '../hooks/useFetch'
import Card from './Card'

function Cards() {
    const { isLoading, data, error } = useFetch('./logements.json')
    const logsData = data
    const loading = isLoading
    const loadError = error
    console.log(logsData)
    console.log(loading)
    console.log(loadError)

    return (
        <div>
          {loading
            ? <span>loading</span>
            :         <>
            {logsData.map(({ id, title, cover }) => (
                <Card key={id} title={title} cover={cover}>
                </Card>
            ))}
        </>
          }
        </div>
      );
}

export default Cards
