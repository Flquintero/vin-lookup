import axios from "axios";
import type { AxiosRequestConfig } from "axios";

const apiRequestAxiosInstance = axios.create();

const $apiRequest = async function apiRequest(options: AxiosRequestConfig) {
  try {
    const response = await getApiResponse(options);
    return response?.data;
  } catch (e: any) {
    throw new Error(e);
  }
};

async function getApiResponse(options: AxiosRequestConfig) {
  const requestObj = {
    ...options,
    // I would have a baseUrl for our api here and it would then append the specific api service we want to call
    // Also I would add it into an env variable
  };

  return apiRequestAxiosInstance.request(requestObj);
}

export { $apiRequest };
