import { format, parseISO } from 'date-fns';

export function formatDate(isoString: string, dateFormat = 'MMM d, hh:mm a') {
  return format(parseISO(isoString), dateFormat);
}
