import { Button } from "@/components/ui/button";
import { TeamLogo } from "@/components/ui/team-logo";
import { Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface UpcomingMatchProps {
  matchType: string;
  dateTime: string;
  homeTeam: {
    shortName: string;
    logoSrc: string;
  };
  awayTeam: {
    shortName: string;
    logoSrc: string;
  };
  venue: string;
  playersCount: number;
  className?: string;
}

export function UpcomingMatchCard({
  matchType,
  dateTime,
  homeTeam,
  awayTeam,
  venue,
  playersCount,
  className,
}: UpcomingMatchProps) {
  return (
    <div className={cn("bg-white rounded-lg p-4 border border-gray-100", className)}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-medium text-gray-500">
          {matchType} • {dateTime}
        </span>
        <div className="flex items-center gap-1 bg-red-50 px-2 py-1 rounded-md text-xs">
          <Users className="h-3 w-3 text-[#b91c1c]" />
          <span className="text-[#b91c1c] font-medium">{playersCount}k playing</span>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <TeamLogo src={homeTeam.logoSrc} alt={homeTeam.shortName} size="sm" />
          <span className="font-medium text-gray-900">{homeTeam.shortName}</span>
        </div>

        <span className="text-xs font-medium text-gray-500">vs</span>

        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-900">{awayTeam.shortName}</span>
          <TeamLogo src={awayTeam.logoSrc} alt={awayTeam.shortName} size="sm" />
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
        <span className="text-xs text-gray-500">{venue}</span>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 text-[#b91c1c] hover:bg-red-50 hover:text-[#b91c1c]"
        >
          Create Team
        </Button>
      </div>
    </div>
  );
}
