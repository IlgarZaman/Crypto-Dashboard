import { useEffect } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { allCrypto, selectCryptoData } from "../../redux/slice/crypto";
import { selectDarkMode } from "../../redux/slice/darkModeSlice";
import MenuBar from "../../components/menu";
import ValuteSec from "../../components/valute";
import Chart from "../../components/chart";
import BtcTable from "../../components/btc-table";
const Home = () => {
  const dispatch = useDispatch();
  const initialProducts = useSelector(selectCryptoData);
  const isDarkModeEnabled = useSelector(selectDarkMode);
  useEffect(() => {
    dispatch(allCrypto());
  }, []);
  return (
    <div id="home">
      <div
        className={
          isDarkModeEnabled ? "dark-mode-main mainDiv" : "mainDiv light-mode"
        }
      >
        <div className="menuBarSec">
          <MenuBar />
        </div>
        <div className="mainSec">
          <div className="valuteSec">
            <ValuteSec />
          </div>
          <div className="chartAndBtcTable">
            <div className="chart">
              <Chart />
            </div>
            <div className="btcTable">
              <BtcTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
