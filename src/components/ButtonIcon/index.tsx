import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Icon } from './styles';

type Props = TouchableOpacityProps & {
  name: string;
  type: string;
}

export default function ButtonIcon({ name, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Container>
      <Icon 
        name={name}
        type={type}
        {...rest}
      />
    </Container>
  );
}
