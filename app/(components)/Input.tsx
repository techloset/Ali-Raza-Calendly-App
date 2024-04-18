import React from "react";

interface InputProps {
  placeholder: string;
  type: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  id: string;
}
const InputField: React.FC<InputProps> = ({
  type,
  name,
  onChange,
  value,
  placeholder,
}) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        className="focus:shadow-2xl shadow-lg h-12 border rounded w-full py-2 px-3 text-gray-700 outline-none"
      />
    </div>
  );
};

export default InputField;
