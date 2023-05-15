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

type PropsTypes = 'input' | 'textarea' | 'button' | 'select' | 'datetime' | 'checkbox';

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
        case 'checkbox':
            return <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                <input
                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                    id={name}
                    name={name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    {...inputProps}/>
                <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor={name}>
                    {label}
                </label>
            </div>;
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
