import styled, { css } from 'styled-components/native';
import { Text, TouchableOpacity } from 'react-native';

export type ButtonTypeStylesProps = 'PRIMARY'| 'SECONDARY';

type Props = {
    type: ButtonTypeStylesProps
    disable?: boolean;
}

export const Container = styled(TouchableOpacity) <Props>`
    flex-direction: row;
    height: 56px;
    background-color: ${({ theme, type, disabled }) => disabled 
        ? theme.COLORS.GRAY_600 :
            type === 'PRIMARY' 
                ? theme.COLORS.GREEN_700 
                : theme.COLORS.RED_DARK
    };
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin-bottom: 16px;
`;

export const Title = styled(Text) <Props>`
    flex: 1;
    text-align: center;
    font-size: ${props => props.theme.FONT_SIZE.LG}px;
    font-family: ${props => props.theme.FONT_FAMILY.REGULAR};
    color: ${props => props.theme.COLORS.GRAY_100};
`;