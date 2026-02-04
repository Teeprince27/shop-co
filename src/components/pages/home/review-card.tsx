import { Check, Star } from "lucide-react";

const ReviewCard = ({ showDate }: { showDate?: boolean }) => {
  return (
    <div className="border-text-muted-foreground min-h-[150px] w-[350px] space-y-4 rounded-[10px] border p-4">
      <div className="flex items-center justify-start">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} className="size-4 fill-amber-300 stroke-0" />
        ))}
      </div>
      <div className="flex items-center justify-start gap-2">
        <h2 className="font-bold">Customer Name</h2>
        <Check className="size-4 rounded-full bg-green-500 stroke-white p-0.5" />
      </div>
      <p className="text-muted-foreground text-sm">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      {showDate && (
        <p className="text-muted-foreground mt-5 text-sm">
          Posted on August 18, 2025
        </p>
      )}
    </div>
  );
};

export default ReviewCard;
