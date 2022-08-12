/**
 * Formats a date to the user's locale.
 * @param date_string
 */
export const format_date = (date_string: string) =>
  new Date(date_string).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

/**
 * Formats a date to an ISO YYYY-MM-DD format.
 * @param date_string
 */
export const format_iso_date = (date_string: string) => {
  const date = new Date(date_string);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};
