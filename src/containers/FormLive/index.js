import React from 'react';
import FormNes from '../../components/FormNes';
import { Half } from '../../components/FormNes/styles';
import FieldNes from '../../components/FieldNes';
import ButtonNes from '../../components/ButtonNes';
import useValidation from '../../libs/validation/useValidation';
import validation from './validation';

function newLive() {}

const FormLive = () => {
  const { value, handleChange, handleSubmit, errors } = useValidation(
    validation,
    newLive,
    'titleShort'
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

      {/* <FieldNes content="Título" name="title" />
      <FieldNes content="Imagem" name="photo" type="file" />

      <Half>
        <FieldNes content="Data de início" name="startDate" type="date" />
        <FieldNes content="Horário de início" name="startTime" type="time" />
      </Half>

      <Half>
        <FieldNes content="Data de fim" name="finishDate" type="date" />
        <FieldNes content="Horário de fim" name="finishTime" type="time" />
      </Half>

      <TextareaNes content="Objetivos" placeholder="Cada objetivo separado por ;" name="goals" />
      <TextareaNes content="Descrição" name="description" /> */}

      <ButtonNes as="button">Enviar</ButtonNes>
    </FormNes>
  );
};

export default FormLive;
