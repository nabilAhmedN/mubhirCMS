import React from "react";

const Button = ({
  children,
  variant = "primary",
  icon,
  iconPosition = "left",
  disabled = false,
  ...props
}) => {
  const baseStyles =
    "min-w-[108px] px-4 py-2 rounded-md text-sm font-semibold inline-flex items-center justify-center gap-2";

  const variants = {
    primary: "bg-[#7A2060] text-white hover:bg-[#67194f]",
    outline: "border border-[#D0D5DD] text-[#344054] bg-white hover:bg-gray-50",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${disabled ? disabledStyles : "cursor-pointer"}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === "left" && <span>{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
};

export default Button;
