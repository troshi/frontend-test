import Axios from 'axios';
import { configure } from 'axios-hooks';

const axios = Axios.create({
  baseURL: 'https://www.reddit.com/r/',
});

export function runAxiosHooksConfig() {
  configure({
    cache: false,
    axios,
  });
}

export default axios;
