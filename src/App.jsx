import { useState } from "react"
import Tours from "./components/Tours"
import data from "./Data"

function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div>
        <div className="refresh">
          <h2>No Tours Left</h2>
          <button className="btn-white" onClick={() => setTours(data)}>
            Refresh
          </button>
        </div>
      </div>
    )
  }


  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  )
}

export default App
