import { agents } from "@/lib/mockData";

export default function ProfilePage() {
  const agent = agents[0];
  return <><h1 className="text-3xl font-semibold">Public profile</h1><section className="mt-5 rounded-md border border-stone-200 bg-white p-4"><img className="h-16 w-16 rounded-full object-cover" src={agent.image} alt="" /><div className="mt-4 grid gap-3"><input className="rounded-md border border-stone-200 px-3 py-2" defaultValue={agent.name} /><textarea className="min-h-28 rounded-md border border-stone-200 px-3 py-2" defaultValue={agent.bio} /><button className="rounded-md bg-orange-600 px-4 py-3 font-semibold text-white">Save profile</button></div></section></>;
}
