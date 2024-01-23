import { TouchableHighlightProps } from 'react-native';
import { ButtonTypeStylesProps, Container, Title }from './styles';

type Props = TouchableHighlightProps & {
  title: string;
  type?: ButtonTypeStylesProps;
  disable?: boolean;
}

export default function ButtonPrimary({ title, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
)}
