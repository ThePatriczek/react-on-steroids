import {CodePane, Heading, Slide} from "spectacle";
import React from "react";

export const View =
    <Slide backgroundColor={`beta`}>
        <Heading color={`epsilon`}>
            {`Input View`}
        </Heading>
        <CodePane autoFillHeight language={`jsx`}>
            {`export const Input: InputType = forwardRef(
    ({ prefix, suffix, size = 'medium', ...props }, ref) => {
        if (prefix || suffix) {
            return (
                <InputWrapperWithFix
                    {...props}
                    size={size}
                    prefix={prefix}
                    suffix={suffix}
                    ref={ref}
                />
            );
        }
        return (
            <StyledInputContainer
                size={size}
                isFullWidth={props.isFullWidth}
                isDisabled={props.isDisabled}
                isRound={props.isRound}
            >
                <InputBase {...props} ref={ref} />
            </StyledInputContainer>
        );
    }
);
`}
        </CodePane>
    </Slide>