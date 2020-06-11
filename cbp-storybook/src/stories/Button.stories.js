import React from 'react';
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import {OutlinedButton, ContainedButton, TextButton, MAIN_COLORS, IconTextButton} from '@cbp/cbp-design-system'
import Grid from '@material-ui/core/Grid';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from "@storybook/addon-knobs"
import OutlinedButtonDoc from '../docs/button/OutlineButton.md'
import TextButtonDoc from '../docs/button/TextButton.md'
import ContainedButtonDoc from '../docs/button/ContainedButton.md'
import SidebarButtonDoc from '../docs/button/SidebarButton.md'
import IconTextButtonDoc from '../docs/button/IconTextButton.md'

storiesOf('Buttons', module)
.addDecorator(withKnobs)
.addParameters({
    readme: {
      content: OutlinedButtonDoc,
      sidebar: SidebarButtonDoc,
    },
  })
  .add('Outlined Button',()=>
    <React.Fragment>
      <Grid container spacing={3} style={{textAlign:'center'}}>
        <Grid item xs={6}>
          <OutlinedButton>{text("Label-Default", "Confirm")}</OutlinedButton>
          <P><SPAN>Default</SPAN></P>
        </Grid>
        <Grid item xs={6}>
        <OutlinedButton disabled={boolean("disabled", true)}>{text("Label-Disabled", "Disabled")}</OutlinedButton>
          <P><SPAN>Disabled</SPAN></P>
        </Grid>
      </Grid>
    </React.Fragment>
  )
  .add('Text Button',()=>
  <React.Fragment>
  <Grid container spacing={3} style={{textAlign:'center'}}>
    <Grid item xs={6}>
    <TextButton>{text("Label-Default", "Confirm")}</TextButton>
      <P><SPAN>Default</SPAN></P>

    </Grid>
    <Grid item xs={6}>
      <TextButton disabled={boolean("disabled", true)}>{text("Label-Disabled", "Disabled")}</TextButton>
      <P><SPAN>Disabled</SPAN></P>
    </Grid>
  </Grid>
</React.Fragment>
    
  ,{
      readme:{
          content: TextButtonDoc,
          sidebar: SidebarButtonDoc,
      }
  })
  .add('Contained Button',()=>
  <React.Fragment>
  <Grid container spacing={3} style={{textAlign:'center'}}>
    <Grid item xs={6}>
    <ContainedButton>{text("Label-Default", "Confirm")}</ContainedButton>
      <P><SPAN>Default</SPAN></P>

    </Grid>
    <Grid item xs={6}>
    <ContainedButton disabled={boolean("disabled", true)}>{text("Label-Disabled", "Disabled")}</ContainedButton>
      <P><SPAN>Disabled</SPAN></P>
    </Grid>
  </Grid>
</React.Fragment>
    ,{
        readme:{
            content: ContainedButtonDoc,
            sidebar: SidebarButtonDoc,
        }
    })
    .add('IconText Button',()=>
      <IconTextButton>Example</IconTextButton>
      ,{
        readme:{
            content: IconTextButtonDoc,
        }
    })

    const P = styled.p`
    font-family: 'Roboto';
    text-align: center;
    padding-top: 5px;
    padding-bottom: 5px;
    margin: 0;
`;

const SPAN = styled.span`
  font-weight: 600;
  color: ${MAIN_COLORS.PRIMARY_GRAY};
`