export function Toast({ message }: { message: string }) {
  return <div className="rounded-md border border-orange-100 bg-orange-50 px-4 py-3 text-sm font-medium text-stone-800">{message}</div>;
}
