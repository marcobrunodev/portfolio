import api from './axios';

function create(live) {
  api
    .post('/lives/', live)
    .then(() => {
      console.log('BOM');
    })
    .catch(() => {
      console.log('RUIM');
    });
}

function findAll() {
  console.log('findAll');
}

export default { findAll, create };
