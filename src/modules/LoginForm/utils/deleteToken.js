const deleteToken = () => {
  document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

export default deleteToken;
