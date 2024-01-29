import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Form = styled.View`
  width: 100%;
  background-color: ${props => props.theme.COLORS.GRAY_400};
  flex-direction: row;
  justify-content: center;
  border-radius: 8px;
  margin-bottom: 24px;
`;

export const HeaderList = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 32px 0px 12px;
`;

export const NumberOfPlayers = styled.Text`
  color:  ${props => props.theme.COLORS.GRAY_100};
  font-family:  ${props => props.theme.FONT_FAMILY.BOLD};
  font-size:  ${props => props.theme.FONT_SIZE.MD}px;
  background-color: ${props => props.theme.COLORS.GREEN_700};
  border-radius: 16px;
  padding: 8px 16px;
`;