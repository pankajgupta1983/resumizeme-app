import React from 'react';
import './input.css';

const InputElement = ({
  name,
  is_required = false,
  value,
  defaultValue,
  onChange = () => { },
  placeholder,
  className = '',
  error,
  disabled = false,
  autofill = 'off',
  type = 'text',
  inputRef,
  ...rest
}) => {

  return (
    <div className={className}>
      <div className={`form-group ${value ? 'focused' : ''}`}>
        <label className="inter-500-text natural-900-text">{name}</label>
        <div className="relative">
          <input
            autoComplete={autofill}
            defaultValue={defaultValue}
            value={value}
            disabled={disabled}
            ref={inputRef}
            type={type}
            required={is_required}
            onChange={({ target: { value } }) => onChange(value)}
            {...rest}
          />
        </div>
      </div>
    </div>
  );
};

export default InputElement;
