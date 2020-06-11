**Contained Chip - Dense**

![](https://i.imgur.com/g8TAzMX.png)

**Component example - Material UI**

```js
import Chip from '@material-ui/core/chip';
import { MAIN_COLORS } from '@cbp/cbp-design-system';
import { Close } from '@material-ui/icons';

const ContainedChipNormal = styled(Chip)`
    &.MuiChip-root {
        font-size: 14px;
        height: 24px;
        background-color: ${MAIN_COLORS.PRIMARY_BLUE};
        color: #ffffff;
        min-width: 48px;
        border-radius: 20px;
        .MuiChip-label {
            padding-left: 4px;
            padding-right: 4px;
        }
        .MuiSvgIcon-root {
            margin-right: 4px;
            margin-left: -4px;
            color: #ffffff;
            width: 16px;
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
