import { Metric } from 'web-vitals'

type ReportHandler = (metric: Metric) => void

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    void import('web-vitals').then(
      ({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        void getCLS(onPerfEntry)
        void getFID(onPerfEntry)
        void getFCP(onPerfEntry)
        void getLCP(onPerfEntry)
        void getTTFB(onPerfEntry)
      },
    )
  }
}

export default reportWebVitals
