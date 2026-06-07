import { StarRating } from "@/components/shared/StarRating";

export function ReviewCard({ name, text, rating = 5 }: { name: string; text: string; rating?: number }) {
  return (
    <article className="rounded-lg border border-stone-200 bg-white p-4">
      <StarRating rating={rating} />
      <p className="mt-3 text-sm leading-6 text-stone-600">{text}</p>
      <strong className="mt-3 block text-sm text-stone-950">{name}</strong>
    </article>
  );
}
