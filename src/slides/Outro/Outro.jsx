import React from 'react';
import {Heading, Link, Quote, Slide} from 'spectacle';

export const Outro = (
    <Slide backgroundColor="beta">
        <Heading color="epsilon" textAlign={`right`}>
            {`Any questions?`}
        </Heading>

        <Link textAlign={`right`} color={`gamma`}
              href={`https://github.com/thepatriczek/react-on-steroids/`}
              target={`_blank`}
        >{`https://github.com/thepatriczek/react-on-steroids/`}</Link>
        <Quote color={`alpha`}>{`Thank you.`}</Quote>
    </Slide>
);