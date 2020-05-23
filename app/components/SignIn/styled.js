import styled from 'styled-components';

export const Container = styled.div`

height: 100%;
width: 100%;
display: grid;
grid-template-columns: 1.5fr 2fr;

.pictureContactUs{
display: flex;
justify-content: flex-end;
padding-right: 24px;
}

.formContainer{
display: flex;
justify-content: flex-start;
align-items: center;
}

.infoText{
color: #485563;
}

.margin-bottom{
margin-bottom: 12px;
}

.charactersLabel{
        color: #485563;
        fontSize: 11;
        text-align: end;
    },

`;
