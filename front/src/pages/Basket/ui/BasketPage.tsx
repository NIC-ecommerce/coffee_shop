"use client";
import React, {useState} from "react";



export default function BasketPage() {

  const [quantity, setQuantity] =useState(1);
  const handleQuantityChange = (newQuantity: any)=>{
    setQuantity(newQuantity);
  };


  const[sizeType, setSizeType] = useState<string>('')
  const[beanType, setBeanType] = useState<string>('');
  const[milkType, setMilkType] = useState<string>('');
  const[syrupType, setSyrupType] = useState<string>('');


  const OptionSection =({ title, additionalTitle, options, selectedOption, setSelectedOption} : any) =>{

    return(
      <div>
        {/* <div className="" style={{ fontSize: '24px', fontWeight: '500', marginBottom: '5px' }}>{title}</div> */}
        {title && ( 
        <div className="" style={{  fontSize: '24px', fontWeight: '500', marginBottom: '8px',  marginTop: '25px' }}>{title}</div>
      )}

        <div className="text-black text-opacity-70 font-inter" style={{ fontSize: '14px', fontWeight: '500', marginBottom: '20px'}}>{additionalTitle}</div>
        {options.map((option: any)=>(
          <label key ={option.label} className="flex items-center "style={{ fontSize: '16px', fontWeight: '500', marginBottom: '15px' }}>
            <input type="radio"
            name="{title}"
            title="{additionalTitle}"
            value={option.label}
            checked = {selectedOption == option.label}
            onChange={()=>setSelectedOption(option.label)}
            className="mr-[10px]" />
            {option.label} {option.price && `(+${option.price} KZT)`}
          </label>
        ))}
      </div>
    )
  }

  const sizeOptions =[
    {label: 'Ганди (473мл)', price: 200},
    {label: 'Венти (591мл)', price: 400}
  ]

  const beatOptions = [
    {label: 'Нет', price:null},
    {label: '1 шот Espresso Roast', price:400},
    {label: '2 шот Espresso Roast', price:800},
    {label: '1 шот Decaf', price:400},
    {label: '2 шот Decaf', price:800}
  ]

  const milkOptions = [
    {label: 'Молоко обычное', price:null},
    {label: 'Молоко маложирное', price:500},
    {label: 'Основа соевая', price:500},
    {label: 'Основа овсяная', price: 500},
    {label: 'Основа кокосовая', price:500}
  ]

  const syrupOptions = [
    {label: 'Без сиропа', price:null},
    {label: 'Карамельный', price:350},
    {label: 'Мятный', price:350},
    {label: 'Малиновый', price:350},
    {label: 'Кокосовый', price:350},
    {label: 'Сахарный ', price:350}
  ]

  const handleSizeOption = (newSize: any) => setSizeType(newSize);
  const handleBeanChange = (newBean: any) => setBeanType(newBean);
  const handleMilkChange = (newMilk: any) => setMilkType(newMilk);
  const handleSyrupChange = (newSyrup: any) => setSyrupType(newSyrup);


  return(
    <div className="container mx-auto p-4 flex justify-center mt-[60px] gap-[70px]">
        <div className="">
        <div className="review  flex] flex-col">
          <div className="inline-flex flex-col items-center p-[30px_20px] gap-4 rounded-[15px] border border-[#rgba-value] bg-white w-[311px] h-[362px] mx-auto">
        <img src="/main/busket_review.png" alt="Hot Latte"
          className="flex justify-center w-[144px] h-[118px] mx-auto"/>
        <div className="flex flex-col gap-2.5 px-4">
          <h1 className="text-2xl leading-tight font-bold">Латте горячий</h1>
          <p className="font-medium text-sm text-gray">Напиток на основе эспрессо и молока c небольшим количеством молочной пены.</p>
          <p className="text-xl font-bold" style={{ color: "#144A0F" }}>1600 KZT</p>
          <div className="flex flex-row space-x-2">
            <img src="\main\busket_like.png" alt="Likes"
              className="h-5 w-5"/>
            <div className="flex flex-row gap-[5px]">
              <p className="text-sm text-black font-medium">97%</p>
              <p className="text-sm text-gray font-medium">(500+)</p>
            </div>
          </div>
        </div>
        
        </div>

            <div className="addBlcok flex flex-col   mt-[45px] gap-[25px]">
        <div className="counter flex justify-center w-[311px]">
        <QuanitySelector initialQuanity={quantity} onQuantityChange={handleQuantityChange}/>
        </div>
        <div className=" flex justify-center w-[311px] ">
      <button className="w-[220px] h-[54px] text-[20px] font-[600] bg-[#144A0F] rounded-[5px]" style={{color: "white"}} >
        Добавить в корзину
    </button>
              </div>
            </div>
        </div>
        </div>

        <div className=" flex justify-center w-[891px] h-[600] gap-[45px]">
            <div className="left-side flex flex-col gap-[15px]">
            <OptionSection
                title="Выберите объем напитка"
                additionalTitle = "Выберите до 1 дополнительных позиций"
                options={sizeOptions}
                selectedOption={sizeType}
                setSelectedOption={handleSizeOption}
            />
            <OptionSection
                title="Выберите зерно"
                additionalTitle = "Выберите до 1 дополнительных позиций"
                options={beatOptions}
                selectedOption={beanType}
                setSelectedOption={handleBeanChange}
            />
            <OptionSection
               title=""
               additionalTitle="Выберите до 1 дополнительных позиций"
                options={beatOptions}
                selectedOption={beanType}
                setSelectedOption={handleBeanChange}
            />
              </div>
            <div className="right-side flex flex-col gap-[15px]">
            <OptionSection
               title="Выберите молоко"
               additionalTitle="Выберите до 1 дополнительных позиций"
                options={milkOptions}
                selectedOption={milkType}
                setSelectedOption={handleMilkChange}
            />
            <OptionSection
                title="Выберите сироп"
                additionalTitle="Выберите до 1 дополнительных позиций"
                options={syrupOptions}
                selectedOption={syrupType}
                setSelectedOption={handleSyrupChange}
            />
          </div>
      </div>
    </div>

  );
 

};




const QuanitySelector = ({initialQuanity = 1, onQuantityChange}: any) => {
  const  [quantity, setQuantity] = useState(initialQuanity);

  const decreaseQuantity = () =>{
    setQuantity((prev : any) =>{
      const newQuantity = prev - 1> 0 ? prev - 1:1;
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };
  const increaseQuantity = ()=>{
    setQuantity((prev: any) =>{
      const newQuantity = prev +1;
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };
  
  return(
    <div className="flex items-center  justify-center w-[117px] h-[41px] border-2 rounded-[5px] border-black-300 gap-[27px]">
      <button 
        onClick = {decreaseQuantity} 
        className="text-black-600 flex items-center  w-[10px] h-[24px] text-[20px] font-[600]  cursor-pointer">
        -
      </button>
      <input type="text"
      className="text-center w-[13px] h-[24px] text-[20px] font-[600]  " 
      value = {quantity}
      />
      <button
      onClick={increaseQuantity}
      className = "text-black-600  flex items-center w-[10px] h-[24px] text-[20px] font-[600]  cursor-pointer">
        +
      </button>
    </div>
  )
}