"use client";
import React from "react";
import "./styles.module.scss";
import Logo from "@/shared/ui/Icons/Logo/Logo";
import Burger from "@/shared/ui/Icons/Burger/Burger";
import Button from "@/shared/ui/Button/Button";
import Input from "@/shared/ui/Input/Input";
import Dropdown from "@/shared/ui/Dropdown/Dropdown";
import Link from "next/link";

import useSession from "@/shared/hooks/useSession";

let option_index_pos = [
  { text: "ПРИБОРЫ" },
  { text: "НОВИНКИ" },
  { text: "НАПИТКИ НА ОСНОВЕ ЭСПРЕССО" },
  { text: "ФРАППУЧЧИНО И ШЕЙКИ" },
  { text: "НАПИТКИ НА ОСНОВЕ ЧАЯ" },
  { text: "ВЫПЕЧКА" },
  { text: "ДЕСЕРТЫ" },
  { text: "НАПИТКИ" },
  { text: "КОФЕ В ЗЁРНАХ" },
  { text: "МИКРОГРАНУЛИРОВАННЫЙ КОФЕ" },
  { text: "ДОПОЛНИТЕЛЬНО" },
];

interface HeaderProps {
  children?: React.ReactNode;
  onClick?: any;
  type?: "login" | "profile";
}

export default function Header({ children, type, onClick }: HeaderProps) {
  const session = useSession();

  console.log(session);

  return (
    <header className="py-[25px] shadow-md">
      <div className="container ">
        <nav className="flex items-center justify-between px-[90px]">
          <Link href={`/`}>
            <Logo />
          </Link>
          <div className="flex gap-[25px]">
            <Dropdown
              label="Категории"
              buttonStyle="py-[10px] font-semibold px-[15px] border-[1px] border-black rounded-[5px]"
              listStyle="w-[316px] bg-white border border-gray-300 mt-1 p-2 rounded shadow z-10"
              options={option_index_pos.map((option) => option.text)}
            />
            <Input
              className="pl-[30px] font-semibold py-[10px] border-[1px] border-black text-gray rounded-[5px] w-[320px]"
              placeholder="Искать в CUPCART"
            />
            <Link href={`/routs/shop`}>
              <Button
                className="py-[10px] font-semibold px-[15px] border-[1px] border-black rounded-[5px]"
                label="Магазин"
              />
            </Link>
          </div>

          {session?.isAuthorized ? (
            <div className="flex gap-[25px]">
              <Link href={`/routs/register`}>
                <Button
                  className="py-[10px] font-semibold px-[15px] border-[1px] border-black rounded-[5px]"
                  label="Регистрация"
                />
              </Link>
              <Link href={`/routs/auth`}>
                <Button
                  className="py-[10px] bg-black text-white font-semibold px-[15px] border-[1px] border-black rounded-[5px]"
                  label="Войти"
                />
              </Link>
            </div>
          ) : (
            <div className="flex gap-[25px]">
              <Link href={`/routs/register`}>
                <Button
                  className="py-[10px] font-semibold px-[15px] border-[1px] border-black rounded-[5px]"
                  label="Корзина"
                />
              </Link>
              <Link href={`/routs/auth`}>
                <Button
                  className="py-[10px] bg-black text-white font-semibold px-[15px] border-[1px] border-black rounded-[5px]"
                  label="Выйти"
                />
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
