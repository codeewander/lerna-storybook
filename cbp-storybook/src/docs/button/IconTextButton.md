**IconText Button**

![](https://i.imgur.com/UffOCoH.png)

**Component example - Material UI**

```js
import Button from '@material-ui/core/Button';
import { MAIN_COLORS } from '@cbp/cbp-design-system';

const IconTextButton = styled(Button)`
    &.MuiButton-root {
        padding: 8px 16px 8px 12px;
        text-transform: none;
        line-height: 1;
        font-weight: 400;
        font-family: 'Roboto', 'Noto Sans TC', 'Noto Sans SC';
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
        .MuiSvgIcon-root {
            width: 18px;
            height: 18px;
        }
    }
`;

return <IconTextButton variant="contained">Example</IconTextButton>;
```
