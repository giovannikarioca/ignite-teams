import { TouchableHighlightProps } from 'react-native';

import { Container, Icon, Title }from './styles';

type Props = TouchableHighlightProps & {
  title: string;
}

export default function GroupCard({ title }: Props) {
  return (
    <Container>
      <Icon />
      <Title>{title}</Title>
    </Container>
)}
