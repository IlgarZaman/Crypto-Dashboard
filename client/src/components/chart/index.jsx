import "./index.scss";
import "./index.css";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { selectDarkMode } from "../../redux/slice/darkModeSlice";
import { useSelector } from "react-redux";

const Chart = () => {
  const isDarkModeEnabled = useSelector(selectDarkMode);

  const data = [
    {
      name: 2015,
      pv: 100,
    },
    {
      name: 2016,
      pv: 450,
    },
    {
      name: 2017,
      pv: 2450,
    },
    {
      name: 2018,
      pv: 600000,
    },
    {
      name: 2019,
      pv: 70000,
    },
    {
      name: 2020,
      pv: 80000,
    },
    {
      name: 2021,
      pv: 1300000,
    },
    {
      name: 2022,
      pv: 880000,
    },
    {
      name: 2022,
      pv: 1500000,
    },
  ];
  const allowedYears = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];
  const filteredData = data.filter((item) => allowedYears.includes(item.name));
  const CustomYAxisTick = ({ x, y, payload }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={payload.value === 0 ? 0 : 16}
          fill={isDarkModeEnabled ? "#95a1b2" : "white"}
          textAnchor="end"
        >
          {payload.value === 0 ? 0 : `${payload.value / 1000}k`}
        </text>
      </g>
    );
  };
  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div
          className={isDarkModeEnabled ? "customTooltip" : "lightCustomTultip"}
        >
          <p className={isDarkModeEnabled ? "intro" : "lightIntro"}>{`$${
            payload[0].value / 1000
          }k`}</p>
          <p
            className={isDarkModeEnabled ? "label" : "lightLabel"}
          >{`${label}`}</p>
        </div>
      );
    }

    return null;
  };

  const CustomXAxisTick = ({ x, y, payload }) => {
    const year = payload.value;

    if (allowedYears.includes(year)) {
      return (
        <g transform={`translate(${x},${y})`}>
          <text
            x={0}
            y={0}
            dy={16}
            fill={isDarkModeEnabled ? "#95a1b2" : "white"}
            textAnchor="middle"
          >
            {year}
          </text>
        </g>
      );
    }

    return null;
  };
  const handleInfoClick = (event) => {
    const clickedBtn = event.target;
    const parentElements = document.querySelectorAll(".colorful");
    parentElements.forEach((parentElement) => {
      parentElement.classList.remove("colorful");
    });

    clickedBtn.classList.add("colorful");
  };
  return (
    <div id="chart">
      <div className={isDarkModeEnabled ? "dark-mode" : "light-mode"}>
        <div className="mainDivChart">
          <div className="graphHead">
            <h3
              style={{ color: isDarkModeEnabled ? "#95a1b2" : "white" }}
              className="headH2"
            >
              Price
            </h3>
            <div className="timeBtns">
              <button
                onClick={handleInfoClick}
                style={{
                  borderTopLeftRadius: "8px",
                  borderBottomLeftRadius: "8px",
                }}
                className={
                  isDarkModeEnabled
                    ? "darkTimeBtn colorful"
                    : "lightTimeBtn colorful"
                }
              >
                All
              </button>
              <button
                onClick={handleInfoClick}
                className={isDarkModeEnabled ? "darkTimeBtn" : "lightTimeBtn"}
              >
                1 Y
              </button>
              <button
                onClick={handleInfoClick}
                className={isDarkModeEnabled ? "darkTimeBtn" : "lightTimeBtn"}
              >
                6 M
              </button>
              <button
                onClick={handleInfoClick}
                className={isDarkModeEnabled ? "darkTimeBtn" : "lightTimeBtn"}
              >
                3 M
              </button>
              <button
                onClick={handleInfoClick}
                className={isDarkModeEnabled ? "darkTimeBtn" : "lightTimeBtn"}
              >
                1 M
              </button>
              <button
                onClick={handleInfoClick}
                style={{
                  borderTopRightRadius: "8px",
                  borderBottomRightRadius: "8px",
                }}
                className={isDarkModeEnabled ? "darkTimeBtn" : "lightTimeBtn"}
              >
                24h
              </button>
            </div>
          </div>
          <div className="graph">
            <ResponsiveContainer width="95%" height="90%">
              <AreaChart data={filteredData}>
                <defs>
                  <linearGradient id="colorPv5" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="10%"
                      stopColor={isDarkModeEnabled ? "#8E98FF" : "2c2732"}
                      stopOpacity={0.6}
                    />
                    <stop
                      offset="70%"
                      stopColor={isDarkModeEnabled ? "#8E98FF" : "2c2732"}
                      stopOpacity={0.03}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 0"
                  vertical={false}
                  stroke="#5e667a"
                  strokeWidth={0.3}
                />
                <XAxis dataKey="name" tick={<CustomXAxisTick />} />
                <YAxis
                  axisLine={false}
                  ticks={[0, 250000, 500000, 750000, 1000000, 1250000, 1500000]}
                  tick={<CustomYAxisTick />}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="linear"
                  dataKey="pv"
                  fill="url(#colorPv5)"
                  stroke={isDarkModeEnabled ? "#8E98FF" : "#2c2732"}
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="pv"
                  dot={false}
                  stroke="#ffcc00"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
