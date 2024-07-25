const checkMobileDevice = () => {
    const isMobile = window.innerWidth <= 768 && window.innerHeight <= 1024;
    return isMobile;
  };
  
  export default checkMobileDevice;