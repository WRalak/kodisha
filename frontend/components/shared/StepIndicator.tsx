export function StepIndicator({ steps, current = 0 }: { steps: string[]; current?: number }) {
  return (
    <ol className="grid gap-2 sm:grid-cols-4">
      {steps.map((step, index) => (
        <li className="flex items-center gap-2 text-sm font-medium" key={step}>
          <span className={`grid h-7 w-7 place-items-center rounded-md ${index <= current ? "bg-orange-600 text-white" : "bg-stone-100 text-stone-500"}`}>
            {index + 1}
          </span>
          {step}
        </li>
      ))}
    </ol>
  );
}
