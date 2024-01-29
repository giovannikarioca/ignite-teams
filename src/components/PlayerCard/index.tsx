import { TouchableHighlightProps } from 'react-native';

import { Container, Icon, Name }from './styles';
import ButtonIcon from '@components/ButtonIcon';

type Props = {
  name: string;
  onRemove: () => void;
}

export default function PlayerCard({ name, onRemove }: Props) {
  return (
    <Container>
      <Icon name='person' />
      <Name>{name}</Name>
      <ButtonIcon name='close' type='SECONDARY' onPress={onRemove}/>
    </Container>
)}
