import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/MainContent' // Imported as Home
import MainContent from './components/MainContent'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div style={{ height: '2px', backgroundColor: 'black' }}></div>
        <Home /> {/* Use Home instead of MainContent */}
        <div>
          <div style={{ height: '2px', backgroundColor: 'black' }}></div>
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App
