import { ChangeEvent } from "react";

interface LabelledInputComponentProps {
  placeholder: string;
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
  label?: string;
}

export const LabelledInput = ({
  placeholder,
  type,
  onChange,
  value,
  name,
  label,
}: LabelledInputComponentProps) => {
  return (
    <div className="flex flex-col gap-y-1">
      {label && (
        <label className="text-sm" htmlFor={`${name ?? ""}`}>
          {label}
        </label>
      )}
      <input
        className="px-2 py-2 border-2 rounded-md border-gray-200"
        type={type ?? "text"}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
      />
    </div>
  );
};
