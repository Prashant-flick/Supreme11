import { SectionHeader } from "@/components/ui/section-header";
import { UpcomingMatchCard } from "@/components/dashboard/upcoming-match-card";
import { cn } from "@/lib/utils";

interface UpcomingMatch {
  id: string;
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
}

interface UpcomingMatchesSectionProps {
  matches: UpcomingMatch[];
  className?: string;
}

export function UpcomingMatchesSection({ matches, className }: UpcomingMatchesSectionProps) {
  return (
    <div className={cn("bg-white rounded-xl border border-gray-100 shadow-sm p-6", className)}>
      <SectionHeader title="Upcoming Matches" viewAllLink="/matches" />

      <div className="space-y-4">
        {matches.map((match) => (
          <UpcomingMatchCard
            key={match.id}
            matchType={match.matchType}
            dateTime={match.dateTime}
            homeTeam={match.homeTeam}
            awayTeam={match.awayTeam}
            venue={match.venue}
            playersCount={match.playersCount}
          />
        ))}
      </div>
    </div>
  );
}
