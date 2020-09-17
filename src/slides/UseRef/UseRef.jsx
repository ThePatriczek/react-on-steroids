import React from 'react';
import {CodePane, Heading, Quote, Slide} from 'spectacle';

export const UseRef =
    <Slide backgroundColor={`beta`}>
        <Heading color={`epsilon`}>
            {`useRef`}
        </Heading>
        <CodePane autoFillHeight language={`jsx`}>
            {`const ref = useRef()
ref.current = new Map();
ref.current = \`🍺\`;

<input ref={ref} type="text" />; 

const usePrevious = (value) => {
  const ref = useRef()
  
  useEffect(() => {
    ref.current = value
  });
  
  return ref.current
}`}
        </CodePane>
        <Quote>
            {`Mutating the .current property doesn’t cause a re-render.`}
            <br/>
            {`For the best React optimization you shouldn't use React 🤯 `}</Quote>
    </Slide>
