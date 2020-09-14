import React from 'react';
import {Deck, Heading, Image, Link, Slide} from 'spectacle';
import {Async, InnerHTML, Intro, New, Old, Outro, ServerSide, Virtualized, Widget} from './slides';
import {theme} from './theme'
import hype from './images/hype.png';

export const Presentation = () =>
    <Deck theme={theme}>
        {Intro}
        {/* Topic */}

        {Old}
        {New}
        <Slide backgroundColor={`alpha`}><Image src={hype} alt={`hype`} height={`100%`}/></Slide>
        {/* Atlantic, Components with state */}
        {Widget}
        {/* Widget
                Controller (Hooks)
                View
                adobe/react-spectrum
                antd (old react) vs spectrum (new react)
         */}
        <Slide backgroundColor={`beta`}>
            <Heading color={`epsilon`}>{`Big HTML Document Rendering`}</Heading>
            <Heading color={`gamma`} fontSize={`h3`}>{`2,3 GHz 8-Core Intel Core i9`}</Heading>
            <Link href={`https://app.codexis.cz/doc/CR/26785`}
                  fontSize={`h4`}
                  textAlign={`center`}
                  color={`gamma`}
                  target={`_blank`}>{`https://app.codexis.cz/doc/CR/26785`}</Link>
        </Slide>
        {InnerHTML}
        {Virtualized}
        {Async}
        {ServerSide}
        {/* DocumentRendering
                Directly to DOM
                Virtualized
                Async
                Server side
            */}

        {/* Summary */}
        {Outro}
    </Deck>