import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Navbar from './Components/Navbar/Navbar'
import Title from './Components/Title/Title';

function App() {
    return (
        <div className="App">
            <header className="App-header">
              <Navbar />
              <Title />
              <Dashboard />
            </header>
        </div>
    )
}

export default App;
