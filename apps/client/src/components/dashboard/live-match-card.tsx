import { Button } from "@/components/ui/button";
import { LiveIndicator } from "@/components/ui/live-indicator";
import { TeamLogo } from "@/components/ui/team-logo";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

interface TeamInfo {
  name: string;
  shortName: string;
  logoSrc: string;
  score: string;
}

interface LiveMatchCardProps {
  homeTeam: TeamInfo;
  awayTeam: TeamInfo;
  matchType: string;
  currentOver: string;
  target?: number;
  statusText: string;
  className?: string;
}

export function LiveMatchCard({
  homeTeam,
  awayTeam,
  matchType,
  currentOver,
  target,
  statusText,
  className,
}: LiveMatchCardProps) {
  return (
    <div className={cn("bg-white rounded-xl border border-gray-100 shadow-sm p-6", className)}>
      <SectionHeader title="Live Score" rightContent={<LiveIndicator />} />

      <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-gray-700">{matchType}</span>
          <span className="text-sm text-gray-500">{currentOver}</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <TeamLogo src={homeTeam.logoSrc} alt={homeTeam.name} />
            <div>
              <h3 className="font-bold text-gray-900">{homeTeam.name}</h3>
              <p className="text-sm font-medium text-gray-700">{homeTeam.score}</p>
            </div>
          </div>

          {target && (
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-1">Target</div>
              <div className="text-lg font-bold text-[#b91c1c]">{target}</div>
            </div>
          )}

          <div className="flex items-center gap-3">
            <div>
              <h3 className="font-bold text-gray-900 text-right">{awayTeam.name}</h3>
              <p className="text-sm font-medium text-gray-700 text-right">{awayTeam.score}</p>
            </div>
            <TeamLogo src={awayTeam.logoSrc} alt={awayTeam.name} />
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-red-200">
          <p className="text-sm text-gray-600">{statusText}</p>
        </div>
      </div>

      <div className="mt-4">
        <Button
          variant="outline"
          className="w-full border-[#b91c1c] text-[#b91c1c] hover:bg-[#b91c1c]/10"
        >
          View Full Scorecard
        </Button>
      </div>
    </div>
  );
}
