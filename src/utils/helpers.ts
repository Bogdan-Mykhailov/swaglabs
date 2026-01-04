export function convertStringToNumber(value: string): number {
  if (!value) {
    return NaN;
  }

  const normalized = value
    .replace(/,/g, '')
    .replace(/[^\d.-]/g, '');

  return Number(normalized);
}
