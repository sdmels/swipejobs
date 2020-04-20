import { format, isDate } from 'date-fns';
import numeral from 'numeral';
import { Shift } from 'models/Jobs';

export const formatDate = ({ startDate, endDate }: Shift) => {
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
  const cleanedPhoneNumber = phone.toString().replace(/\D/g, '');
  const match = cleanedPhoneNumber.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (!match) {
    return null;
  }
  return `(${match[1]}) ${match[2]} ${match[3]}`;
};

export const formatAmount = (amount: number) => {
  const cleanedAmount = amount.toString().replace(/\D/g, '');
  return numeral(cleanedAmount).format('0,0.00');
};

export const formatNumber = (num: string | number, decimal: number) => {
  return Number(num.toString()).toFixed(decimal);
};
