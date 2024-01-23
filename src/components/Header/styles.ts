import styled from 'styled-components/native';
import { CaretLeft } from 'phosphor-react-native';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.Image`
    width: 48px;
    height: 48px;
`;

export const BackButton = styled.TouchableOpacity`
    width: 48px;
    height: 48px;
    border-radius: 9999px;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.COLORS.GRAY_600};
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.WHITE
}))``;