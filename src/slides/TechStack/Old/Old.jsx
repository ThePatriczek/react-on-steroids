import React from 'react';
import {FlexBox, Heading, ListItem, Slide, UnorderedList} from 'spectacle';

export const Old =
    <Slide backgroundColor={`beta`}>
        <FlexBox>
            <Heading color={`gamma`}>
                {`Tech Stack`}
            </Heading>
            <Heading color={`alpha`}>{`-`}</Heading>
            <Heading color={`epsilon`}>
                {`Old`}
            </Heading>
        </FlexBox>
        <UnorderedList style={{listStyleType: `none`}}>
            <ListItem>{`Javascript`}</ListItem>
            <ListItem>{`Class Components`}</ListItem>
            <ListItem>{`GraphQL`}</ListItem>
            <ListItem>{`Axios`}</ListItem>
            <ListItem>{`Redux (Saga)`}</ListItem>
            <ListItem>{`Less`}</ListItem>
        </UnorderedList>
    </Slide>