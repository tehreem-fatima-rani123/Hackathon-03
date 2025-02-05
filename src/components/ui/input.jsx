export function Input({ type = "text", placeholder, value, onChange, className = "" }) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full p-2 border rounded-md ${className}`}
      />
    );
  }
  