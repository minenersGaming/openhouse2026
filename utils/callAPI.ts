import axios, { AxiosRequestConfig, AxiosError, Method } from 'axios';
import { getBaseUrl } from './getBaseUrl';

interface APIResponse<T> {
  data: T | null;
  error: string | null;
  status: number;
}

interface CallAPIOptions {
  method?: Method;
  data?: unknown;
  headers?: Record<string, string>;
  params?: Record<string, unknown>;
  withCredentials?: boolean;
}

const api = axios.create({
  baseURL: getBaseUrl() + '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export async function callAPI<T = unknown>(
  endpoint: string,
  options: CallAPIOptions = {}
): Promise<APIResponse<T>> {
  const {
    method = 'GET',
    data,
    headers,
    params,
    withCredentials = true,
  } = options;

  const config: AxiosRequestConfig = {
    method,
    url: endpoint,
    data,
    headers,
    params,
    withCredentials,
  };

  try {
    const response = await api.request<T>(config);
    return {
      data: response.data,
      error: null,
      status: response.status,
    };
  } catch (err) {
    const error = err as AxiosError<{ error?: string; message?: string }>;

    return {
      data: null,
      error: error.response?.data?.error
        || error.response?.data?.message
        || error.message
        || 'Something went wrong',
      status: error.response?.status || 500,
    };
  }
}
