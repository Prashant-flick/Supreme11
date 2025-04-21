import { Trophy, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface TournamentCardProps {
  name: string;
  teamsCount: number;
  timeRemaining: string;
  status: "active" | "upcoming" | "completed";
  position?: number;
  className?: string;
}

export function TournamentCard({
  name,
  teamsCount,
  timeRemaining,
  status,
  position,
  className,
}: TournamentCardProps) {
  const isActive = status === "active";
  const isUpcoming = status === "upcoming";

  return (
    <div
      className={cn(
        "rounded-lg p-4 border",
        isActive ? "bg-red-50 border-red-100" : "bg-white border-gray-100",
        className
      )}
    >
      <div className="flex justify-between">
        <div>
          <h3 className="font-medium text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">
            {teamsCount} teams • {timeRemaining}
          </p>
        </div>

        {isUpcoming ? (
          <div className="flex items-center gap-1 bg-red-50 px-2 py-1 rounded-md text-sm">
            <Calendar className="h-4 w-4 text-[#b91c1c]" />
            <span className="text-gray-900 font-medium">Upcoming</span>
          </div>
        ) : position ? (
          <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-md text-sm">
            <Trophy className="h-4 w-4 text-[#b91c1c]" />
            <span className="text-gray-900 font-medium">{position}nd</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
