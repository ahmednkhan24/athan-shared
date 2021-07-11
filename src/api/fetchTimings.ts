import axios, { AxiosResponse } from 'axios';
import {
  FetchTimingsByCoordsParams,
  FetchTimingsByCityParams,
  FetchTimingsApiResponse,
  Timings,
} from '../types';

export const timingsApi = axios.create({
  baseURL: 'https://api.aladhan.com/v1',
});

const fetchTimings = async (
  endpoint: string,
  params: FetchTimingsByCoordsParams | FetchTimingsByCityParams
): Promise<Timings | null> => {
  try {
    const apiResponse: AxiosResponse<FetchTimingsApiResponse> =
      await timingsApi.get(endpoint, { params });

    if (apiResponse.status !== 200) {
      return null;
    }

    // first data is default response from axios, second is response from api
    const { timings } = apiResponse.data.data;

    return timings;
  } catch (err) {
    return null;
  }
};

export const fetchTimingsByCoordinates = (params: FetchTimingsByCoordsParams) =>
  fetchTimings('/timings', params);

export const fetchTimingsByCity = (params: FetchTimingsByCityParams) =>
  fetchTimings('/timingsByCity', params);
