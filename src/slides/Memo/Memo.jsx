import React from 'react';
import {CodePane, Heading, Quote, Slide} from 'spectacle';

export const Memo =
    <Slide backgroundColor={`beta`}>
        <Heading color={`gamma`}>
            {`Memoization`}
        </Heading>
        <CodePane autoFillHeight language={`js`}>
            {`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b])
const memoizedCallback = useCallback(() => {doSomething(a, b);},[a, b])`}
        </CodePane>
        <Quote>{`Time-space tradeoff`}</Quote>
    </Slide>


export const MemoProblem =
    <Slide backgroundColor={`beta`}>
            <Heading color={`gamma`}>
                    {`Memoization Deps`}
            </Heading>
            <CodePane autoFillHeight language={`js`}>
                    {`return useMemo(() => {...}, [🤣,😂,😆,😁,😄,😅,😀,😊,🙂,🙃,🤨,🧐,😔,😢, ...💩]);`}
            </CodePane>
    </Slide>