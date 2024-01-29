import styled from 'styled-components/native';
import { UsersThree } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
    flex-direction: row;
    width: 100%;
    height: 72px;
    background-color: ${props => props.theme.COLORS.GRAY_400};
    align-items: center;
    justify-content: start;
    border-radius: 8px;
    margin-bottom: 16px;
    padding-left: 24px;
    padding-right: 24px;
`;

export const Title = styled.Text`
    flex-direction: row;
    font-size: ${props => props.theme.FONT_SIZE.LG}px;
    font-family: ${props => props.theme.FONT_FAMILY.REGULAR};
    color: ${props => props.theme.COLORS.GRAY_100};
`;

export const IconRight = styled(UsersThree).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GREEN_500,
    weight: 'fill'
}))`
    margin-right: 16px
`;