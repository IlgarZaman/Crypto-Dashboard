import { useSelector } from "react-redux";
import "./index.scss";
import { selectDarkMode } from "../../redux/slice/darkModeSlice";
import StoreIcon from "@mui/icons-material/Store";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { AiOutlineSwap } from "react-icons/ai";
import { RiShoppingCartFill } from "react-icons/ri";
import { SiFuturelearn } from "react-icons/si";
import { RiSettings4Line } from "react-icons/ri";
import { IoMdHelpCircleOutline } from "react-icons/io";
const MenuBar = () => {
  const isDarkModeEnabled = useSelector(selectDarkMode);

  const handleInfoClick = (event) => {
    const clickedBtn = event.target;
    const parentElements = document.querySelectorAll(".colorful");
    parentElements.forEach((parentElement) => {
      parentElement.classList.remove("colorful");
    });

    clickedBtn.classList.add("colorful");
  };
  return (
    <div id="menuBar">
      <div
        className={
          isDarkModeEnabled ? "dark-mode mainDiv" : "mainDiv light-mode"
        }
      >
        <div className="containerForMenuBar">
          <ul className="menubarUl">
            <li onClick={handleInfoClick} className="colorful" title="Market">
              <StoreIcon style={{ fontSize: "25px" }} />
              Market
            </li>
            <li onClick={handleInfoClick} title="Buy Crypto">
              <RiShoppingCartFill style={{ fontSize: "25px" }} />
              Buy Crypto
            </li>
            <li onClick={handleInfoClick} title="Swap">
              <AiOutlineSwap style={{ fontSize: "25px" }} />
              Swap
            </li>
            <li onClick={handleInfoClick} title="Exchange">
              <CurrencyExchangeIcon style={{ fontSize: "22px" }} />
              Exchange
            </li>
            <li onClick={handleInfoClick} title="Earn">
              <SiFuturelearn style={{ fontSize: "20px" }} />
              Earn
            </li>
            <li onClick={handleInfoClick} title="Settings">
              <RiSettings4Line style={{ fontSize: "25px" }} />
              Settings
            </li>
            <li onClick={handleInfoClick} title="Help">
              <IoMdHelpCircleOutline style={{ fontSize: "25px" }} />
              Help
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
