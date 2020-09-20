import React from 'react';
import {Box, FlexBox, Heading, ListItem, Slide, UnorderedList} from 'spectacle';

export const New =
    <Slide backgroundColor={`beta`}>
        <FlexBox>
            <Heading color={`epsilon`}>
                {`Tech Stack`}
            </Heading>
            <Heading color={`alpha`}>{`-`}</Heading>
            <Heading color={`gamma`}>
                {`New`}
            </Heading>
        </FlexBox>

        <UnorderedList style={{listStyleType: `none`}}>
            <ListItem>
                <FlexBox justifyContent={`space-between`}>
                    <Box width={400}>{`Javascript`}</Box>
                    <Box>{`➡`}️</Box>
                    <Box width={400}>{`Typescript`}</Box>
                </FlexBox>
            </ListItem>
            <ListItem>
                <FlexBox justifyContent={`space-between`}>
                    <Box width={400}>{`Class Components`}</Box>
                    <Box>{`➡`}️</Box>
                    <Box width={400}>{`Hooks`}</Box>
                </FlexBox>
            </ListItem>
            <ListItem>
                <FlexBox>
                    <Box>{`GraphQL`}</Box>
                    <Box marginLeft={25}>{`✅`}️</Box>
                </FlexBox>
            </ListItem>
            <ListItem>
                <FlexBox justifyContent={`space-between`}>
                    <Box width={400}>{`Axios`}</Box>
                    <Box>{`➡`}️</Box>
                    <Box width={400}>{`Apollo Client`}</Box>
                </FlexBox>
            </ListItem>

            <ListItem>
                <FlexBox justifyContent={`space-between`}>
                    <Box width={400}>{`Redux (Saga)`}</Box>
                    <Box>{`➡`}️</Box>
                    <Box width={400}>{`Apollo Cache`}</Box>
                </FlexBox>
            </ListItem>
            <ListItem>
                <FlexBox justifyContent={`space-between`}>
                    <Box width={400}>{`Less`}</Box>
                    <Box>{`➡`}️</Box>
                    <Box width={400}>{`StyledComponents`}</Box>
                </FlexBox>
            </ListItem>
        </UnorderedList>

    </Slide>