import React from "react";
import "./styles.module.scss";
import Gmail from "@/shared/ui/Icons/Footer/Gmail";
import Inst from "@/shared/ui/Icons/Footer/Inst";
import Whatsapp from "@/shared/ui/Icons/Footer/Whatsapp";
import X from "@/shared/ui/Icons/Footer/X";

export default function Footer() {
  return (
    <footer className="bg-black py-[35px]">
      <div className="container flex items-center">
        <div className="flex gap-[50px]">
          <Gmail />
          <Inst />
          <Whatsapp />
          <X />
        </div>
        <div>
          <p>© 2013 - 2024 CUPCART. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
