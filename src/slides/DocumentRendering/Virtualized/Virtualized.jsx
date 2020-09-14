import React from 'react';
import {Box, FlexBox, Heading, Image, Slide} from 'spectacle';
import virtualized from '../../../images/virtualized.png';

export const Virtualized =
    <Slide backgroundColor={`beta`}>
        <Heading color={`epsilon`}>
            {`React Virtualized`}
        </Heading>
        {/* todo: snippet */}
        {/* todo: time of render */}
        <FlexBox justifyContent={`flex-end`}>
            <Box>
                <Image src={virtualized} alt={`virtualized`} height={`150px`} width={`300px`}/>
            </Box>
        </FlexBox>
    </Slide>