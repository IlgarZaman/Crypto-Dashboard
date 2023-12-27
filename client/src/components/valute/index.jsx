import { useSelector } from "react-redux";
import { selectDarkMode } from "../../redux/slice/darkModeSlice";
import "./index.scss";
import PurpleCard from "../cards/purpleCard";
import YellowCard from "../cards/yollowCard";
import GreenCard from "../cards/greenCard";
import VioletCard from "../cards/violetCard";
const ValuteSec = () => {
  const isDarkModeEnabled = useSelector(selectDarkMode);

  return (
    <div id="valute">
      <div className={"mainDiv"}>
        <div className="containerForValute">
          <div className="cardSec">
            <div className="card">
              <div className="topSec">
                <h3 style={{ color: isDarkModeEnabled && "#B1BFD4" }}>Coins</h3>
              </div>
              <div className="btmSec">
                <div className="mainBtmSecDiv">
                  <div className="leftSec">
                    <h2 style={{ color: isDarkModeEnabled && "white" }}>
                      9.43M
                    </h2>
                    <h4 style={{ color: isDarkModeEnabled && "#95A1B2" }}>
                      24H Value(Usd)
                    </h4>
                  </div>
                  <div className="rightSec">
                    <YellowCard />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="topSec">
                <h3 style={{ color: isDarkModeEnabled && "#B1BFD4" }}>
                  24H Price Change
                </h3>
              </div>
              <div className="btmSec">
                <div className="mainBtmSecDiv">
                  <div className="leftSec">
                    <h2 style={{ color: isDarkModeEnabled && "white" }}>683</h2>
                    <h4 className="plusDegree">+1.12%</h4>
                  </div>
                  <div className="rightSec">
                    <GreenCard />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="topSec">
                <h3 style={{ color: isDarkModeEnabled && "#B1BFD4" }}>
                  Total Market Cap(USD)
                </h3>
              </div>
              <div className="btmSec">
                <div className="mainBtmSecDiv">
                  <div className="leftSec">
                    <h2 style={{ color: isDarkModeEnabled && "white" }}>
                      1211.58B
                    </h2>
                    <h4
                      className={
                        isDarkModeEnabled ? "minusDegree" : "lightMinusDegree"
                      }
                    >
                      -1.12%
                    </h4>
                  </div>
                  <div className="rightSec">
                    <VioletCard />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="topSec">
                <h3 style={{ color: isDarkModeEnabled && "#B1BFD4" }}>
                  24H Value(USD)
                </h3>
              </div>
              <div className="btmSec">
                <div className="mainBtmSecDiv">
                  <div className="leftSec">
                    <h2 style={{ color: isDarkModeEnabled && "white" }}>
                      28.57M
                    </h2>
                    <h4 style={{ color: isDarkModeEnabled && "#95A1B2" }}>
                      Listed Cryptos
                    </h4>
                  </div>
                  <div className="rightSec">
                    <PurpleCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuteSec;
