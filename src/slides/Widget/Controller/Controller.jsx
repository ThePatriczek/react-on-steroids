import {CodePane, Heading, Slide} from "spectacle";
import React from "react";

export const Controller =
    <Slide backgroundColor={`beta`}>
        <Heading color={`epsilon`}>
            {`Input Controller`}
        </Heading>
        <CodePane autoFillHeight language={`js`}>
            {`export const useInput = ({
    defaultValue = '',
    isDisabled,
    onChange,
}) => {
    const [value, setValue] = useState<InputProps['value']>(defaultValue);

    const handleChange: InputProps['onChange'] = useCallback(
        (e): void => {
            if (!isDisabled) {
                const { value } = e.currentTarget;
                setValue(value);
                onChange?.(e);
            }
        },
        [onChange, isDisabled]
    );

    return { value, onChange: handleChange };
};`}
        </CodePane>
    </Slide>