import styled from "styled-components/native";

export const ContainerLoading = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS?.GRAY_700};
`

export const LoadingIndicator = styled.ActivityIndicator.attrs(({theme}) =>({
    color: theme.COLORS?.BLUE_700
}))``