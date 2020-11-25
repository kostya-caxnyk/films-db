import axios, { AxiosRequestConfig } from 'axios';
import { useState, useCallback, useEffect } from 'react';

const baseUrl: string = 'https://api.themoviedb.org/3';
const apiKey: string = '?api_key=b79c674110200fabb617b62045c9c32b';

type IErrorData = {
  statuc_code: number;
  success: boolean;
  statuc_message: string;
};

interface IError {
  response: {
    data: IErrorData;
  };
}

interface IFetchData<T> {
  response: T | null;
  isLoading: boolean;
  error: IErrorData | null;
}

const useFetch = <T>(
  requestUrl: string,
  params: string = '',
): [IFetchData<T>, (options?: AxiosRequestConfig) => void] => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<IErrorData | null>(null);
  const [options, setOptions] = useState({});

  const doFetch = useCallback((options?: AxiosRequestConfig) => {
    setOptions(options || {});
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (isLoading) {
      axios(baseUrl + requestUrl + apiKey + params, options)
        .then((res) => {
          setResponse(res.data);
          setIsLoading(false);
        })
        .catch((err: IError) => {
          setError(err.response.data);
          setIsLoading(false);
        });
    }
  }, [isLoading, requestUrl, params, options]);

  return [{ response, isLoading, error }, doFetch];
};

export default useFetch;
