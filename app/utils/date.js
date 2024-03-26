import dayjs from 'dayjs';

export function formatDate(date) {
  // return new Date(date).toLocaleDateString('default', {
  //   year: 'numeric',
  //   month: 'long',
  //   day: '2-digit',
  // });
  return dayjs(date).format('DD/MM/YYYY');
}
