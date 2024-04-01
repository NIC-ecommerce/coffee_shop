"use client";
import React from "react";
import "./styles.module.scss";
import Logo from "@/shared/ui/Icons/Logo/Logo";
import Burger from "@/shared/ui/Icons/Burger/Burger";
import Button from "@/shared/ui/Button/Button";
import Input from "@/shared/ui/Input/Input";
import Dropdown from "@/shared/ui/Dropdown/Dropdown";

export default function Header() {
  return (
    <header className="py-[25px] shadow-md">
      <div className="container ">
        <nav className="flex justify-between px-[90px]">
          <Logo />
          <div className="flex gap-[25px]">
            <Dropdown
              label="Категории"
              buttonStyle="py-[10px] font-semibold px-[15px] border-[1px] border-black rounded-[5px]"
              listStyle="bg-gray-100 border border-gray-300 mt-1 p-2 rounded shadow"
              options={["Option 1", "Option 2", "Option 3"]}
            />
            <Input
              className="pl-[30px] font-semibold py-[10px] border-[1px] border-black text-gray rounded-[5px] w-[320px]"
              placeholder="Искать в CUPCART"
            />
            <Button
              className="py-[10px] font-semibold px-[15px] border-[1px] border-black rounded-[5px]"
              label="Магазин"
            />
          </div>
          <div className="flex gap-[25px]">
            <Button
              className="py-[10px] font-semibold px-[15px] border-[1px] border-black rounded-[5px]"
              label="Регистрация"
            />
            <Button
              className="py-[10px] bg-black text-white font-semibold px-[15px] border-[1px] border-black rounded-[5px]"
              label="Войти"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
