import { IconProps, iconSizeVariants } from ".";

export const Menu = ({ size, strokeWidth }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width={`${strokeWidth ?? 1.5}`}
      stroke="currentColor"
      className={`${iconSizeVariants[size] ?? "md"}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};
