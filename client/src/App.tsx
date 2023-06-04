import { useEffect, useState } from "react";
import { NewExchangeModal } from "./components/NewExchangeModal";
import axios from "axios";
import { NumberFormat } from "./utils/NumberFormat";
import logo from "./assets/logo.png";

function App() {
  const [exchangeModal, setExchangeModal] = useState(false);
  const [exchanges, setExchanges] = useState<any[]>([]);
  const URL = "http://localhost:4000";

  const fetchExchanges = async () => {
    const res = await axios.get(`${URL}/exchanges`);
    setExchanges(res.data.exchanges);
  };

  const countTotalIncomes = () => {
    let totalEntries = 0;
    for (let index = 0; index < exchanges.length; index++) {
      if (exchanges[index].typeExchange == "Income") {
        totalEntries += exchanges[index].price;
      }
    }
    return totalEntries;
  };
  const countTotalExpenditures = () => {
    let totalEntries = 0;
    for (let index = 0; index < exchanges.length; index++) {
      if (exchanges[index].typeExchange == "Expenditure") {
        totalEntries += exchanges[index].price;
      }
    }
    return totalEntries;
  };

  const countTotalNetWorth = () => {
    let totalNetWorth = 0;
    totalNetWorth += countTotalIncomes() - countTotalExpenditures();
    return totalNetWorth;
  };

  useEffect(() => {
    fetchExchanges();
    console.log("exchanges", exchanges);
  }, []);

  return (
    <div>
      <div className="h-[16vh] bg-main_background flex justify-center">
        <NewExchangeModal
          isActive={exchangeModal}
          setIsActive={setExchangeModal}
          setExchanges={setExchanges}
        />
        <div className="flex flex-row justify-between w-[80vw] mt-[5vh]">
          <div className="flex items-center justify-between w-[100vw]">
            <img className="w-[150px]" src={logo} alt="sexo" />
            <div className="">
              <button
                onClick={() => {
                  setExchangeModal(true);
                }}
                className="bg-buttonregister_background text-white rounded-md w-[152px] h-[52px]"
              >
                <span>New Exchange</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-main_background h-[84vh] w-[100vw]">
        <div className="flex flex-row justify-center items-center gap-4 pb-4">
          <div className="flex flex-col p-6 gap-4 w-[352px] h-[137px] rounded-md bg-card_background">
            <span className="text-text_classic">Entries</span>
            <span className="text-2xl text-green-500">
              + {NumberFormat.format(countTotalIncomes())}
            </span>
          </div>
          <div className="flex flex-col p-6 gap-4 w-[352px] h-[137px] rounded-md bg-card_background">
            <span className="text-text_classic">Expenditures</span>
            <span className="text-2xl text-red-500">
              - {NumberFormat.format(countTotalExpenditures())}
            </span>
          </div>
          <div className="flex flex-col p-6 gap-4 w-[352px] h-[137px] rounded-md bg-green_card">
            <span className="text-text_classic">Total</span>
            <span className="text-2xl text-white">
              {NumberFormat.format(countTotalNetWorth())}
            </span>
          </div>
        </div>
        {/* <div className="flex flex-row justify-center items-center gap-4 p-4">
          <input
            className="w-[800px] h-[54px] rounded-md bg-header_background"
            type="text"
          />
          <button className="w-[150px] h-[50px] flex items-center justify-center border border-green-400 rounded-md">
            <span className="text-green-400">Buscar</span>
          </button>
        </div> */}
        <div className="w-[100%] h-[80%] flex flex-col items-center gap-5 overflow-y-auto">
          {exchanges.map((exchange) => (
            <div className="w-[70%] flex flex-row justify-between bg-card_background p-6 rounded-md ">
              <div className="flex basis-1/4 justify-start text-text_classic">
                {exchange.description}
              </div>
              {exchange.typeExchange == "Expenditure" ? (
                <div className="flex basis-1/4 text-red-500 justify-center items-center">
                  - {NumberFormat.format(exchange.price)}
                </div>
              ) : (
                <div className="flex basis-1/4 text-green-500 justify-center items-center">
                  {NumberFormat.format(exchange.price)}
                </div>
              )}
              <div className="flex basis-1/4 text-text_classic justify-center items-center">
                {exchange.category}
              </div>
              <div className="flex basis-1/4 text-text_classic justify-end items-center text-center">
                <h1>{exchange.dateExchange}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
