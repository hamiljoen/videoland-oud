import logo from './logo.svg';
import './resources/style/main.css';
import useDatabase from './hooks/useDatabase'

const App = () => {

  const [data, isLoaded] = useDatabase("series")

  const renderList = () => {
    return(
        <ul>
          {
            data.map( (item, index) => {
              return(
                  <li key={ index }>{ `${item.data.titel} by ${item.data.seizoenen}` }</li>
              )
            })
          }
        </ul>
    )
  }

  return(
      <div>
        <h1>Lijst</h1>
        { isLoaded && renderList() }
      </div>
  )


}
export default App;
