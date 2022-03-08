import Card from './components/Card'
import Navbar from './components/Navbar'
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
      <Navbar />
      <section> {newData} </section>
    </div>
  );
}

export default App;
