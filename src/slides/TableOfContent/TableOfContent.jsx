import {Heading, ListItem, Slide, UnorderedList} from "spectacle";
import React from "react";

export const TableOfContent =
    <Slide backgroundColor={`beta`}>
        <Heading color={`epsilon`}>
            {`Topics`}
        </Heading>

        <UnorderedList style={{listStyleType: `none`}}>
            <ListItem>{`Our TechStack`}</ListItem>
            <ListItem>{`How to reuse components effectively?`}</ListItem>
            <ListItem>{`Optimization`}</ListItem>
            <ListItem>{`Large data rendering`}</ListItem>
        </UnorderedList>
    </Slide>