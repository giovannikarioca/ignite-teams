import styled from 'styled-components/native';
import { UsersThree } from 'phosphor-react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.COLORS.GRAY_700};
  justify-content: space-between;
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
    size: 48,
    color: theme.COLORS.GREEN_500,
    weight: 'fill'
}))`
    align-self: center;
    `;