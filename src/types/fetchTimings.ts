export type BaseFetchTimingsParams = {
  method: number; // ISNA
  school: number; // Hanafi
  tune: string;
};

export type FetchTimingsByCoordsParams = BaseFetchTimingsParams & {
  latitude: number;
  longitude: number;
};

export type FetchTimingsByCityParams = BaseFetchTimingsParams & {
  city: string;
  state: string;
  country: string;
};

export type Timings = {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Sunset: string;
  Maghrib: string;
  Isha: string;
  Imsak: string;
  Midnight: string;
};

export type FetchTimingsApiResponse = {
  code: number; // status code
  status: string; // 'OK'
  data: {
    timings: Timings;
    [key: string]: any;
  };
};
