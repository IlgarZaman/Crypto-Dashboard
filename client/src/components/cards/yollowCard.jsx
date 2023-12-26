import { ResponsiveContainer, Area, AreaChart } from "recharts";

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
const YellowCard = () => {
  return (
    <div>
      <ResponsiveContainer width={130} height={80}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffcc00" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#ffcc00" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="pv"
            fill="url(#colorPv)"
            stroke="#FFD84D"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default YellowCard;
