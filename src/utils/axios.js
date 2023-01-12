import axios from 'axios';

const customBaseUrl = axios.create({
  baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
});

export default customBaseUrl;
