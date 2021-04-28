export const API_URL = ' https://sbds21.free.beeceptor.com/api/winners';

export function ATHLETES_GET() {
  return {
    url: API_URL,
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ',
      },
    },
  };
}
