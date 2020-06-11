import React from 'react';
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Grid from '@material-ui/core/Grid';
import { storiesOf } from '@storybook/react';
import {ContainedChip,ContainedChipDense} from '@cbp/cbp-design-system'
import ContainedChipNormalDoc from '../docs/chip/ContainedChipNormal.md'
import SidebarChipDoc from '../docs/chip/SidebarChip.md'
import ContainedChipDenseDoc from '../docs/chip/ContainedChipDense.md'
import { withKnobs, select } from "@storybook/addon-knobs"

storiesOf('Chips', module)
.addDecorator(withKnobs)
.addParameters({
    readme: {
      content: ContainedChipNormalDoc,
      sidebar: SidebarChipDoc,
    },
  })
.add('ContainedChip - Normal',()=>{
    const options ={
        blue: 'blue',
        gray: 'gray'
    } 
    return ( 
    <div>
        <ContainedChip color={select('Color', options,'blue','Group-ID1')}/>
    </div>)
}
   
)
.add('ContainedChip - Dense',()=>{
    const options ={
        blue: 'blue',
        gray: 'gray'
    } 
    return ( 
    <div>
        <ContainedChipDense color={select('Color', options,'blue','Group-ID2')}/>
    </div>)
}
   
,{
    readme:{
        content: ContainedChipDenseDoc ,
        sidebar: SidebarChipDoc,
    }
})
