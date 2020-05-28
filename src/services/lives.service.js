import api from './axios';

function create(live) {
  return api.post('/lives/', live);
}

function findLivesFuture() {
  return api.get('/lives/future');
}

export default { findLivesFuture, create };
