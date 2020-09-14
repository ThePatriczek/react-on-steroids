import React from 'react';
import {Box, CodePane, FlexBox, Heading, Image, Slide} from 'spectacle';
import innerHTML from '../../../images/innerHTML.png';

export const InnerHTML =
    <Slide backgroundColor={`beta`}>
        <Heading color={`epsilon`}>
            {`innerHTML`}
        </Heading>
        <CodePane autoFillHeight language={`jsx`}>
            {`const innerHTML = ({ children: __html }) => <div dangerouslySetInnerHTML={{ __html }}/>`}
        </CodePane>
        <FlexBox justifyContent={`flex-end`} alignItems={`flex-end`} height={`30vh`}>
            <Box>
                <Image src={innerHTML} alt={`innerHTML`} height={`250px`} width={`500px`}/>
            </Box>
        </FlexBox>
    </Slide>