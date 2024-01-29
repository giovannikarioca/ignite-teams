import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
    width: 100%;
    height: 60px;
    background-color: ${props => props.theme.COLORS.GRAY_500};
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    border-radius: 8px;
`;

export const Name = styled.Text`
    flex: 1;
    font-size: ${props => props.theme.FONT_SIZE.MD}px;
    font-family: ${props => props.theme.FONT_FAMILY.REGULAR};
    color: ${props => props.theme.COLORS.GRAY_200};
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GRAY_200,
}))`
    margin-left: 16px;
    margin-right: 8px;
    `;

