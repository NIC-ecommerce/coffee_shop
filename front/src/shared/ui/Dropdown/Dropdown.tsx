import React, { useState } from "react";

interface DropdownProps {
  buttonStyle?: string;
  listStyle?: string;
  options: string[];
  label: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  buttonStyle = "",
  listStyle = "",
  options,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button className={buttonStyle} onClick={toggleDropdown}>
        {label}
      </button>
      {isOpen && (
        <div className={`absolute top-full ${listStyle}`}>
          {options.map((option, index) => (
            <div className="cursor-pointer" key={index}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;