import { required, minLength, maxLength } from '../../libs/validation';

function validation(values) {
  const {
    titleShort,
    title,
    photo,
    startDate,
    startTime,
    finishDate,
    finishTime,
    goals,
    description,
  } = values;
  const errors = {};

  errors.titleShort =
    required(titleShort, 'Título curto é obrigatório') ||
    minLength(2, titleShort, 'Tem que ter 2 ou mais caracteres') ||
    maxLength(22, titleShort, 'No máximo 22 caracteres');

  errors.title =
    required(title, 'Título é obrigatório') ||
    minLength(2, title, 'Tem que ter 2 ou mais caracteres') ||
    maxLength(35, title, 'No máximo 35 caracteres');

  errors.photo = required(photo, 'Imagem é obrigatória');

  errors.startDate = required(startDate, 'Data de início é obrigatória');
  errors.startTime = required(startTime, 'Hora de início é obrigatória');

  errors.finishDate = required(finishDate, 'Data de fim é obrigatória');
  errors.finishTime = required(finishTime, 'Hora de fim é obrigatória');

  errors.goals = required(goals, 'Objetivos são obrigatórios');
  errors.description = required(description, 'Descrição é obrigatória');

  return errors;
}

export default validation;
