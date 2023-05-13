import {
    ButtonHTMLAttributes,
    InputHTMLAttributes,
    OptionHTMLAttributes,
    SelectHTMLAttributes,
    TextareaHTMLAttributes
} from "react";
import DateTime, {DatetimepickerProps} from "react-datetime";
import "react-datetime/css/react-datetime.css";
import {FormikProps} from "formik";

type PropsTypes = 'input' | 'textarea' | 'button' | 'select' | 'datetime';

type Props = {
    type: PropsTypes;
    name: string;
    label: string;
    formik: FormikProps<any>;
    showLabel?: boolean;
    className?: string;
    parentClassName?: string;
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
    textareaProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
    buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
    selectProps?: SelectHTMLAttributes<HTMLSelectElement>;
    selectOptions?: (OptionHTMLAttributes<HTMLOptionElement> & {
        value: string;
        label: string;
    })[];
    datetimeProps?: DatetimepickerProps;
};

const renderItem = ({
                        type,
                        name,
                        label,
                        formik,
                        showLabel,
                        className,
                        inputProps,
                        textareaProps,
                        buttonProps,
                        selectProps,
                        selectOptions,
                        datetimeProps,
                    }: Props) => {
    switch (type) {
        case 'input':
            return <input type="text" id={name} name={name}
                          className={`bg-white rounded-md text-c-dark-gray placeholder-c-dark-gray p-2 w-full focus:outline-none focus:bg-gray-100 ${className || ''}`}
                          placeholder={showLabel ? '' : label} value={formik.values[name]}
                          onChange={formik.handleChange} onBlur={formik.handleBlur} {...inputProps}/>;
        case 'textarea':
            return <textarea rows={3} id={name} name={name}
                             className={`bg-white rounded-md text-c-dark-gray placeholder-c-dark-gray p-2 w-full focus:outline-none focus:bg-gray-100 resize-none ${className || ''}`}
                             placeholder={showLabel ? '' : label} value={formik.values[name]}
                             onChange={formik.handleChange} onBlur={formik.handleBlur} {...textareaProps}/>;
        case 'button':
            return <button type="button" id={name} name={name}
                           className={`bg-white text-c-dark-gray text-lg rounded-md px-14 py-1 border-2 transition duration-500 border-white hover:bg-black hover:text-white ${className || ''}`}
                           {...buttonProps}>{label}</button>;
        case 'select':
            return <select id={name} name={name}
                           className={`bg-white rounded-md text-c-dark-gray p-2 w-full focus:outline-none focus:bg-gray-100 resize-none ${className || ''}`}
                           value={formik.values[name]} onChange={formik.handleChange}
                           onBlur={formik.handleBlur} {...selectProps}>
                {!showLabel && <option value="" disabled>{label}</option>}
                {selectOptions?.map((item, index) => (
                    <option key={index} value={item.value}>{item.label}</option>
                ))}
            </select>;
        case 'datetime':
            return <DateTime className="text-black text-sm font-normal w-full" inputProps={{
                id: name,
                name,
                className: `bg-white rounded-md text-c-dark-gray font-bold placeholder-c-dark-gray p-2 w-full focus:outline-none focus:bg-gray-100 ${inputProps?.className || ''}`,
                placeholder: showLabel ? '' : label,
                value: formik.values[name],
                onChange: formik.handleChange,
                onBlur: formik.handleBlur,
            }} initialViewDate={new Date()} onChange={value => {
                if (typeof value !== 'string') {
                    formik.setFieldValue(name, value.format(name === 'date' ? 'YYYY/MM/DD' : 'hh:mm A'));
                }
            }} {...datetimeProps}/>;
        default:
            return null;
    }
};

const ContactUsFormItemInput = ({
                                    type,
                                    name,
                                    label,
                                    formik,
                                    showLabel = true,
                                    className,
                                    parentClassName,
                                    inputProps,
                                    textareaProps,
                                    buttonProps,
                                    selectProps,
                                    selectOptions,
                                    datetimeProps,
                                }: Props) => {
    return (
        <div className={`flex flex-col justify-start items-start gap-2.5 text-sm font-bold ${parentClassName || ''}`}>
            {type !== 'button' && showLabel && <label htmlFor={name}>{label}</label>}
            {renderItem({
                type,
                name,
                label,
                formik,
                showLabel,
                className,
                inputProps,
                textareaProps,
                buttonProps,
                selectProps,
                selectOptions,
                datetimeProps,
            })}
        </div>
    );
};

export default ContactUsFormItemInput;