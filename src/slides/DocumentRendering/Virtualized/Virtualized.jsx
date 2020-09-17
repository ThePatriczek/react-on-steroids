import React from 'react';
import {Box, CodePane, FlexBox, Heading, Image, Link, Slide} from 'spectacle';
import virtualized from '../../../images/virtualized.png';

export const Virtualized =
    <Slide backgroundColor={`beta`}>
        <Heading color={`epsilon`}>
            {`React Virtualized`}
        </Heading>
        <Link
            fontSize={`h4`}
            textAlign={`center`}
            color={`gamma`}
            href={`https://bvaughn.github.io/react-virtualized/`}>{`https://bvaughn.github.io/react-virtualized/`}</Link>
        <CodePane autoFillHeight language={`jsx`}>
            {`<AutoSizer disableWidth> {
                ({ height }) => 
                    <CellMeasurer cache={cache} columnIndex={0} key={index} rowIndex={index} parent={parent}>
                        {({ measure, registerChild }) => (
                            <Row marks={marks} key={index} {...props} onMount={measure} ref={registerChild}>
                                {children[index]}
                            </Row>
                       )}
                    </CellMeasurer>
                }
</AutoSizer>`}
        </CodePane>
        <FlexBox justifyContent={`flex-end`}>
            <Box>
                <Image src={virtualized} alt={`virtualized`} height={`150px`} width={`300px`}/>
            </Box>
        </FlexBox>
    </Slide>