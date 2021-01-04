import React from 'react';
import { UnpackNestedValue, FieldValuesFromControl, Control } from 'react-hook-form';
import { DeepPath, Options, ControllerProps } from './types';
export declare const useTypedController: <TFieldValues extends UnpackNestedValue<FieldValuesFromControl<TControl>>, TControl extends Control<Record<string, any>> = Control<Record<string, any>>>({ control, }: Options<TControl>) => <UFieldValues extends TFieldValues, TFieldName extends DeepPath<UFieldValues, TFieldName>, TAs extends "input" | "select" | "textarea">({ name, ...rest }: import("./types").Assign<{
    name: TFieldName;
    as?: TAs | undefined;
    rules?: Partial<{
        required: string | boolean | import("react-hook-form").ValidationValueMessage<boolean>;
        min: import("react-hook-form").ValidationRule<React.ReactText>;
        max: import("react-hook-form").ValidationRule<React.ReactText>;
        maxLength: import("react-hook-form").ValidationRule<React.ReactText>;
        minLength: import("react-hook-form").ValidationRule<React.ReactText>;
        pattern: import("react-hook-form").ValidationRule<RegExp>;
        validate: import("./types").Validate<import("./types").DeepPathValue<UFieldValues, TFieldName>> | Record<string, import("./types").Validate<import("./types").DeepPathValue<UFieldValues, TFieldName>>>;
    }> | undefined;
    onFocus?: (() => void) | undefined;
    defaultValue?: import("./types").DeepPathValue<UFieldValues, TFieldName> | undefined;
    render?: ((props: {
        onChange: (...event: any[]) => void;
        onBlur: () => void;
        value: import("./types").DeepPathValue<UFieldValues, TFieldName>;
    }) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>) | undefined;
}, JSX.IntrinsicElements[TAs]>) => JSX.Element;
