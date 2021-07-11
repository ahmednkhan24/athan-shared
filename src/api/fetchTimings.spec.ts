import MockAdapter from 'axios-mock-adapter';
import {
  timingsApi,
  fetchTimingsByCoordinates,
  fetchTimingsByCity,
} from './fetchTimings';
import {
  BaseFetchTimingsParams,
  FetchTimingsByCoordsParams,
  FetchTimingsByCityParams,
} from '../types';
import timingsByCityResponse from './timingsByCityResponse.json';
import timingsByCoordsResponse from './timingsByCoordinatesResponse.json';

const baseParams: BaseFetchTimingsParams = {
  method: 2, // ISNA
  school: 1, // Hanafi
  tune: '0,0,0,0,0,0,0,0,0',
};

const byCityParams: FetchTimingsByCityParams = {
  ...baseParams,
  city: 'Chicago',
  state: 'Illinois',
  country: 'US',
};

const byCoordsParams: FetchTimingsByCoordsParams = {
  ...baseParams,
  latitude: 41.882691985764495,
  longitude: -87.62336315997155,
};

describe('fetchTimings', () => {
  const mock = new MockAdapter(timingsApi);

  describe('fetchTimingsByCoordinates', () => {
    it('Successful response', async () => {
      mock.onGet('/timings').replyOnce(200, timingsByCoordsResponse);
      const actual = await fetchTimingsByCoordinates(byCoordsParams);
      expect(actual).toEqual(timingsByCoordsResponse.data.timings);
    });

    it('Unsuccessful response', async () => {
      mock.onGet('/timings').replyOnce(500, {});
      const actual = await fetchTimingsByCoordinates(byCoordsParams);
      expect(actual).toEqual(null);
    });
  });

  describe('fetchTimingsByCity', () => {
    it('Successful response', async () => {
      mock.onGet('/timingsByCity').replyOnce(200, timingsByCityResponse);
      const actual = await fetchTimingsByCity(byCityParams);
      expect(actual).toEqual(timingsByCityResponse.data.timings);
    });

    it('Unsuccessful response', async () => {
      mock.onGet('/timingsByCity').replyOnce(500, {});
      const actual = await fetchTimingsByCity(byCityParams);
      expect(actual).toEqual(null);
    });
  });
});
