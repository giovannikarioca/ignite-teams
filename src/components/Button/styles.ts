import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
    width: 100%;
    flex-direction: row;
    height: 56px;
    background-color: ${props => props.theme.COLORS.GREEN_700};
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin-bottom: 16px;
`;

export const Title = styled.Text`
    font-size: ${props => props.theme.FONT_SIZE.LG}px;
    font-family: ${props => props.theme.FONT_FAMILY.REGULAR};
    color: ${props => props.theme.COLORS.GRAY_100};
`;