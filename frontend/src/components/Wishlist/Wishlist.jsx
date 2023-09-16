import React, { useState } from "react";
import styles from "../../styles/styles";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

const Wishlist = ({ setOpenWishlist }) => {
  const cartData = [
    {
      name: "iphone 14 pro max 256 gb ssd silver color",
      description: "test",
      price: 200,
    },
    {
      name: "iphone 14 pro max 256 gb ssd silver color",
      description: "test",
      price: 300,
    },
    {
      name: "iphone 14 pro max 256 gb ssd silver color",
      description: "test",
      price: 400,
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
        <div className="w-full h-screen flex items-center justify-center">
          <div className="flex w-full justify-end pt-5 pr-5 fixed top-3 right-3">
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={() => setOpenWishlist(false)}
            />
          </div>
          <div>
            {/* Item length */}
            <div className={`${styles.noramlFlex} p-4`}>
              <AiOutlineHeart size={25} />
              <h5 className="pl-2 text-[20px] font-[500]">3 items</h5>
            </div>

            {/* cart Single Items */}
            <br />
            <div className="w-full border-t">
              {cartData &&
                cartData.map((i, index) => (
                  <CartSingle
                    key={index}
                    data={i}
                    // quantityChangeHandler={quantityChangeHandler}
                    // removeFromCartHandler={removeFromCartHandler}
                  />
                ))}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

const CartSingle = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalprice = data.price * value;

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <RxCross1 className="cursor-pointer" />
        <img
          src="https://cdn.shopify.com/s/files/1/1706/9177/products/NEWAppleMacbookProwithM1ProChip14InchLaptop2021ModelMKGQ3LL_A_16GB_1TBSSD_custommacbd.jpg?v=1659592838"
          alt=""
          className="w-[130px] h-min ml-2 mr-2 rounded-[5px]"
        />

        <div className="pl-[5px]">
          <h1>{data.name}</h1>
          <h4 className="font-[400] text-[15px] text-[#00000082]">
            ${data.price} * {value}
          </h4>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            US${totalprice}
          </h4>
        </div>
        <div>
          <BsCartPlus size={20} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;