import { Container, Logo, BackIcon, BackButton }from './styles';

import logoImg from '@assets/logo.png'

type Props = {
  showBackButton: boolean;
  onPress?: () => void;
}


export default function Header({ showBackButton = false, onPress }: Props) {
  return (
    <Container>
      { showBackButton && 
        <BackButton onPress={onPress}>
          <BackIcon />
        </BackButton>
      }
        <Logo source={logoImg} />
    </Container>
)}
