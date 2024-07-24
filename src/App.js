import React, { Suspense, lazy } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Header from './components/Header'
import Footer from './components/Footer'
import { useTranslation } from 'react-i18next'

const MainContent = lazy(() => import('./components/MainContent'))

function App() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n
      .changeLanguage(lng)
      .catch((error) => console.error('Language change error:', error))
  }

  return (
    <div className="App">
      <Router>
        <Header />
        <div style={{ height: '2px', backgroundColor: 'black' }}></div>
        <Suspense fallback={<div>{t('loading')}</div>}>
          <Routes>
            <Route path="/" element={<MainContent />} />
            {/* Add other routes here */}
          </Routes>
        </Suspense>
        <div>
          <div style={{ height: '2px', backgroundColor: 'black' }}></div>
          <Footer />
        </div>
      </Router>
      <div>
        <h1>{t('welcome')}</h1>
        <p>{t('description')}</p>
        <Button onClick={() => changeLanguage('en')}>English</Button>
        <Button onClick={() => changeLanguage('fr')}>French</Button>
        <Button onClick={() => changeLanguage('es')}>Spanish</Button>
      </div>
    </div>
  )
}

export default App
