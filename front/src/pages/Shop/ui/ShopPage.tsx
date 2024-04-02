import React from "react";
import Catalog from "@/features/Catalog/ui/Catalog";
import CardList from "@/widgets/ui/CardList/CardList";



export default function ShopPage() {
  return (
    <div>
      <div className="Shop__content pt-[60px] px-[90px] pb-[37px]">
        <Catalog/>
        <CardList/> 
      </div>
    </div>
  );
}

