import React from 'react';
import {Box, FlexBox, Heading, Slide} from 'spectacle';

export const Intro =
    <Slide backgroundColor={`beta`}>
        <FlexBox justifyContent={`center`} alignItems={`center`} width={`100%`} height={`100%`}>
            <Box>
                <Heading color={`gamma`} style={{margin: 0, padding: 0}}>
                    {`React`} <span role={`img`} aria-label={`react`}>⚛</span>️
                </Heading>
                <Heading color={`alpha`} style={{margin: 0, padding: 0}}>
                    {`on`}
                </Heading>
                <Heading color={`epsilon`} style={{margin: 0, padding: 0}}>
                    <span role={`img`} aria-label={`injection`}>💉</span>
                    {`Steroids`}
                </Heading>
            </Box>
        </FlexBox>
    </Slide>