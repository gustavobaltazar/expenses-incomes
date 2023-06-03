function App() {
  return (
    <div>
      <div className="h-[20vh] bg-header_background flex justify-center">
        <div className="flex flex-row justify-between w-[80vw] mt-[5vh]">
          <span className="text-white">logo</span>
          <button className="bg-buttonregister_background text-white rounded-md w-[152px] h-[52px]">
            New Transaction
          </button>
        </div>
      </div>
      <div className="bg-main_background h-[80vh] w-[100vw]">
        <div className="flex flex-row justify-center items-center gap-4">
          <div className="flex flex-col p-6 gap-4 w-[352px] h-[137px] rounded-md bg-card_background top-[-40px]">
            <span className="text-white">Entries</span>
            <span className="text-2xl text-white">R$Cheiro de sexo</span>
          </div>
          <div className="flex flex-col p-6 gap-4 w-[352px] h-[137px] rounded-md bg-card_background">
            <span className="text-white">Expenditures</span>
            <span className="text-2xl text-white">R$Cheiro de sexo</span>
          </div>
          <div className="flex flex-col p-6 gap-4 w-[352px] h-[137px] rounded-md bg-green_card justify-center">
            <span className="text-white">Total</span>
            <span className="text-2xl text-white">R$Cheiro de sexo</span>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-4 p-4">
          <input
            className="w-[800px] h-[54px] rounded-md bg-header_background"
            type="text"
          />
          <button className="w-[150px] h-[50px] flex items-center justify-center border border-green-400 rounded-md">
            <span className="text-green-400">Buscar</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
