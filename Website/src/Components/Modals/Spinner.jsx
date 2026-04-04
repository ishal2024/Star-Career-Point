import { Loader2 } from "lucide-react";

export default function PageSpinner({bgColor = "bg-white"}) {
  return (
    <div className={`min-h-[30vh] w-full flex items-center justify-center ${bgColor} dark:bg-zinc-950`}>
      
      
        {/* Spinner */}
        <Loader2 className="h-12 w-12 animate-spin text-red-500" />
    

    </div>
  );
}