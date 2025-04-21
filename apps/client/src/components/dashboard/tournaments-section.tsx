import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { TournamentCard } from "@/components/dashboard/tournament-card";
import { Trophy, Plus, LogIn } from "lucide-react";
import { cn } from "@/lib/utils";

interface Tournament {
  id: string;
  name: string;
  teamsCount: number;
  timeRemaining: string;
  status: "active" | "upcoming" | "completed";
  position?: number;
}

interface TournamentsSectionProps {
  tournaments: Tournament[];
  className?: string;
}

export function TournamentsSection({ tournaments, className }: TournamentsSectionProps) {
  const hasTournaments = tournaments.length > 0;

  return (
    <div className={cn("space-y-8", className)}>
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <SectionHeader title="Your Tournaments" viewAllLink="/tournaments" />

        {hasTournaments ? (
          <div className="space-y-4">
            {tournaments.map((tournament) => (
              <TournamentCard
                key={tournament.id}
                name={tournament.name}
                teamsCount={tournament.teamsCount}
                timeRemaining={tournament.timeRemaining}
                status={tournament.status}
                position={tournament.position}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="mx-auto w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
              <Trophy className="h-8 w-8 text-[#b91c1c]" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Tournaments Yet</h3>
            <p className="text-sm text-gray-600 mb-4">Join or create a tournament to get started</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button className="bg-[#b91c1c] hover:bg-[#a11818] text-white h-12 flex items-center justify-center gap-2">
          <Plus className="h-5 w-5" />
          Create Tournament
        </Button>
        <Button
          variant="outline"
          className="border-[#b91c1c] text-[#b91c1c] hover:bg-[#b91c1c]/10 h-12 flex items-center justify-center gap-2"
        >
          <LogIn className="h-5 w-5" />
          Join Tournament
        </Button>
      </div>
    </div>
  );
}
