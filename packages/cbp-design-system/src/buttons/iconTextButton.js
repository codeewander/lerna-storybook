import React from 'react';
import styled from '@emotion/styled'
import Button from '@material-ui/core/Button';
import { MAIN_COLORS ,NEUTRAL_COLORS }from '@cbp/cbp-design-system'
import AddIcon from '@material-ui/icons/Add';
const textButton =(props)=>{
    const TextButton = styled(Button)`
    &.MuiButton-root{
		padding: 8px 16px 8px 12px;
		text-transform: none;
		line-height: 1;
		font-weight: 400;
		font-family: 'Roboto','Noto Sans TC','Noto Sans SC';
		font-size: 14px;
        border-radius: 2px;
	}
	&.MuiButton-contained {
        background-color: ${MAIN_COLORS.PRIMARY_BLUE};
        color: #ffffff;
        &:hover {
            background-color: #00b5f9;
        }
        &:focus {
            background-color: #56d0ff;
        }
        &:active {
            background-color: #8adfff;
        }
        .MuiSvgIcon-root{
            width: 18px;
            height: 18px;
        }
    }
`
return (
    <TextButton variant="contained" {...props} startIcon={<AddIcon />}>{props.children}</TextButton>
)
}

export default textButton  


