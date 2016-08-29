export function login() {
  let base_url = 'https://auth.getmondo.co.uk';
  let params = {
    'client_id': 'oauthclient_00009BmJk78bLdfvbl4uPZ',
    'redirect_uri': 'http://localhost:8080',
    'response_type': 'code'
  }
  let paramString = '';
  for(let param in params) {
    paramString += `${param}=${params[param]}&`
  }
  window.open(`${base_url}?${paramString}`);
}
