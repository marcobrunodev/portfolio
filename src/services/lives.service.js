import api from './axios';

function create(live) {
  return api.post('/lives/', live);
}

function findLiveByUuid(uuid) {
  return api.get(`/lives/${uuid}`);
}

function findLivesFuture() {
  return api.get('/lives/future');
}

export default { findLivesFuture, create, findLiveByUuid };
