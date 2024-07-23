import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/MainContent' // Imported as Home

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Home /> {/* Use Home instead of MainContent */}
        <Footer />
      </Router>
    </div>
  )
}

export default App
