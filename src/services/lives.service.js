import api from './axios';

function create(live) {
  return api.post('/lives/', live);
}

function findAllToSchedule() {
  return api.get('/lives/schedule');
}

export default { findAllToSchedule, create };
