interface DropdownOption {
  value: string,
  label: string
}

interface DropdownInputParams {
  value: string,
  label: string,
  options: DropdownOption[],
  onChange: any
}

export default function Dropdown(params: DropdownInputParams) {
  return (
    <div>
      <label>
        {params.label}
        <select value={params.value} onChange={params.onChange}>
          {params.options.map(option => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
      <p>We eat {params.value}!</p>
    </div>
  );
}