import axios from 'axios';

import ResponseError from './ResponseError';

class HttpClient {
  constructor(
    baseURL,
    responseType,
    requestInterceptor,
    responseErrors,
  ) {
    this.axios = axios.create({
      baseURL,
      responseType,
    });

    if (requestInterceptor) {
      this.axios.interceptors.request.use(requestInterceptor);
    }

    this.responseErrors = responseErrors;
  }

  get = async (url, data) => {
    const response = new Response();
    try {
      const result = await this.axios.get(url, data);
      response.data = result.data;
    } catch (error) {
      response.error = this.parseError(error, this.responseErrors);
    }

    return response;
  }

  post = async (url, data) => {
    const response = new Response();
    try {
      const result = await this.axios.post(url, data);
      response.data = result.data;
      if (result.headers.location) {
        response.location = result.headers.location;
      }
    } catch (error) {
      response.error = this.parseError(error, this.responseErrors);
    }

    return response;
  }

  patch = async (url, data) => {
    const response = new Response();
    try {
      const result = await this.axios.patch(url, data);
      response.data = result.data;
    } catch (error) {
      response.error = this.parseError(error, this.responseErrors);
    }

    return response;
  }

  put = async (url, data) => {
    const response = new Response();
    try {
      const result = await this.axios.put(url, data);
      response.data = result.data;
    } catch (error) {
      response.error = this.parseError(error, this.responseErrors);
    }

    return response;
  }

  delete = async (url, data) => {
    const response = new Response();
    try {
      const result = await this.axios.delete(url, data);
      response.data = result.data;
    } catch (error) {
      response.error = this.parseError(error, this.responseErrors);
    }

    return response;
  }

  parseError = (error, responseErrors) => {
    const e = new ResponseError(error.response.status, error.response.data);
    e.map(responseErrors);
    return e;
  }
}

export default HttpClient;
