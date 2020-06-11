import React from 'react';
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { MAIN_COLORS, GRAY_FAMILY, SECONDARY_COLORS, BLUE_FAMILY, GREEN_FAMILY,RED_FAMILY,PURPLE_FAMILY,YELLOW_FAMILY }from '@cbp/cbp-design-system'
import Grid from '@material-ui/core/Grid';
import { storiesOf } from '@storybook/react';
import ColorReadme from '../docs/color/PrimaryColor.md';
import SecondaryColorReadme from '../docs/color/SecondaryColor.md';
import NeutralColorReadme from '../docs/color/NeutralColor.md';
import BlueColorReadme from '../docs/color/BlueColor.md';
import GreenColorReadme from '../docs/color/GreenColor.md';
import YellowColorReadme from '../docs/color/YellowColor.md';
import RedColorReadme from '../docs/color/RedColor.md';
import PurpleColorReadme from '../docs/color/PurpleColor.md';

storiesOf('Color', module)
  .addParameters({
    readme: {
      content: ColorReadme,
    },
  })
  .add('Primary Color', () =>
  <React.Fragment>
        <Title>Primary Colors</Title>
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <ColorColumn>
                    <Circle color={MAIN_COLORS.PRIMARY_BLUE} />
                    <P>{MAIN_COLORS.PRIMARY_BLUE}</P>
                    <P>PRIMARY_BLUE</P>
                </ColorColumn>
            </Grid>
            <Grid item xs={4}>
                <ColorColumn>
                    <Circle color={MAIN_COLORS.PRIMARY_GRAY} />
                    <P>{MAIN_COLORS.PRIMARY_GRAY}</P>
                    <P>PRIMARY_GRAY</P>
                </ColorColumn>
            </Grid>
            <Grid item xs={4}>
                <ColorColumn>
                    <Circle color={MAIN_COLORS.PRIMARY_DARKGRAY} />
                    <P>{MAIN_COLORS.PRIMARY_DARKGRAY}</P>
                    <P>PRIMARY_DARKGRAY</P>
                </ColorColumn>
            </Grid>
        </Grid>
    </React.Fragment>
  ).add('Secondary Color',()=>
  <React.Fragment>
      <Title>Secondary Colors - Status</Title>
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <ColorColumn>
                    <Circle color={SECONDARY_COLORS.SECONDARY_PURPLE} />
                    <P>{SECONDARY_COLORS.SECONDARY_PURPLE}</P>
                    <P>SECONDARY_PURPLE</P>
                </ColorColumn>
            </Grid>
            <Grid item xs={4}>
                <ColorColumn>
                    <Circle color={SECONDARY_COLORS.SECONDARY_GREEN} />
                    <P>{SECONDARY_COLORS.SECONDARY_GREEN}</P>
                    <P>SECONDARY_GREEN</P>
                </ColorColumn>
            </Grid>
            <Grid item xs={4}>
                <ColorColumn>
                    <Circle color={SECONDARY_COLORS.SECONDARY_YELLOW} />
                    <P>{SECONDARY_COLORS.SECONDARY_YELLOW}</P>
                    <P>SECONDARY_YELLOW</P>
                </ColorColumn>
            </Grid>              
            <Grid item xs={6}>
                <ColorColumn>
                    <Circle color={SECONDARY_COLORS.SECONDARY_RED} />
                    <P>{SECONDARY_COLORS.SECONDARY_RED}</P>
                    <P>SECONDARY_RED</P>
                </ColorColumn>
            </Grid>  
            <Grid item xs={6}>
                <ColorColumn>
                    <Circle color={SECONDARY_COLORS.SECONDARY_GRAY} />
                    <P>{SECONDARY_COLORS.SECONDARY_GRAY}</P>
                    <P>SECONDARY_GRAY</P>
                </ColorColumn>
            </Grid> 
            </Grid>  
  </React.Fragment>
  , {
    readme: {
      content: SecondaryColorReadme,
    },
  }).add('Gray Family',()=>
    <React.Fragment>
        <Title>Gray Family</Title>
        <Grid container spacing={3}>
            <Grid item xs={2}>
                <ColorColumn>
                    <Circle color={GRAY_FAMILY.N900} />
                    <P>N900</P>
                    <P>{GRAY_FAMILY.N900}</P>
                </ColorColumn>
            </Grid>
            <Grid item xs={2}>
                <ColorColumn>
                    <Circle color={GRAY_FAMILY.N800} />
                    <P>N800</P>
                    <P>{GRAY_FAMILY.N800}</P>
                </ColorColumn>
            </Grid>
            <Grid item xs={2}>
                <ColorColumn>
                    <Circle color={GRAY_FAMILY.N700} />
                    <P>N700</P>
                    <P>{GRAY_FAMILY.N700}</P>
                </ColorColumn>
            </Grid>
            <Grid item xs={2}>
                <ColorColumn>
                    <Circle color={GRAY_FAMILY.N600} />
                    <P>N600</P>
                    <P>{GRAY_FAMILY.N600}</P>
                </ColorColumn>
            </Grid>
            <Grid item xs={2}>
                <ColorColumn>
                    <Circle color={GRAY_FAMILY.N500} />
                    <P>N500</P>
                    <P>{GRAY_FAMILY.N500}</P>
                </ColorColumn>
            </Grid>
            <Grid item xs={2}>
                <ColorColumn>
                    <Circle color={GRAY_FAMILY.N400} />
                    <P>N400</P>
                    <P>{GRAY_FAMILY.N400}</P>
                </ColorColumn>
            </Grid>
            </Grid>
            <Grid container spacing={3}>
            <Grid item xs={2}>
                <ColorColumn>
                    <Circle color={GRAY_FAMILY.N300} />
                    <P>N300</P>
                    <P>{GRAY_FAMILY.N300}</P>
                </ColorColumn>
            </Grid> 
            <Grid item xs={2}>
                <ColorColumn>
                    <Circle color={GRAY_FAMILY.N200} />
                    <P>N200</P>
                    <P>{GRAY_FAMILY.N200}</P>
                </ColorColumn>
            </Grid>
            <Grid item xs={2}>
                <ColorColumn>
                    <Circle color={GRAY_FAMILY.N100} />
                    <P>N100</P>
                    <P>{GRAY_FAMILY.N100}</P>
                </ColorColumn>
            </Grid>
            <Grid item xs={2}>
                <ColorColumn>
                    <Circle color={GRAY_FAMILY.N50} />
                    <P>N50</P>
                    <P>{GRAY_FAMILY.N50}</P>
                </ColorColumn>
            </Grid>
            <Grid item xs={2}>
                <ColorColumn>
                    <Circle color={GRAY_FAMILY.N20} />
                    <P>N20</P>
                    <P>{GRAY_FAMILY.N20}</P>
                </ColorColumn>
            </Grid>
            <Grid item xs={2}>
                <ColorColumn>
                    <Circle color={GRAY_FAMILY.N10} />
                    <P>N10</P>
                    <P>{GRAY_FAMILY.N10}</P>
                </ColorColumn>
            </Grid>
        </Grid>
    </React.Fragment>
  ,{
    readme:{
        content:NeutralColorReadme
    }
  })
  .add('Blue Family',()=>
    <React.Fragment>
        <Title>Blue Family</Title>
        <Grid container spacing={3}>
            <Grid item xs={2}>
                <ColorColumn>
                    <Circle color={BLUE_FAMILY.B900} />
                    <P>B900</P>
                    <P>{BLUE_FAMILY.B900}</P>
                </ColorColumn>
            </Grid>
            <Grid item xs={2}>
                <ColorColumn>
                    <Circle color={BLUE_FAMILY.B800} />
                    <P>B800</P>
                    <P>{BLUE_FAMILY.B800}</P>
                </ColorColumn>
            </Grid>
            <Grid item xs={2}>
                <ColorColumn>
                    <Circle color={BLUE_FAMILY.B700} />
                    <P>B700</P>
                    <P>{BLUE_FAMILY.B700}</P>
                </ColorColumn>
            </Grid>
            <Grid item xs={2}>
                <ColorColumn>
                    <Circle color={BLUE_FAMILY.B600} />
                    <P>B600</P>
                    <P>{BLUE_FAMILY.B600}</P>
                </ColorColumn>
            </Grid>
            <Grid item xs={2}>
                <ColorColumn>
                    <Circle color={BLUE_FAMILY.B500} />
                    <P>B500</P>
                    <P>{BLUE_FAMILY.B500}</P>
                </ColorColumn>
            </Grid>
            <Grid item xs={2}>
                <ColorColumn>
                    <Circle color={BLUE_FAMILY.B400} />
                    <P>B400</P>
                    <P>{BLUE_FAMILY.B400}</P>
                </ColorColumn>
            </Grid>
            </Grid>
            <Grid container spacing={3}>
            <Grid item xs={3}>
                <ColorColumn>
                    <Circle color={BLUE_FAMILY.B300} />
                    <P>B300</P>
                    <P>{BLUE_FAMILY.B300}</P>
                </ColorColumn>
            </Grid> 
            <Grid item xs={3}>
                <ColorColumn>
                    <Circle color={BLUE_FAMILY.B200} />
                    <P>B200</P>
                    <P>{BLUE_FAMILY.B200}</P>
                </ColorColumn>
            </Grid>
            <Grid item xs={3}>
                <ColorColumn>
                    <Circle color={BLUE_FAMILY.B100} />
                    <P>B100</P>
                    <P>{BLUE_FAMILY.B100}</P>
                </ColorColumn>
            </Grid>
            <Grid item xs={3}>
                <ColorColumn>
                    <Circle color={BLUE_FAMILY.B50} />
                    <P>B50</P>
                    <P>{BLUE_FAMILY.B50}</P>
                </ColorColumn>
            </Grid>
        </Grid>
    </React.Fragment>
  ,{
    readme:{
        content:BlueColorReadme
    }
  })
  .add('Green Family',()=>
  <React.Fragment>
      <Title>Green Family</Title>
      <Grid container spacing={3}>
          <Grid item xs={2}>
              <ColorColumn>
                  <Circle color={GREEN_FAMILY.G900} />
                  <P>G900</P>
                  <P>{GREEN_FAMILY.G900}</P>
              </ColorColumn>
          </Grid>
          <Grid item xs={2}>
              <ColorColumn>
                  <Circle color={GREEN_FAMILY.G800} />
                  <P>G800</P>
                  <P>{GREEN_FAMILY.G800}</P>
              </ColorColumn>
          </Grid>
          <Grid item xs={2}>
              <ColorColumn>
                  <Circle color={GREEN_FAMILY.G700} />
                  <P>G700</P>
                  <P>{GREEN_FAMILY.G700}</P>
              </ColorColumn>
          </Grid>
          <Grid item xs={2}>
              <ColorColumn>
                  <Circle color={GREEN_FAMILY.G600} />
                  <P>G600</P>
                  <P>{GREEN_FAMILY.G600}</P>
              </ColorColumn>
          </Grid>
          <Grid item xs={2}>
              <ColorColumn>
                  <Circle color={GREEN_FAMILY.G500} />
                  <P>G500</P>
                  <P>{GREEN_FAMILY.G500}</P>
              </ColorColumn>
          </Grid>
          <Grid item xs={2}>
              <ColorColumn>
                  <Circle color={GREEN_FAMILY.G400} />
                  <P>G400</P>
                  <P>{GREEN_FAMILY.G400}</P>
              </ColorColumn>
          </Grid>
          </Grid>
          <Grid container spacing={3}>
          <Grid item xs={3}>
              <ColorColumn>
                  <Circle color={GREEN_FAMILY.G300} />
                  <P>G300</P>
                  <P>{GREEN_FAMILY.G300}</P>
              </ColorColumn>
          </Grid> 
          <Grid item xs={3}>
              <ColorColumn>
                  <Circle color={GREEN_FAMILY.G200} />
                  <P>G200</P>
                  <P>{GREEN_FAMILY.G200}</P>
              </ColorColumn>
          </Grid>
          <Grid item xs={3}>
              <ColorColumn>
                  <Circle color={GREEN_FAMILY.G100} />
                  <P>G100</P>
                  <P>{GREEN_FAMILY.G100}</P>
              </ColorColumn>
          </Grid>
          <Grid item xs={3}>
              <ColorColumn>
                  <Circle color={GREEN_FAMILY.G50} />
                  <P>G50</P>
                  <P>{GREEN_FAMILY.G50}</P>
              </ColorColumn>
          </Grid>
      </Grid>
  </React.Fragment>
,{
  readme:{
      content:GreenColorReadme
  }
})
.add('Yellow Family',()=>
<React.Fragment>
    <Title>Yellow Family</Title>
    <Grid container spacing={3}>
        <Grid item xs={2}>
            <ColorColumn>
                <Circle color={YELLOW_FAMILY.Y900} />
                <P>Y900</P>
                <P>{YELLOW_FAMILY.Y900}</P>
            </ColorColumn>
        </Grid>
        <Grid item xs={2}>
            <ColorColumn>
                <Circle color={YELLOW_FAMILY.Y800} />
                <P>Y800</P>
                <P>{YELLOW_FAMILY.Y800}</P>
            </ColorColumn>
        </Grid>
        <Grid item xs={2}>
            <ColorColumn>
                <Circle color={YELLOW_FAMILY.Y700} />
                <P>Y700</P>
                <P>{YELLOW_FAMILY.Y700}</P>
            </ColorColumn>
        </Grid>
        <Grid item xs={2}>
            <ColorColumn>
                <Circle color={YELLOW_FAMILY.Y600} />
                <P>Y600</P>
                <P>{YELLOW_FAMILY.Y600}</P>
            </ColorColumn>
        </Grid>
        <Grid item xs={2}>
            <ColorColumn>
                <Circle color={YELLOW_FAMILY.Y500} />
                <P>Y500</P>
                <P>{YELLOW_FAMILY.Y500}</P>
            </ColorColumn>
        </Grid>
        <Grid item xs={2}>
            <ColorColumn>
                <Circle color={YELLOW_FAMILY.Y400} />
                <P>Y400</P>
                <P>{YELLOW_FAMILY.Y400}</P>
            </ColorColumn>
        </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Grid item xs={3}>
            <ColorColumn>
                <Circle color={YELLOW_FAMILY.Y300} />
                <P>Y300</P>
                <P>{YELLOW_FAMILY.Y300}</P>
            </ColorColumn>
        </Grid> 
        <Grid item xs={3}>
            <ColorColumn>
                <Circle color={YELLOW_FAMILY.Y200} />
                <P>Y200</P>
                <P>{YELLOW_FAMILY.Y200}</P>
            </ColorColumn>
        </Grid>
        <Grid item xs={3}>
            <ColorColumn>
                <Circle color={YELLOW_FAMILY.Y100} />
                <P>Y100</P>
                <P>{YELLOW_FAMILY.Y100}</P>
            </ColorColumn>
        </Grid>
        <Grid item xs={3}>
            <ColorColumn>
                <Circle color={YELLOW_FAMILY.Y50} />
                <P>Y50</P>
                <P>{YELLOW_FAMILY.Y50}</P>
            </ColorColumn>
        </Grid>
    </Grid>
</React.Fragment>
,{
readme:{
    content:YellowColorReadme
}
})
.add('Red Family',()=>
<React.Fragment>
    <Title>Red Family</Title>
    <Grid container spacing={3}>
        <Grid item xs={2}>
            <ColorColumn>
                <Circle color={RED_FAMILY.R900} />
                <P>R900</P>
                <P>{RED_FAMILY.R900}</P>
            </ColorColumn>
        </Grid>
        <Grid item xs={2}>
            <ColorColumn>
                <Circle color={RED_FAMILY.R800} />
                <P>R800</P>
                <P>{RED_FAMILY.R800}</P>
            </ColorColumn>
        </Grid>
        <Grid item xs={2}>
            <ColorColumn>
                <Circle color={RED_FAMILY.R700} />
                <P>R700</P>
                <P>{RED_FAMILY.R700}</P>
            </ColorColumn>
        </Grid>
        <Grid item xs={2}>
            <ColorColumn>
                <Circle color={RED_FAMILY.R600} />
                <P>R600</P>
                <P>{RED_FAMILY.R600}</P>
            </ColorColumn>
        </Grid>
        <Grid item xs={2}>
            <ColorColumn>
                <Circle color={RED_FAMILY.R500} />
                <P>R500</P>
                <P>{RED_FAMILY.R500}</P>
            </ColorColumn>
        </Grid>
        <Grid item xs={2}>
            <ColorColumn>
                <Circle color={RED_FAMILY.R400} />
                <P>R400</P>
                <P>{RED_FAMILY.R400}</P>
            </ColorColumn>
        </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Grid item xs={3}>
            <ColorColumn>
                <Circle color={RED_FAMILY.R300} />
                <P>R300</P>
                <P>{RED_FAMILY.R300}</P>
            </ColorColumn>
        </Grid> 
        <Grid item xs={3}>
            <ColorColumn>
                <Circle color={RED_FAMILY.R200} />
                <P>R200</P>
                <P>{RED_FAMILY.R200}</P>
            </ColorColumn>
        </Grid>
        <Grid item xs={3}>
            <ColorColumn>
                <Circle color={RED_FAMILY.R100} />
                <P>R100</P>
                <P>{RED_FAMILY.R100}</P>
            </ColorColumn>
        </Grid>
        <Grid item xs={3}>
            <ColorColumn>
                <Circle color={RED_FAMILY.R50} />
                <P>R50</P>
                <P>{RED_FAMILY.R50}</P>
            </ColorColumn>
        </Grid>
    </Grid>
</React.Fragment>
,{
readme:{
    content:RedColorReadme
}
})
.add('Purple Family',()=>
<React.Fragment>
    <Title>Purple Family</Title>
    <Grid container spacing={3}>
        <Grid item xs={2}>
            <ColorColumn>
                <Circle color={PURPLE_FAMILY.P900} />
                <P>P900</P>
                <P>{PURPLE_FAMILY.P900}</P>
            </ColorColumn>
        </Grid>
        <Grid item xs={2}>
            <ColorColumn>
                <Circle color={PURPLE_FAMILY.P800} />
                <P>P800</P>
                <P>{PURPLE_FAMILY.P800}</P>
            </ColorColumn>
        </Grid>
        <Grid item xs={2}>
            <ColorColumn>
                <Circle color={PURPLE_FAMILY.P700} />
                <P>P700</P>
                <P>{PURPLE_FAMILY.P700}</P>
            </ColorColumn>
        </Grid>
        <Grid item xs={2}>
            <ColorColumn>
                <Circle color={PURPLE_FAMILY.P600} />
                <P>P600</P>
                <P>{PURPLE_FAMILY.P600}</P>
            </ColorColumn>
        </Grid>
        <Grid item xs={2}>
            <ColorColumn>
                <Circle color={PURPLE_FAMILY.P500} />
                <P>P500</P>
                <P>{PURPLE_FAMILY.P500}</P>
            </ColorColumn>
        </Grid>
        <Grid item xs={2}>
            <ColorColumn>
                <Circle color={PURPLE_FAMILY.P400} />
                <P>P400</P>
                <P>{PURPLE_FAMILY.P400}</P>
            </ColorColumn>
        </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Grid item xs={3}>
            <ColorColumn>
                <Circle color={PURPLE_FAMILY.P300} />
                <P>P300</P>
                <P>{PURPLE_FAMILY.P300}</P>
            </ColorColumn>
        </Grid> 
        <Grid item xs={3}>
            <ColorColumn>
                <Circle color={PURPLE_FAMILY.P200} />
                <P>P200</P>
                <P>{PURPLE_FAMILY.P200}</P>
            </ColorColumn>
        </Grid>
        <Grid item xs={3}>
            <ColorColumn>
                <Circle color={PURPLE_FAMILY.P100} />
                <P>P100</P>
                <P>{PURPLE_FAMILY.P100}</P>
            </ColorColumn>
        </Grid>
        <Grid item xs={3}>
            <ColorColumn>
                <Circle color={PURPLE_FAMILY.P50} />
                <P>P50</P>
                <P>{PURPLE_FAMILY.P50}</P>
            </ColorColumn>
        </Grid>
    </Grid>
</React.Fragment>
,{
readme:{
    content:PurpleColorReadme
}
})

const backgroundColor = props => (
    css`
        background-color: ${props.color}
    `
);

const Title = styled.h2`
    font-size: 20px;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;
`;

const Circle = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 5px;
    ${backgroundColor}
`;

const P = styled.p`
    font-family: 'Roboto';
    text-align: center;
    padding: 0;
    margin: 0;
`;

const ColorColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`