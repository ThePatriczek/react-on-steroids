import React from 'react';
import {Box, FlexBox, Heading, ListItem, Slide, UnorderedList} from 'spectacle';

export const New =
    <Slide backgroundColor={`beta`}>
        <Heading color={`epsilon`}>
            {`Tech Stack - New`}
        </Heading>
        <UnorderedList style={{listStyleType: `none`}}>
            <ListItem>
                <FlexBox justifyContent={`space-between`}>
                    <Box>{`Javascript`}</Box>
                    <Box>{`➡`}️</Box>
                    <Box>{`Typescript`}</Box>
                </FlexBox>
            </ListItem>
            <ListItem>
                <FlexBox justifyContent={`space-between`}>
                    <Box>{`Class Components`}</Box>
                    <Box>{`➡`}️</Box>
                    <Box>{`Hooks`}</Box>
                </FlexBox>
            </ListItem>
            <ListItem>
                <FlexBox>
                    <Box>{`GraphQL`}</Box>
                    <Box>{`✅`}️</Box>
                </FlexBox>
            </ListItem>
            <ListItem>
                <FlexBox justifyContent={`space-between`}>
                    <Box>{`Axios`}</Box>
                    <Box>{`➡`}️</Box>
                    <Box>{`Apollo Client`}</Box>
                </FlexBox>
            </ListItem>

            <ListItem>
                <FlexBox justifyContent={`space-between`}>
                    <Box>{`Redux (Saga)`}</Box>
                    <Box>{`➡`}️</Box>
                    <Box>{`Apollo Cache`}</Box>
                </FlexBox>
            </ListItem>
            <ListItem>
                <FlexBox justifyContent={`space-between`}>
                    <Box>{`Less`}</Box>
                    <Box>{`➡`}️</Box>
                    <Box>{`StyledComponents`}</Box>
                </FlexBox>
            </ListItem>
        </UnorderedList>
    </Slide>