const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      void getCLS(onPerfEntry);
      void getFID(onPerfEntry);
      void getFCP(onPerfEntry);
      void getLCP(onPerfEntry);
      void getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
