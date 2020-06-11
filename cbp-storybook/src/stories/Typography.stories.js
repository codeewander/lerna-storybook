import React from 'react';
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Grid from '@material-ui/core/Grid';
import { FONT } from '@cbp/cbp-design-system'

export default { title: 'Typography' }

export const Default = ()=>(
    <React.Fragment>
        <Title>Font Family</Title>
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <P font="Noto Sans CJK TC">繁體：Noto Sans CJK TC</P>
            </Grid>
            <Grid item xs={4}>
                <P font="Noto Sans CJK SC">简体：Noto Sans CJK SC</P>
            </Grid>
            <Grid item xs={4}>
                <P font="Roboto">EN：Roboto</P>
            </Grid>
        </Grid>
        <Grid container spacing={3}>
        </Grid>   
    </React.Fragment>
  )


  const Title = styled.h2`
    font-size: 20px;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;
`;

const fontFamily = props => (
    css`
        font-family: ${props.font}
    `
);

const P = styled.p`
  font-family: ${fontFamily};
  text-align: center;
  padding: 0;
  margin: 0;
`;