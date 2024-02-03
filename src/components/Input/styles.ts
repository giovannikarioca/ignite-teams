import styled from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled(TextInput)`
    flex: 1;

    min-height: 56px;
    max-height: 56px;

    background-color: ${props => props.theme.COLORS.GRAY_400};
    color: ${props => props.theme.COLORS.WHITE};

    border-radius: 8px;
    padding-left: 16px;

    font-size: ${props => props.theme.FONT_SIZE.LG}px;
    font-family: ${props => props.theme.FONT_FAMILY.REGULAR};
`;
