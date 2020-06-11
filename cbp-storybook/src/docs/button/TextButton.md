**Text Button**

![](https://i.imgur.com/Z4pqsvB.png)

**Component example - Material UI**

```js
import Button from '@material-ui/core/Button';
import { MAIN_COLORS } from '@cbp/cbp-design-system';

const TextButton = styled(Button)`
    &.MuiButton-root {
        padding: 8px 16px;
        text-transform: none;
        line-height: 1;
        font-weight: 400;
        font-family: 'Roboto', 'Noto Sans TC', 'Noto Sans SC';
        font-size: 14px;
        border-radius: 2px;
    }
    &.MuiButton-text {
        color: ${MAIN_COLORS.PRIMARY_BLUE};
        &:hover {
            background-color: #edf4f7;
        }
        &:focus {
            background-color: #e3f8ff;
        }
        &:active {
            background-color: #8adfff;
        }
    }
`;

return <TextButton>Confirm</TextButton>;
```
