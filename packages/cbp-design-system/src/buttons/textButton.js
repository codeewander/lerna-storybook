import React from 'react';
import styled from '@emotion/styled'
import Button from '@material-ui/core/Button';
import { MAIN_COLORS,GRAY_FAMILY }from '@cbp/cbp-design-system'

const textButton =(props)=>{
    const TextButton = styled(Button)`
    &.MuiButton-root{
		padding: 8px 16px;
		text-transform: none;
		line-height: 1;
		font-weight: 400;
		font-family: 'Roboto','Noto Sans TC','Noto Sans SC';
		font-size: 14px;
        border-radius: 2px;
	}
	&.MuiButton-text {
        color: ${MAIN_COLORS.PRIMARY_BLUE};
        &:hover{
			background-color: #EDF4F7;
		}
		&:focus{
			background-color: #E3F8FF;
		}
        &:active{
            background-color: #8ADFFF;
        }
    }
`
    const TextDisabled = styled(Button)`
    &.MuiButton-root{
        padding: 8px 16px;
        text-transform: none;
        line-height: 1;
        font-weight: 400;
        font-family: 'Roboto','Noto Sans TC','Noto Sans SC';
        font-size: 14px;
        border-radius: 2px;
    }
    &.Mui-disabled {
        color: ${GRAY_FAMILY.N100};
    }
    `
if(props.disabled ==='disabled'){
    return (
        <TextDisabled {...props} disabled>{props.children}</TextDisabled>
    )
}else{
    return (
        <TextButton {...props}>{props.children}</TextButton>
    )
}

}

export default textButton  


