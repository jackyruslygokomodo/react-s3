import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      Admin

      <Link to={`about`}>Go to About</Link>
    </div>
  )
}

export default App
