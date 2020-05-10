import { required, minLength } from '../../libs/validation';

function validation(values) {
  const { titleShort } = values;
  const errors = {};

  errors.titleShort =
    required(titleShort, 'Título curto é obrigatório') ||
    minLength(2, titleShort, 'Tem que ter 2 ou mais caracteres');

  return errors;
}

export default validation;
