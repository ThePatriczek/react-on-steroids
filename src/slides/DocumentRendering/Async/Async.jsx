import React from 'react';
import {Box, CodePane, FlexBox, Heading, Image, Slide} from 'spectacle';
import async from '../../../images/async.png';

export const Async =
    <Slide backgroundColor={`beta`}>
        <Heading color={`epsilon`}>
            {`Async`}
        </Heading>
        {/* todo: snippet */}
        <CodePane autoFillHeight language={`js`}>
            {`const asyncForEach = useCallback((callback, delay = 0) => {
                let index = 0;
                
                const loop = () => {
                    callback(readonlyArray[index], index);
                    
                    if (index++ < readonlyArray.length - 1) {
                        timeout = setTimeout(loop, delay);
                    }
                };
                
                let timeout = setTimeout(loop, delay);
                return timeout;
                
},[readonlyArray]);`}
        </CodePane>
        <FlexBox justifyContent={`flex-end`}>
            <Box>
                <Image src={async} alt={`async`} height={`150px`} width={`300px`}/>
            </Box>
        </FlexBox>
    </Slide>