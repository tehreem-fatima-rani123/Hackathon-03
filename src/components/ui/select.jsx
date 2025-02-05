export function Select({ value, onChange, children, className = "" }) {
    return (
      <select
        value={value}
        onChange={onChange}
        className={`w-full p-2 border rounded-md ${className}`}
      >
        {children}
      </select>
    );
  }
  
  export function SelectItem({ value, children }) {
    return <option value={value}>{children}</option>;
  }
  