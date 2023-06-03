import { useState } from "react";

export function NewTransactionModal() {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[535px] h-[528px] bg-modal_background flex flex-col gap-10 rounded-md">
        <div className="flex justify-between items-center">
          <span className="text-white text-2xl font-bold mt-12 ml-12">
            New Transaction
          </span>
          <span className="text-white text-2xl font-bold w-12 h-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#7d7d7d"
              viewBox="0 0 256 256"
            >
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
            </svg>
          </span>
        </div>
        <div className="flex justify-center items-center ">
          <form className="flex flex-col items-start p-0 gap-4" action="">
            <input
              className="flex flex-row items-start p-3 gap-2 w-[439px] rounded-md bg-input_background"
              placeholder="Description"
              type="text"
            />
            <input
              className="flex flex-row items-start p-3 gap-2 w-[439px] rounded-md bg-input_background"
              placeholder="Price"
              type="text"
            />
            <input
              className="flex flex-row items-start p-3 gap-2 w-[439px] rounded-md bg-input_background"
              placeholder="Category"
              type="text"
            />
          </form>
        </div>
        <div className="flex justify-center items-center p-0 gap-4 flex-row">
          <button className="bg-button_background rounded-md w-[211.5px] py-3 text-white">
            👍 Income
          </button>
          <button className="bg-button_background rounded-md w-[211.5px] py-3 text-white">
            👎 Expenditure
          </button>
        </div>
        <div className="flex justify-center items-center gap-2.5 ">
          <button className="bg-buttonregister_background rounded-md py-2 px-8 w-[439px]">
            <span className="text-white text-base">Register</span>
          </button>
        </div>
      </div>
    </div>
  );
}
