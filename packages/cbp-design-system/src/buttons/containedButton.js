
import React from 'react';
import styled from '@emotion/styled'
import Button from '@material-ui/core/Button';
import { MAIN_COLORS, GRAY_FAMILY }from '@cbp/cbp-design-system'

const containedButton =(props)=>{
    const ContainButton = styled(Button)`
    &.MuiButton-root{
		padding: 8px 16px;
		text-transform: none;
		line-height: 1;
		font-weight: 400;
		font-family: 'Roboto','Noto Sans TC','Noto Sans SC';
		font-size: 14px;
        border-radius: 2px;
	}
    &.MuiButton-contained{
        background-color: ${MAIN_COLORS.PRIMARY_BLUE};
        color: #ffffff;
        &:hover{
			background-color: #00B5F9;
		}
		&:focus{
			background-color: #56D0FF;
		}
		&:active{
			background-color: #8ADFFF;
		}
    }
`
    const ContainDisabled = styled(Button)`
    &.MuiButton-root{
        padding: 8px 16px;
        text-transform: none;
        line-height: 1;
        font-weight: 400;
        font-family: 'Roboto','Noto Sans TC','Noto Sans SC';
        font-size: 14px;
        border-radius: 2px;
    }
    &.Mui-disabled{
        background-color: ${GRAY_FAMILY.N100} !important;
        color: ${GRAY_FAMILY.N20} !important;
    }`

    if(props.disabled === 'disabled'){
        return  <ContainDisabled variant="contained" {...props} disabled>{props.children} </ContainDisabled>
    }else{
        return (
            <ContainButton variant="contained" {...props}>{props.children}</ContainButton>
        )
    }
}

export default containedButton  


