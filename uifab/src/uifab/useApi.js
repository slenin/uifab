import { useEffect, useRef, useState } from 'react';

const useApi = (api) => {
  const [response, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const apiRef = useRef(api);
  useEffect(() => {
    const fetchData = async () => {
      const apiResponse = await apiRef.current();
      setResponse(apiResponse);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return [response, isLoading];
};

export default useApi;
