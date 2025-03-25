interface InputComponentProps {
  placeholder: string;
}

export const Input = ({ placeholder }: InputComponentProps) => {
  return (
    <input
      className="px-2 py-2 border-2 rounded-md border-gray-200"
      type="text"
      placeholder={placeholder}
    />
  );
};
