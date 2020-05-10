import { required } from '../../libs/validation';

function validation(values) {
  const { titleShort } = values;
  const errors = {};

  errors.titleShort = required(titleShort, 'Título é obrigatório');

  return errors;
}

export default validation;
