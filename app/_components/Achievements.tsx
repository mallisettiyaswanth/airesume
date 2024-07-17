export default function Achievements({ color }: { color: string }) {
  return (
    <div className="mt-1 ">
      <h4
        style={{ borderColor: color }}
        className={`text-[16px] font-bold  border-b-2 `}
      >
        Achievements
      </h4>
      <ul className="list-decimal text-black py-4 flex flex-col gap-2">
        <li className="flex">
          <p className="text-[10px]">1. Gained Certification in Pega</p>
        </li>
        <li className="flex">
          <p className="text-[10px]">2. Gained Certification in Pega</p>
        </li>
        <li className="flex">
          <p className="text-[10px]">3. Gained Certification in Pega</p>
        </li>
        <li className="flex">
          <p className="text-[10px]">4. Gained Certification in Pega</p>
        </li>
      </ul>
    </div>
  );
}
