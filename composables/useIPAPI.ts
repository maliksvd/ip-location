/**
 * @file useIPAPI.ts
 * @description useIPAPI composables.
 * @version 1.0.0
 * @see https://ipapi.co/json
 */
export interface IPAPI {
  ip: string
  city: string
  region: string
  country_name: string
  latitude: number
  longitude: number
  timezone: string
  utc_offset: string
  languages: string
  country_calling_code: string
  currency: string
  currency_name: string
  in_eu: boolean
  country_tld: string
}

export function useIPAPI() {
  const { data, error } = useFetch<IPAPI>('https://ipapi.co/json')

  return {
    data: ref(data),
    error: ref(error),
  }
}

export default useIPAPI
