interface TrendProps {
  imageUrl: string;
  title: string;
  iconUrl: string;
}
const Trend: React.FC<TrendProps> = ({ imageUrl, title, iconUrl }) => {
  return (
    <a href="" className="relative flex-1 group overflow-hidden rounded-lg">
      <img
        src={imageUrl}
        className="w-full transition-transform transform group-hover:scale-105"
      />
      <div className="flex gap-2 absolute top-0 left-0 p-6 w-full bg-gradient-to-b from-slate-600">
        <h3 className="text-3xl font-semibold text-white">{title}</h3>
        <img src={iconUrl} alt="" />
      </div>
    </a>
  );
};

export default Trend;
