**Contained Chip - Normal**

![](https://i.imgur.com/l2jg9zn.png)

**Component example - Material UI**

```js
import Chip from '@material-ui/core/chip';
import { MAIN_COLORS } from '@cbp/cbp-design-system';
import { Close } from '@material-ui/icons';

const ContainedChipNormal = styled(Chip)`
    &.MuiChip-root {
        font-size: 14px;
        height: 32px;
        background-color: ${MAIN_COLORS.PRIMARY_BLUE};
        color: #ffffff;
        min-width: 48px;
        border-radius: 20px;
        .MuiChip-label {
            padding-left: 8px;
            padding-right: 8px;
        }
        .MuiSvgIcon-root {
            margin-right: 8px;
            margin-left: -4px;
            color: #ffffff;
            width: 18px;
        }
    }
`;

return (
    <ContainedChipNormal
        label="Example"
        onDelete={handleDelete}
        deleteIcon={<Close />}
    />
);
```
