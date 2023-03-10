import { useState, ChangeEvent } from 'react';

export interface DropdownOption {
  value: string,
  label: string
}

interface DropdownInputParams {
  value: string,
  label: string,
  options: DropdownOption[],
  onChange(value: string): void
}

export default function Dropdown(params: DropdownInputParams) {
  const [value, setValue] = useState(params.options[0].value);
  return (
    <label>
      {params.label}
      <select value={params.value} onChange={(event: ChangeEvent<HTMLSelectElement>) => {setValue(event.target.value); params.onChange(event.target.value); }}>
        {params.options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
}