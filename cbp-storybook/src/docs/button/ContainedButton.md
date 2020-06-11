**Contained Button**

![](https://i.imgur.com/GSiS6IN.png)

**Component example - Material UI**

```js
import Button from '@material-ui/core/Button';
import { MAIN_COLORS } from '@cbp/cbp-design-system';

const ContainButton = styled(Button)`
    &.MuiButton-root {
        padding: 8px 16px;
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
    }
`;

return <ContainButton variant="contained">Confirm</ContainButton>;
```
