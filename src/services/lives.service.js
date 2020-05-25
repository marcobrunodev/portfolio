import api from './axios';

function create(live) {
  return api.post('/lives/', live);
}

function findAll() {
  console.log('findAll');
}

export default { findAll, create };
