import { useEffect } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { allCrypto, selectCryptoData } from "../../redux/slice/crypto";
import { selectDarkMode } from "../../redux/slice/darkModeSlice";
import MenuBar from "../../components/menu";
import ValuteSec from "../../components/valute";
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
          isDarkModeEnabled ? "dark-mode mainDiv" : "mainDiv light-mode"
        }
      >
        <div className="menuBarSec">
          <MenuBar />
        </div>
        <div className="valuteSec">
          <ValuteSec />
        </div>
      </div>
    </div>
  );
};

export default Home;
