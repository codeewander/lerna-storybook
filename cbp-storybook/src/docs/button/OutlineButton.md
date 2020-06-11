**Outlined Button**

**Component example - Material UI**

![](https://i.imgur.com/AEx7meR.png)

```js
import Button from '@material-ui/core/Button';
import { MAIN_COLORS } from '@cbp/cbp-design-system';

const OutlinedButton = styled(Button)`
    &.MuiButton-root {
        padding: 8px 16px;
        text-transform: none;
        line-height: 1;
        font-weight: 400;
        font-family: 'Roboto', 'Noto Sans TC', 'Noto Sans SC';
        font-size: 14px;
        border-radius: 2px;
    }
    &.MuiButton-outlined {
        color: ${MAIN_COLORS.PRIMARY_BLUE};
        border: 1px solid ${MAIN_COLORS.PRIMARY_BLUE};
        &:hover {
            background-color: #e3f8ff;
        }
        &:focus {
            background-color: #d9f2fa;
        }
        &:active {
            background-color: #8adfff;
        }
    }
`;

return <OutlinedButton variant="outlined">Confirm</OutlinedButton>;
```
