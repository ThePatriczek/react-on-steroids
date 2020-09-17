import React from 'react';
import {Deck, Image, Slide} from 'spectacle';
import {
    Async,
    Controller,
    DocumentRendering,
    InnerHTML,
    Input,
    Intro,
    Memo,
    MemoProblem,
    New,
    Old,
    Outro,
    ProsCons,
    ServerSide,
    Spectrum,
    SpectrumAntd,
    TableOfContent,
    UseRef,
    View,
    Virtualized,
    Widget,
    WidgetExample,
    Summary
} from './slides';
import {theme} from './theme'
import hype from './images/hype.png';

export const Presentation = () =>
    <Deck theme={theme}>
        {Intro}
        {TableOfContent}

        {Old}
        {New}
        {Hype}
        {/* recapitulation */}

        {Input}
        {Widget}
        {View}
        {Controller}
        {WidgetExample}
        {ProsCons}
        {Spectrum}
        {SpectrumAntd}
        {/* recapitulation */}

        {Memo}
        {MemoProblem}
        {UseRef}
        {/* recapitulation */}

        {DocumentRendering}
        {InnerHTML}
        {Virtualized}
        {Async}
        {ServerSide}

        {Summary}
        {Outro}
    </Deck>

const Hype = <Slide backgroundColor={`alpha`}><Image src={hype} alt={`hype`} height={`100%`}/></Slide>