import { ReviewCard } from "@/components/shared/ReviewCard";

export default function ReviewsPage() {
  return <><h1 className="text-3xl font-semibold">Tenant reviews</h1><div className="mt-5 grid gap-4 md:grid-cols-2"><ReviewCard name="Winnie M." text="Professional viewing and clear lease communication." rating={5} /><ReviewCard name="Brian K." text="The listing matched the photos and the agent responded quickly." rating={4.8} /></div></>;
}
