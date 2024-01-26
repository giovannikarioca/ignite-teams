import styled from 'styled-components/native';
import { UsersThree } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native';

export type FilterStyleProps = {
    isActive?: boolean;
}

export const Container = styled(TouchableOpacity) <FilterStyleProps>`
    flex-direction: row;
    width: 72px;
    height: 48px;
    background-color: ${({ theme, isActive }) => isActive ? theme.COLORS.GRAY_600 : theme.COLORS.GRAY_700};
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border-width: 1px;
    border-color: ${({ theme, isActive }) => isActive ? theme.COLORS.GRAY_600 : null};
    margin-bottom: 16px;
    margin-right: 12px;
`;

export const Title = styled.Text <FilterStyleProps>`
    flex-direction: row;
    font-family: ${({ theme, isActive }) => isActive ? theme.FONT_FAMILY.BOLD : theme.FONT_FAMILY.REGULAR};
    font-size: ${props => props.theme.FONT_SIZE.SM}px;
    color: ${({ theme, isActive }) => isActive ? theme.COLORS.WHITE : theme.COLORS.GRAY_200};
`;
