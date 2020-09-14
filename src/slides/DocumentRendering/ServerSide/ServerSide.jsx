import React from 'react';
import {CodePane, Heading, Slide, Text} from 'spectacle';

export const ServerSide =
    <Slide backgroundColor={`beta`}>
        <Heading color={`epsilon`}>
            {`Pagination - Lazy Loading`}
        </Heading>
        <CodePane autoFillHeight language={`graphql`}>
            {`query Document($id: Int!, $width: Int!, $fontSize: Int!, $offset: Int!, $limit: Int!) {
            
                document(id: $id, width: $width, fontSize: $fontSize) {
                        totalHeight #Int!
                        heights #[Int!]!
                       
                        segments(limit: $limit, offset: $offset) [{ 
                                html #String!
                        }]
                }         
}`}
        </CodePane>
        <Text>Performance: ???</Text>
    </Slide>