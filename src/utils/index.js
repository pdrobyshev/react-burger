export const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const setFetchSettings = (method, authorizationHeader, bodyPayload) => {
  return {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: authorizationHeader,
    },
    body: JSON.stringify(bodyPayload),
  };
};
