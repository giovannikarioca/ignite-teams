import { TextInputProps } from 'react-native';
import { Container }from './styles';

export default function TextInput({ ...rest }: TextInputProps) {
  return (
    <Container {...rest} />
)}
