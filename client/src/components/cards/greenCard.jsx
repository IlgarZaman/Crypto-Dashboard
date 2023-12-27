import { ResponsiveContainer, Area, AreaChart } from "recharts";
import "./index.scss";
const data = [
  { pv: 4500 },
  { pv: 4000 },
  { pv: 2000 },
  { pv: 4500 },
  { pv: 1500 },
  { pv: 2000 },
  { pv: 4000 },
  { pv: 4400 },
  { pv: 7000 },
  { pv: 6500 },
  { pv: 5000 },
  { pv: 6000 },
  { pv: 3000 },
  { pv: 7000 },
  { pv: 8500 },
];
const GreenCard = () => {
  return (
    <div className="miniCards">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorPv2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#76FF84" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#76FF84" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="pv"
            fill="url(#colorPv2)"
            stroke="#89FE95"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GreenCard;
