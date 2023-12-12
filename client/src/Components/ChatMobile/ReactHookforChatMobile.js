import { useEffect } from 'react';

const useScript = url => {
    useEffect(() => {
      const script = document.createElement('script');
  
      script.src = url;
      script.async = true;
  
      document.body.appendChild(script);
  
      const handleError = event => {
        console.error('Script error:', event);
      };
  
      script.addEventListener('error', handleError);
  
      return () => {
        document.body.removeChild(script);
        script.removeEventListener('error', handleError);
      };
    }, [url]);
  };
  
  export default useScript;  