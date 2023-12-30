import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import {
  selectDarkMode,
  toggleDarkMode,
} from "../../redux/slice/darkModeSlice";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import { useEffect } from "react";
const DarkLightMode = () => {
  const dispatch = useDispatch();
  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  const isDarkModeEnabled = useSelector(selectDarkMode);
  return (
    <div id="darkLightMode">
      <button onClick={handleToggleDarkMode} className="toggleBtn">
        {isDarkModeEnabled ? (
          <WbSunnyIcon style={{ color: "#89939E" }} />
        ) : (
          <DarkModeTwoToneIcon />
        )}
      </button>
    </div>
  );
};

export default DarkLightMode;
