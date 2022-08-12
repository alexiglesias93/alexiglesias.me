/**
 * Formats a date to the user's locale.
 * @param date
 */
export const format_date = (date: string) =>
  new Date(date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
