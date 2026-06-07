export function RevenueTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | number)[][];
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-stone-200 bg-white">
      <div
        className="grid bg-orange-600 text-sm font-semibold text-white"
        style={{ gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))` }}
      >
        {headers.map((header) => (
          <span className="p-3" key={header}>
            {header}
          </span>
        ))}
      </div>
      {rows.map((row) => (
        <div
          className="grid border-t border-stone-200 text-sm"
          key={row.join("-")}
          style={{ gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))` }}
        >
          {row.map((cell, index) => (
            <span className="p-3" key={`${cell}-${index}`}>
              {cell}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
