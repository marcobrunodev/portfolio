import { required, minLength, maxLength } from '../../libs/validation';

function validation(values) {
  const {
    shortTitle,
    title,
    startDate,
    startTime,
    finishDate,
    finishTime,
    goals,
    shortDescription,
    description,
  } = values;
  const errors = {};

  errors.shortTitle =
    required(shortTitle, 'Título curto é obrigatório') ||
    minLength(2, shortTitle, 'Tem que ter 2 ou mais caracteres') ||
    maxLength(22, shortTitle, 'No máximo 22 caracteres');

  errors.title =
    required(title, 'Título é obrigatório') ||
    minLength(2, title, 'Tem que ter 2 ou mais caracteres') ||
    maxLength(35, title, 'No máximo 35 caracteres');

  errors.startDate = required(startDate, 'Data de início é obrigatória');
  errors.startTime = required(startTime, 'Hora de início é obrigatória');

  errors.finishDate = required(finishDate, 'Data de fim é obrigatória');
  errors.finishTime = required(finishTime, 'Hora de fim é obrigatória');

  errors.goals = required(goals, 'Objetivos são obrigatórios');
  errors.shortDescription = required(shortDescription, 'Descrição curta é obrigatória');
  errors.description = required(description, 'Descrição é obrigatória');

  return errors;
}

export default validation;
