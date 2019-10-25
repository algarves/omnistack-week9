import axios from 'axios';

import config from '../config';

const api = axios.create(config.api);

export default api;