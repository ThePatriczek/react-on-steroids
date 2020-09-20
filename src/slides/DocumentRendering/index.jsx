import {Box, FlexBox, Heading, Link, Slide} from "spectacle";
import React from "react";

export * from './innerHTML'
export * from './Virtualized'
export * from './Async'
export * from './ServerSide'

export const DocumentRendering = <Slide backgroundColor={`beta`}>
    <FlexBox justifyContent={`center`} alignItems={`center`} width={`100%`} height={`100%`}>
        <Box>
            <Heading color={`epsilon`}>{`Large HTML Document Rendering`}</Heading>
            <Heading color={`gamma`} fontSize={`h3`}>{`2.3 GHz 8-Core Intel Core i9`}</Heading>
            <Link href={`https://app.codexis.cz/doc/CR/26785`}
                  fontSize={`h4`}
                  textAlign={`center`}
                  color={`gamma`}
                  target={`_blank`}>{`https://app.codexis.cz/doc/CR/26785`}</Link>
        </Box>
    </FlexBox>
</Slide>