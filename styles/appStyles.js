import styled from 'styled-components';
import {
    Text, View, TouchableOpacity,SafeAreaView,TextInput

} from 'react-native';

import Constants from "expo-constants";

export const colors = {
    primary:"red",
    secondary:"green",
    tertiary: 'yellow',
    alternative: 'grey',
};
const statusBarHeight = Constants.statusBarHeight;
export const Container = styled.SafeAreaView`
background-color: ${colors.primary};
padding:20px;
padding-bottom: 8px;
flex:1;
padding-top:${statusBarHeight}px; 
`;

export const HeaderView = styled.View`
padding-vertical:10px;
flex-direction:row;
justify-content:space-between;
align-items:center;
`;

export const HeaderTitle = styled.Text `
font-size:35px;
font-weight:bold;
color: ${colors.tertiary};
letter-spacing:2px;
font-style:italic;
`;

export const HeaderButton = styled.TouchableOpacity `
font-weight: bold;
color: ${colors.tertiary};
`;

export const ListContainer = styled.View `
margin-bottom: 30px;
flex:1;
padding-bottom: 40px;
`;

export const ListView = styled.TouchableHighLight `
background-color: ${colors.tertiary};
min-height: 85px;
width:100%;
padding:15px;
justify-content: center;
align-items: flex-start;
margin-bottom: 15px;
border-radius: 11px;
`;
export const ListViewHidden = styled.View `
nackground-color: ${colors.tertiary};
min-height : 85px;
width: 100%;
padding: 15px;
justify-content; center;
align-items: flex-start;
margin-bottom:15px;
border-radius:11px;
`;
export const HiddenButton = styled.TouchableOpacity `
width :55px;
align-items: center;
`;
export const TodoText = styled.Text`
font-size: 10px;
letter-spacing: 1px;
color:${colors.alternative};
text-align: right;
text-transform: uppercase;
`;

export const SwipedTodoText = styled(TodoText) `
color: ${colors.alternative};
font-style: italic;
text-decoration: line-through
`;
