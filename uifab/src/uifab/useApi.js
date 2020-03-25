import { useEffect, useRef, useState } from 'react';

const useApi = (api, dependencyInitialValue) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dependency, setDependency] = useState(dependencyInitialValue);
  const apiRef = useRef(api);
  useEffect(() => {
    const fetchData = async () => {
      setData(null);
      setError(null);
      setIsLoading(true);
      const response = await apiRef.current(dependency);
      if (response.error) {
        setError(response.error);
      } else {
        setData(response.data);
      }

      setIsLoading(false);
    };
    fetchData();
  }, [dependency]);
  return {
    data,
    isLoading,
    error,
    dependency,
    setData,
    setIsLoading,
    setError,
    setDependency,
  };
};

export default useApi;
