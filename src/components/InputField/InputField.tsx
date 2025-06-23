import React from 'react';
import type { InputFieldProps } from './typing';

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
      
    }) => {
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
            className={`w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ring-[#000000]`}
            required={true}
            maxLength={maxLength}
          />
        </div>
      );
    };

    export default InputField;