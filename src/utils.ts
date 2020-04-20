import { format, isDate } from 'date-fns';
import numeral from 'numeral';

export const formatDate = ({ startDate, endDate }: { startDate: string; endDate: string }) => {
  const startDateObject = new Date(startDate);
  const endDateObject = new Date(endDate);

  if (!(isDate(startDateObject) || isDate(endDateObject))) {
    return null;
  }
  const formattedStartDate = format(startDateObject, 'MMM d, eee h:mm a');
  const formattedEndDate = format(endDateObject, 'eee h:mm a');
  return `${formattedStartDate} - ${formattedEndDate} PDT`;
};

export const formatPhoneNumber = (phone: string) => {
  const cleaned = phone.toString().replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (!match) {
    return null;
  }
  return `(${match[1]}) ${match[2]} ${match[3]}`;
};

export const formatAmount = (amount: number) => {
  const cleaned = amount.toString().replace(/\D/g, '');
  return numeral(cleaned).format('0,0.00');
};

export const formatNumber = (num: string | number, decimal: number) => {
  return Number(num.toString()).toFixed(decimal);
};
