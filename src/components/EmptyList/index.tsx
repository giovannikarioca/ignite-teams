import { TouchableHighlightProps } from 'react-native';

import { Container, Title, Subtitle }from './styles';

type Props = TouchableHighlightProps & {
  title: string;
  subtitle: string;
}

export default function EmptyList({ title, subtitle }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
)}
