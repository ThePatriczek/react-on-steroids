import React from 'react';
import {Box, CodePane, FlexBox, Heading, ListItem, Slide, UnorderedList} from 'spectacle';

export const Widget =
    <Slide backgroundColor={`beta`}>
        <Heading color={`epsilon`}>
            {`Widget`}
        </Heading>
        <FlexBox justifyContent={`space-between`}>
            <Box>
                <Heading color={`gamma`}>
                    {`Controller`}
                </Heading>
                <UnorderedList>
                    <ListItem>{`KISS!`}</ListItem>
                    <ListItem>{`Custom Hook`}</ListItem>
                    <ListItem>{`Returns the Interface`}</ListItem>
                </UnorderedList>
            </Box>
            <Box>
                <Heading color={`gamma`}>
                    {`View`}
                </Heading>
                <UnorderedList>
                    <ListItem>{`Pure Function`}</ListItem>
                    <ListItem>{`Stateless`}</ListItem>
                    <ListItem>{`Accepts the Interface`}</ListItem>
                </UnorderedList>
            </Box>
        </FlexBox>
    </Slide>

export const WidgetExample = <Slide backgroundColor={`beta`}>
    <Heading color={`gamma`}>
        {`Input Usage Example`}
    </Heading>
    <CodePane autoFillHeight language={`jsx`}>
        {`  const handlers = useInput({
        defaultValue: '',
        onChange: console.log,
    });

    return <Input {...handlers} />;`}
    </CodePane>
</Slide>


export const ProsCons =
    <Slide backgroundColor={`beta`}>
        <FlexBox>
            <Heading color={`gamma`}>
                {`View & Controller`}
            </Heading>
            <Heading color={`alpha`}>{`-`}</Heading>
            <Heading color={`epsilon`}>
                {`Pros`}
            </Heading>
        </FlexBox>

        <UnorderedList>
            <ListItem>{`Reusable Views for the Controller`}</ListItem>
            <ListItem>{`Reusable Controllers for the View`}</ListItem>
        </UnorderedList>
    </Slide>