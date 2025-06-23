import React from 'react';
import type { InputFieldProps } from './typing';
import clsx from 'clsx';

    const InputField: React.FC<InputFieldProps> = ({
      label,
      id,
      name,
      type = 'text',
      value,
      onChange,
      placeholder,
      className,
      maxLength,
      minLength,
      variant='primary'
    }) => {
        const variantStyles = {
          primary: "w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ring-[#000000]",
          secondary: 'w-full p-3  bg-transparent border-b-2 border-b-[#f060b9] text-[black] focus:outline-none ',
        };
      
      
        const combinedClasses = clsx(
          variantStyles[variant],
          className,
        );
      return (
        <div className={`${className}`}>
          <label htmlFor={id} className="block text-sm font-medium text-[#000000]  mb-1">
            {label}
          </label>
          <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={combinedClasses}
            required={true}
            maxLength={maxLength}
            minLength={minLength}
          />
        </div>
      );
    };

    export default InputField;