import styled from 'styled-components/native';

export const Container = styled.View`
    margin-top: 24px;
    margin-bottom: 24px;
    align-items: center;
    justify-content: center;

`;

export const Title = styled.Text`
    text-align: center;
    margin-bottom: 4px;
    font-size:  ${props => props.theme.FONT_SIZE.LG}px;
    font-family: ${props => props.theme.FONT_FAMILY.BOLD};
    color: ${props => props.theme.COLORS.GRAY_200};
`;

export const Subtitle = styled.Text`
    text-align: center;
    font-size: ${props => props.theme.FONT_SIZE.MD}px;
    font-family: ${props => props.theme.FONT_FAMILY.REGULAR};
    color: ${props => props.theme.COLORS.GRAY_300};
`;