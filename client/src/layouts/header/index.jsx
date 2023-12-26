import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import "./input.css";
import {
  selectDarkMode,
  toggleDarkMode,
} from "../../redux/slice/darkModeSlice";
import { useEffect } from "react";
import logo from "../../assets/logo.png";
import DarkLightMode from "../../components/dark-light-mode";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
const Header = () => {
  const dispatch = useDispatch();
  const isDarkModeEnabled = useSelector(selectDarkMode);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode) {
      dispatch(toggleDarkMode());
    }
  }, [dispatch]);
  return (
    <div id="header">
      <div
        className={
          isDarkModeEnabled ? "dark-mode mainDiv" : "mainDiv light-mode"
        }
      >
        <div className="container">
          <div className="leftSec">
            <div className="logo">
              <div className="fakeLogo">
                <img src={logo} alt="logo" />
              </div>
              <h3
                className={isDarkModeEnabled ? "logoNameDark" : "logoNameLight"}
              >
                Coinshelter
              </h3>
            </div>
            <div className="searchMain">
              <div className="search">
                <input
                  type="text"
                  className="search__input"
                  placeholder="Search..."
                />
              </div>
            </div>
          </div>
          <div className="rightSec">
            <div className="darkLightModeDiv">
              <DarkLightMode />
            </div>
            <div className="walletBtn">
              <p>Connect Wallet</p>
              <AccountBalanceWalletIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
