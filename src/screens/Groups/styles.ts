import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.COLORS.RED};
    align-items: center;
    justify-content: center;
    padding: 24;
`;

export const Title = styled.Text`
    font-size: 32;
`;