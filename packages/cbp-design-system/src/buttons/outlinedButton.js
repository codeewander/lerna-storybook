import React from 'react';
import styled from '@emotion/styled'
import Button from '@material-ui/core/Button';
import { MAIN_COLORS ,GRAY_FAMILY }from '@cbp/cbp-design-system'


const outlinedButton =(props)=>{
	const OutlinedDisabled = styled(Button)`
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
		color: ${GRAY_FAMILY.N100} !important;
		border : 1px solid ${GRAY_FAMILY.N100} !important;
	}`

	const OutlineButton = styled(Button)`
	&.MuiButton-root{
		padding: 8px 16px;
		text-transform: none;
		line-height: 1;
		font-weight: 400;
		font-family: 'Roboto','Noto Sans TC','Noto Sans SC';
		font-size: 14px;
		border-radius: 2px;
	}
	&.MuiButton-outlined{
		color: ${MAIN_COLORS.PRIMARY_BLUE};
		border : 1px solid ${MAIN_COLORS.PRIMARY_BLUE};
		&:hover{
			background-color: #e3f8ff;
		}
		&:focus{
			background-color: #d9f2fa;
		}
		&:active{
			background-color: #8adfff;
		}
	}
`
if(props.disabled === 'disabled'){
	return <OutlinedDisabled  variant="outlined" disabled {...props}>{props.children}</OutlinedDisabled>
}else{
	return (
		<OutlineButton  variant="outlined" {...props}>{props.children}</OutlineButton>
	)
}
}

export default outlinedButton  

