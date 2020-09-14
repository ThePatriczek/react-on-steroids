import React from 'react';
import {Box, FlexBox, Heading, Slide, UnorderedList, ListItem} from 'spectacle';

export const Widget =
    <Slide backgroundColor={`beta`}>
        <Heading color={`epsilon`}>
            {`Widget`}
        </Heading>
        <FlexBox justifyContent={`space-between`}>
            <Box>
                <Heading color={`gamma`}>
                    {`Controller`}
                </Heading>
                <UnorderedList>
                    <ListItem>{`KISS!`}</ListItem>
                    <ListItem>{`Returns the Interface`}</ListItem>
                </UnorderedList>
            </Box>
            <Box>
                <Heading color={`gamma`}>
                    {`View`}
                </Heading>
                <UnorderedList>
                    <ListItem>{`Pure Function`}</ListItem>
                    <ListItem>{`Stateless`}</ListItem>
                    <ListItem>{`Accepts the Interface`}</ListItem>
                </UnorderedList>
            </Box>
        </FlexBox>
    </Slide>