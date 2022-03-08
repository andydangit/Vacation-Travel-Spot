import Card from './components/Card'
import Data from './Data'

import './App.css';


function App() {

  const newData = Data.map(data => {
    return (
      <Card  {...data} /> 
    )

  })

  return (
    <div className="App">
      <h1>Vacation Spot </h1> 
      <section> {newData} </section>
    </div>
  );
}

export default App;
