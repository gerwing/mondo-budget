let authToken = '';
let headers = null;
const API_BASE = 'https://api.getmondo.co.uk';

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

export function setAuthToken(token) {
  authToken = token;
  headers = new Headers({
    'Authorization': `Bearer ${token}`
  });
}

export function getAccounts() {
  if (!authToken) {
    return;
  }
  return fetch(
    `${API_BASE}/accounts`,
    {
      method: 'GET',
      headers: headers
    }
  ).then((response) => response.json())
}

export function getBalance() {
  if (!authToken) {
    return;
  }
  return fetch(
    `${API_BASE}/balance`,
    {
      method: 'GET',
      headers: header
    }
  ).then((response) => response.json())
}
