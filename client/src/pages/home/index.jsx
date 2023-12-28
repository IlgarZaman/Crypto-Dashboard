import "./index.scss";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../redux/slice/darkModeSlice";
import MenuBar from "../../components/menu";
import ValuteSec from "../../components/valute";
import Chart from "../../components/chart";
import BtcTable from "../../components/btc-table";
import AllCrypto from "../../components/allCrypto";
const Home = () => {
  const isDarkModeEnabled = useSelector(selectDarkMode);

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
          <div className="allCryptoTable">
            <AllCrypto />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
