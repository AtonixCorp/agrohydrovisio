import { sendToAnalytics } from './analytics'

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals')
      .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry)
        getFID(onPerfEntry)
        getFCP(onPerfEntry)
        getLCP(onPerfEntry)
        getTTFB(onPerfEntry)
      })
      .catch((err) => {
        console.error('Error importing web-vitals', err)
      })
  }
}

export default reportWebVitals
