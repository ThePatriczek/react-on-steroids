import {Heading, Slide, UnorderedList, ListItem} from "spectacle";
import React from "react";

export const Summary =
    <Slide backgroundColor={`beta`}>
        <Heading color={`epsilon`}>
            {`Summary`}
        </Heading>
        <UnorderedList>
            <ListItem>{`Reusable Components - View, Controller (Hooks)`}</ListItem>
            <ListItem>{`Adobe Spectrum`}</ListItem>
            <ListItem>{`Memoization - time-space tradeoff`}</ListItem>
            <ListItem>{`useRef - stops unnecessary rendering`}</ListItem>
            <ListItem>{`Large lists - React Virtualized`}</ListItem>
        </UnorderedList>
    </Slide>