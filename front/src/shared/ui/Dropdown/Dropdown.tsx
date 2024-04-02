import React, { useState } from "react";
import SmallArrow from "../Icons/SmallArrow/SmallArrow";

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
        <div className="relative">
          <div className={`absolute top-full ${listStyle}`}>
          {options.map((option, index) => (
            <div className={`cursor-pointer text-base pl-[5px] mt-[10px] pb-[10px] flex items-center 
            ${ index === options.length - 1 ? "" : "border-b border-solid border-lightGray" }`}
            key={index}>
            {option}
              <div className="absolute left-[290px]">
                <SmallArrow/>
              </div>
            </div>
          ))}     
          </div>
        </div>
        
      )}
    </div>
  );
};

export default Dropdown;
