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
const VioletCard = () => {
  return (
    <div>
      <ResponsiveContainer width={130} height={80}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorPv3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8E98FF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8E98FF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="pv"
            fill="url(#colorPv3)"
            stroke="#8E98FF"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VioletCard;
