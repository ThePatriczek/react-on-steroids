//

import {Box, FlexBox, Heading, Link, ListItem, Slide, UnorderedList} from "spectacle";
import React from "react";

export const Spectrum =
    <Slide backgroundColor={`beta`}>
        <Heading color={`epsilon`}>
            {`Adobe Spectrum`}
        </Heading>
        <Link href={`https://github.com/adobe/react-spectrum`} target={`_blank`} color={`gamma`} fontSize={`h4`}
              textAlign={`center`}>
            {`https://github.com/adobe/react-spectrum`}
        </Link>
        <FlexBox justifyContent={`space-between`}>
            <Box>
                <Heading color={`gamma`}>
                    {`Spectrum`}
                </Heading>
                <UnorderedList>
                    <ListItem>{`Views`}</ListItem>
                </UnorderedList>
            </Box>
            <Box>
                <Heading color={`gamma`}>
                    {`Stately`}
                </Heading>
                <UnorderedList>
                    <ListItem>{`Hooks (Controller)`}</ListItem>
                </UnorderedList>
            </Box>
        </FlexBox>
    </Slide>

export const SpectrumAntd =     <Slide backgroundColor={`beta`}>
    <Heading color={`epsilon`}>
        {`Adobe Spectrum vs Ant Design`}
    </Heading>
    <FlexBox justifyContent={`space-between`}>
        <Box>
            <Heading color={`gamma`}>
                {`Adobe Spectrum`}
            </Heading>
            <UnorderedList>
                <ListItem>{`About 10 months`}</ListItem>
                <ListItem>{`Reusable Views`}</ListItem>
                <ListItem>{`Reusable (Controllers) Hooks`}</ListItem>
            </UnorderedList>
        </Box>
        <Box>
            <Heading color={`gamma`}>
                {`Ant Design`}
            </Heading>
            <UnorderedList>
                <ListItem>{`About 5 years`}</ListItem>
                <ListItem>{`Class Components`}</ListItem>
            </UnorderedList>
        </Box>
    </FlexBox>
</Slide>