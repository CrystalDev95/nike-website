import React from "react";
import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";

const CartCount = ({ onCartToggle, clearCartItems, totalQTY }) => {
  console.log(totalQTY);

  return (
    <>
      <div className="bg-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full">
        <div className="flex items-center gap-3 cursor-pointer">
          <div
            className="grid items-center cursor-pointer"
            onClick={onCartToggle}
          >
            <ChevronDoubleLeftIcon className="w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2]" />
          </div>
          <div className="flex gap-2 items-center">
            <h1 className="text-base font-medium text-slate-900">Your Cart</h1>
            <span className="bg-theme-cart rounded px-1 py-0.5 text-slate-100 font-normal">
              ({totalQTY} items)
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            onClick={clearCartItems}
            className="flex items-center gap-2 rounded bg-theme-cart active:scale-90 py-0.5 px-2"
          >
            <p className="text-white">Clear Cart</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCount;
