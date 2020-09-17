import {CodePane, Heading, Slide} from "spectacle";
import React from "react";

export const Input =
    <Slide backgroundColor={`beta`}>
        <Heading color={`epsilon`}>
            {`Input`}
        </Heading>
        <CodePane autoFillHeight language={`jsx`}>
            {`export const Input: React.FC<InputProps> & {
  TextArea: React.FC<TextAreaProps>;
} = (props) => {
  const {
    transferFocus,
    defaultValue,
    isDisabled,
    placeholder,
    id,
    onEnterPress,
    iconLeft,
    iconRight,
    ComponentLeft,
    ComponentRight,
    autoFocus,
    isAlternative,
    size,
    isLoading,
    className,
    autoComplete,
    htmlType,
    isFullWidth,
    handlersWithEvent
  } = props;

  useEffect(() => {
    if (!!iconRight && !!ComponentRight) {
      const err = new Error(
        \`Only one of iconRight or componentRight can be defined at the same time\`
      );
      throw err;
    }
  }, [iconRight, ComponentRight]);

  useEffect(() => {
    if (!!iconRight && !!ComponentRight) {
      const err = new Error(
        \`Only one of iconLeft or componentLeft can be defined at the same time\`
      );
      throw err;
    }
  }, [iconLeft, ComponentLeft]);

  const ref = React.createRef<HTMLInputElement>();
  const [value, setValue] = React.useState<string>(defaultValue || \`\`);
  const [isFocused, setFocused] = React.useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val: string = e.target.value;

    if (!isDisabled) {
      if (typeof props.value === 'undefined') {
        setValue(val);
      }

      props.onChange?.(handlersWithEvent ? e : val);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === \`Enter\`) {
      onEnterPress?.(value);
    }

    if (handlersWithEvent) {
      props.onKeyDown?.(e);
    }
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    props.onBlur?.();
  };

  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);

    props.onFocus?.();
  };
  const val = props.value !== undefined ? props.value : value;

  const Component = (
    <StyledInput
      id={id}
      value={val}
      onChange={onChange}
      disabled={isDisabled}
      placeholder={isAlternative && !isDisabled ? \`\` : placeholder}
      onKeyDown={onKeyDown}
      autoFocus={autoFocus}
      onBlur={onBlur}
      onFocus={onFocus}
      ref={ref}
      size={size as never}
      autoComplete={autoComplete}
      type={htmlType}
      isFullWidth={isFullWidth}
    />
  );

  const AlternativeComponent = (
    <StyledInputWrapperAlt
      size={size as Size}
      isFocused={transferFocus || isFocused}
      isLeftComponent={!!iconLeft}
      isRightComponent={!!(iconRight || isLoading)}
      hasValue={!!val}
      isDisabled={isDisabled}
      onClick={() => {
        if (ref.current) {
          ref.current.focus();
        }
      }}
      className={className}
      isFullWidth={isFullWidth}
    >
      {iconLeft || iconRight ? (
        <StyledInputWrapper
          size={size as Size}
          isFocused={
            typeof transferFocus !== 'undefined' ? transferFocus : isFocused
          }
          isLeftComponent={!!iconLeft}
          isRightComponent={!!(iconRight || isLoading)}
          isDisabled={isDisabled}
          onClick={() => {
            if (ref.current) {
              ref.current.focus();
            }
          }}
          isFullWidth={isFullWidth}
        >
          {iconLeft && <Icon name={iconLeft} />}
          {!!ComponentLeft && ComponentLeft}
          {Component}

          <label>{placeholder}</label>
          {isLoading && <Icon name={'loading'} isRotating />}
          {iconRight && !isLoading && <Icon name={iconRight} />}
          {!!ComponentRight && !isLoading && ComponentRight}
        </StyledInputWrapper>
      ) : (
        <>
          {Component}
          <label>{placeholder}</label>
        </>
      )}
    </StyledInputWrapperAlt>
  );

  if (isAlternative && !isDisabled) {
    return AlternativeComponent;
  }

  return (
    <StyledInputWrapper
      isFocused={isFocused}
      isLeftComponent={!!(iconLeft || ComponentLeft)}
      isRightComponent={!!(isLoading || iconRight || ComponentRight)}
      isDisabled={isDisabled}
      size={size as Size}
      onClick={() => {
        if (ref.current) {
          ref.current.focus();
        }
      }}
      className={className}
      isFullWidth={isFullWidth}
    >
      {iconLeft && <Icon name={iconLeft} />}
      {!!ComponentLeft && ComponentLeft}
      {Component}
      {isLoading && <Icon name={'loading'} isRotating />}
      {iconRight && !isLoading && <Icon name={iconRight} />}
      {!!ComponentRight && !isLoading && ComponentRight}
    </StyledInputWrapper>
  );
};`}
        </CodePane>
    </Slide>