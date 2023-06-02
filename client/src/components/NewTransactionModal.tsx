import { useState } from "react"

export function NewTransactionModal() {
    const [description, setDescription] = useState("");
    const [cost, setCost] = useState("");
    const [category, setCategory] = useState("");

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="w-[535px] h-[528px] bg-modal_background flex flex-col">
                <div className="mt-12 ml-12"><span className="text-white text-2xl font-bold">Nova Transição</span></div>
                <div className="w-full"><span className="text-white">X</span></div>
            </div>
        </div>
    )
}