import React from 'react'
import ReactDOM from 'react-dom/client'
import { render, screen } from '@testing-library/react'
import 'bootstrap/dist/css/bootstrap.min.css' // Bootstrap CSS
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// Component rendering for testing
test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})

// Application rendering
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

reportWebVitals()
