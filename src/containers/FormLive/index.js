import React from 'react';
import { useHistory } from 'react-router-dom';
import FormNes from '../../components/FormNes';
import { Half } from '../../components/FormNes/styles';
import FieldNes from '../../components/FieldNes';
import TextareaNes from '../../components/TextareaNes';
import ButtonNes from '../../components/ButtonNes';
import useValidation from '../../libs/validation/useValidation';
import validation from './validation';
import service from '../../services/lives.service';

function FormLive() {
  const history = useHistory();
  const { values, handleChange, handleSubmit, errors, validationField } = useValidation(
    validation,
    newLive,
    'shortTitle',
    'title',
    'startDate',
    'startTime',
    'finishDate',
    'finishTime',
    'goals',
    'shortDescription',
    'description'
  );

  function newLive(live) {
    const [startYear, startMonth, startDay] = live.startDate.split('-');
    const [startHour, startMinute] = live.startTime.split(':');
    const [finishYear, finishMonth, finishDay] = live.finishDate.split('-');
    const [finishHour, finishMinute] = live.finishTime.split(':');
    const startDate = new Date(startYear, startMonth, startDay, startHour, startMinute);
    const finishDate = new Date(finishYear, finishMonth, finishDay, finishHour, finishMinute);
    const newStream = { ...live, startDate, finishDate };

    service
      .create(newStream)
      .then(() => {
        console.log('EITA!!!!');
        history.push('/lives');
      })
      .catch((err) => {
        console.log('ERRORS', err);
        console.log('body', err.response.data);
      });
  }

  return (
    <FormNes onSubmit={handleSubmit}>
      <FieldNes
        content="Título curto:"
        name="shortTitle"
        value={values.shortTitle}
        onChange={handleChange}
        onBlur={validationField}
        msgError={errors.shortTitle}
      />

      <FieldNes
        content="Título:"
        name="title"
        value={values.title}
        onChange={handleChange}
        onBlur={validationField}
        msgError={errors.title}
      />

      <Half>
        <FieldNes
          content="Data de início:"
          name="startDate"
          type="date"
          value={values.startDate}
          onChange={handleChange}
          onBlur={validationField}
          msgError={errors.startDate}
        />
        <FieldNes
          content="Horário de início:"
          name="startTime"
          type="time"
          value={values.startTime}
          onChange={handleChange}
          onBlur={validationField}
          msgError={errors.startTime}
        />
      </Half>

      <Half>
        <FieldNes
          content="Data de fim:"
          name="finishDate"
          type="date"
          value={values.finishDate}
          onChange={handleChange}
          onBlur={validationField}
          msgError={errors.finishDate}
        />
        <FieldNes
          content="Horário de fim:"
          name="finishTime"
          type="time"
          value={values.finishTime}
          onChange={handleChange}
          onBlur={validationField}
          msgError={errors.finishTime}
        />
      </Half>

      <TextareaNes
        content="Objetivos:"
        placeholder="Cada objetivo separado por ;"
        name="goals"
        value={values.goals}
        onChange={handleChange}
        onBlur={validationField}
        msgError={errors.goals}
      />

      <TextareaNes
        content="Descrição curta:"
        name="shortDescription"
        value={values.shortDescription}
        onChange={handleChange}
        onBlur={validationField}
        msgError={errors.shortDescription}
      />

      <TextareaNes
        content="Descrição:"
        name="description"
        value={values.description}
        onChange={handleChange}
        onBlur={validationField}
        msgError={errors.description}
      />

      <ButtonNes as="button" type="submit">
        Enviar
      </ButtonNes>
    </FormNes>
  );
}

export default FormLive;
