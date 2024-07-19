export default function Dropdown({ label, options, ...props }) {
  const selectClassName = `dropdown-select ${
    props.disabled ? "--disabled" : ""
  }`;
  return (
    <div className="dropdown">
      <label className="dropdown-label">{label}</label>
      <select className={selectClassName} {...props}>
        {options.map((opt) => (
          <option className="dropdown-option" value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
