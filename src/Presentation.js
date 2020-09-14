import React from 'react';
import {Deck, Image, Slide} from 'spectacle';
import {Intro, New, Old, Outro, Widget} from './slides';
import {theme} from './theme'

export const Presentation = () =>
    <Deck theme={theme}>
        {Intro}
        {Old}
        {New}
        <Slide backgroundColor={`alpha`}><Image src={`hype.png`} alt={`hype`} height={`100%`}/></Slide>
        {Widget}
        {/* Widget
                Controller (Hooks)
                View
                adobe/react-spectrum
                antd (old react) vs spectrum (new react)
         */}

        {/* DocumentRendering
                Directly to DOM
                Virtualized
                Async
                Server side
            */}

        {Outro}
    </Deck>