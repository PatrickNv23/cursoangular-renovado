export interface IField {
  value: string;
  error: string;
  isValid: () => boolean;
}