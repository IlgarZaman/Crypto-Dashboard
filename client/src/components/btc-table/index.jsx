import { useSelector } from "react-redux";
import { selectDarkMode } from "../../redux/slice/darkModeSlice";
import "./index.scss";
const BtcTable = () => {
  const isDarkModeEnabled = useSelector(selectDarkMode);

  return (
    <div id="btcTable">
      <div className={isDarkModeEnabled ? "darkBtcTable" : "lightBtcTable"}>
        <div className="btcHeader">
          <h3
            style={{ color: isDarkModeEnabled ? "#95a1b2" : "white" }}
            className="btcH2"
          >
            BTC Price Change
          </h3>
        </div>
        <div className="btcDetails">
          <ul>
            <li>
              <h3>All</h3>
              <h3 className="green">505.78%</h3>
            </li>
            <li>
              <h3>365 days</h3>
              <h3 className="red">-43.9%</h3>
            </li>
            <li>
              <h3>90 days</h3>
              <h3 className="red">-16.08%</h3>
            </li>
            <li>
              <h3>90 days</h3>
              <h3 className="red">-16.08%</h3>
            </li>
            <li>
              <h3>30 days</h3>
              <h3 className="green">7.37%</h3>
            </li>
            <li>
              <h3>7 days</h3>
              <h3 className="green">8.42%</h3>
            </li>
            <li>
              <h3>24 H</h3>
              <h3 className="red">-9.99%</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BtcTable;
