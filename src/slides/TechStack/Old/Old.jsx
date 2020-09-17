import React from 'react';
import {Heading, ListItem, Slide, UnorderedList} from 'spectacle';

export const Old =
    <Slide backgroundColor={`beta`}>
        <Heading color={`epsilon`}>
            {`Tech Stack - Old`}
        </Heading>
        <UnorderedList style={{listStyleType: `none`}}>
            <ListItem>{`Javascript`}</ListItem>
            <ListItem>{`Class Components`}</ListItem>
            <ListItem>{`GraphQL`}</ListItem>
            <ListItem>{`Axios`}</ListItem>
            <ListItem>{`Redux (Saga)`}</ListItem>
            <ListItem>{`Less`}</ListItem>
        </UnorderedList>
    </Slide>