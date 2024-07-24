import { ReportHandler } from 'web-vitals'
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
      .catch((err) => console.error(err))
    console.error('Error importing web-vitals', error)
  }
}

export default reportWebVitals
