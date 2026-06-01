import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    
    setLoading(true);
    
    fetch(url, { signal: abortController.signal })
      .then((res) => {
        if (!res.ok) throw new Error('Error al establecer enlace con la API.');
        return res.json();
      })
      .then((json) => {
        setData(json);
        setError(null);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => abortController.abort();
  }, [url]);

  return { data, loading, error };
}