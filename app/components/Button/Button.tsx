import variants from "./buttons.json";

export interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
}

export const Button = ({ label = "Label", variant }: ButtonProps) => {
  return (
    <button className="p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300">
      {label}
    </button>
  );
};
