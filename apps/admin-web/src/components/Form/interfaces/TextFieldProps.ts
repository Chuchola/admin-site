export interface TextFieldProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  validate?: (value: string) => string | undefined;
  inputClassName?: string;
  autoFocus?: boolean;
  type?: string;
  isRequired?: boolean;
  [key: string]: any;
}
