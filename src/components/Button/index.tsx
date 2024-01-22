import { TouchableHighlightProps } from 'react-native';
import { Container, Title }from './styles';

type Props = TouchableHighlightProps & {
  title: string;
}

export default function ButtonPrimary({ title }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
)}
