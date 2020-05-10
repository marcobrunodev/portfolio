import React from 'react';
import FormNes from '../../components/FormNes';
import { Half } from '../../components/FormNes/styles';
import FieldNes from '../../components/FieldNes';
import TextareaNes from '../../components/TextareaNes';
import ButtonNes from '../../components/ButtonNes';
import useValidation from '../../libs/validation/useValidation';
import validation from './validation';

function newLive() {}

const FormLive = () => {
  const { value, handleChange, handleSubmit, errors } = useValidation(
    validation,
    newLive,
    'titleShort',
    'title',
    'photo',
    'startDate',
    'startTime',
    'finishDate',
    'finishTime',
    'goals',
    'description'
  );

  return (
    <FormNes onSubmit={handleSubmit}>
      <FieldNes
        content="Título curto:"
        name="titleShort"
        value={value.titleShort}
        onChange={handleChange}
        msgError={errors.titleShort}
      />

      <FieldNes
        content="Título:"
        name="title"
        value={value.title}
        onChange={handleChange}
        msgError={errors.title}
      />

      <FieldNes
        content="Imagem:"
        name="photo"
        type="file"
        value={value.photo}
        onChange={handleChange}
        msgError={errors.photo}
      />

      <Half>
        <FieldNes
          content="Data de início:"
          name="startDate"
          type="date"
          value={value.startDate}
          onChange={handleChange}
          msgError={errors.startDate}
        />
        <FieldNes
          content="Horário de início:"
          name="startTime"
          type="time"
          value={value.startTime}
          onChange={handleChange}
          msgError={errors.startTime}
        />
      </Half>

      <Half>
        <FieldNes
          content="Data de fim:"
          name="finishDate"
          type="date"
          value={value.finishDate}
          onChange={handleChange}
          msgError={errors.finishDate}
        />
        <FieldNes
          content="Horário de fim:"
          name="finishTime"
          type="time"
          value={value.finishTime}
          onChange={handleChange}
          msgError={errors.finishTime}
        />
      </Half>

      <TextareaNes
        content="Objetivos:"
        placeholder="Cada objetivo separado por ;"
        name="goals"
        value={value.goals}
        onChange={handleChange}
        msgError={errors.goals}
      />

      <TextareaNes
        content="Descrição:"
        name="description"
        value={value.description}
        onChange={handleChange}
        msgError={errors.description}
      />

      <ButtonNes as="button">Enviar</ButtonNes>
    </FormNes>
  );
};

export default FormLive;
