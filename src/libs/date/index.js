import { utcToZonedTime, format } from 'date-fns-tz';

const { timeZone } = new Intl.DateTimeFormat().resolvedOptions();

const formatDate = (date) => {
  const dateStartLocal = utcToZonedTime(new Date(date), timeZone);
  const formtDateStartLocal = format(dateStartLocal, 'dd/MM/yyyy');

  return formtDateStartLocal;
};

const getHour = (date) => {
  const dateStartLocal = utcToZonedTime(new Date(date), timeZone);
  const hour = format(dateStartLocal, 'hh:mm');

  return hour;
};

export { formatDate, getHour };
