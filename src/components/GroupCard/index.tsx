import { TouchableHighlightProps } from 'react-native';

import { Container, IconRight, Title }from './styles';

type Props = TouchableHighlightProps & {
  title: string;
}

export default function GroupCard({ title }: Props) {
  return (
    <Container>
      <IconRight />
      <Title>{title}</Title>
    </Container>
)}
