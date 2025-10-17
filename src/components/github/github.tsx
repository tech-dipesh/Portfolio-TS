import { useEffect, useState } from "react";
import { Github, Users, BookOpen, TrendingUp, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Contribution = {
  date: string;
  count: number;
  level: number;
};

type GitHubStats = {
  name: string;
  publicRepos: number;
  followers: number;
  following: number;
  totalContributions: number;
  avatar: string;
  bio: string | null;
};

// type ContributionDay = {
//   contributionCount: number;
//   date: string;
// };

// type ContributionWeek = {
//   contributionDays: ContributionDay[];
// };

const GitHubContributions = () => {
  const username = "tech-dipesh";
  const [contributions, setContributions]= useState<Contribution[]>([]);
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        
        const token = import.meta.env.VITE_GITHUB_TOKEN;
        
        if (!token) {
          throw new Error("GitHub token not found. Please add VITE_GITHUB_TOKEN to your .env file");
        }
        
        // GraphQL query for contributions
        const query = `
          query($username: String!) {
            user(login: $username) {
              name
              bio
              avatarUrl
              repositories {
                totalCount
              }
              followers {
                totalCount
              }
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                    }
                  }
                }
              }
            }
          }
        `;
        
        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query,
            variables: { username }
          })
        });
        
        const data = await response.json();
        
        if (data.errors) {
          throw new Error(data.errors[0].message);
        }
        
        const user = data.data.user;
        const calendar = user.contributionsCollection.contributionCalendar;
        
        // Transform the data
        const contributionsArray: Contribution[] = [];
        calendar.weeks.forEach((week: any) => {
          week.contributionDays.forEach((day: any) => {
            contributionsArray.push({
              date: day.date,
              count: day.contributionCount,
              level: day.contributionCount === 0 ? 0 : Math.min(Math.floor(day.contributionCount / 3) + 1, 4)
            });
          });
        });
        
        setContributions(contributionsArray);
        setStats({
          name: user.name || username,
          publicRepos: user.repositories.totalCount,
          followers: user.followers.totalCount,
          following: 0,
          totalContributions: calendar.totalContributions,
          avatar: user.avatarUrl,
          bio: user.bio
        });
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch GitHub data");
        setLoading(false);
        console.error(err);
      }
    };

    fetchGitHubData();
  }, []);

  const getColor = (count: number): string => {
    if (count === 0) return "bg-[#212154]";
    if (count < 3) return "bg-[#3498db] opacity-40";
    if (count < 6) return "bg-[#3498db] opacity-60";
    if (count < 9) return "bg-[#3498db] opacity-80";
    return "bg-[#3498db]";
  };

  const getWeeks = (): (Contribution | null)[][] => {
    const weeks: (Contribution | null)[][] = [];
    let week: (Contribution | null)[] = [];
    
    contributions.forEach((day, index) => {
      const date = new Date(day.date);
      const dayOfWeek = date.getDay();
      
      if (index === 0 && dayOfWeek !== 0) {
        for (let i = 0; i < dayOfWeek; i++) {
          week.push(null);
        }
      }
      
      week.push(day);
      
      if (dayOfWeek === 6 || index === contributions.length - 1) {
        weeks.push(week);
        week = [];
      }
    });
    
    return weeks;
  };

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  if (loading) {
    return (
      <main className="w-full min-h-screen">
        <div className="w-full p-10">
          <div className="w-full max-w-7xl mx-auto bg-[#30339d] p-8 rounded-xl">
            <div className="flex items-center justify-center py-20">
              <div className="text-white text-lg">Loading GitHub contributions...</div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="w-full min-h-screen">
        <div className="w-full p-10">
          <div className="w-full max-w-7xl mx-auto bg-[#30339d] p-8 rounded-xl">
            <div className="flex items-center justify-center py-20">
              <div className="text-red-400 text-lg">{error}</div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const weeks = getWeeks();

  return (
    <main className="w-full min-h-screen">
      <div className="w-full p-10">
        <div className="w-full max-w-7xl mx-auto bg-[#30339d] p-8 rounded-xl">
          <div className="flex items-start gap-6 mb-8">
            {stats?.avatar && (
              <img 
                src={stats.avatar} 
                alt={stats.name}
                className="w-20 h-20 rounded-full border-2 border-[#8a2be2]"
              />
            )}
            <div>
              <h2 className="text-4xl font-bold text-[#8a2be2] mb-2">GitHub Activity</h2>
              <p className="text-white mb-2">{stats?.name}</p>
              {stats?.bio && <p className="text-gray-300 text-sm mb-4">{stats.bio}</p>}
              
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 bg-[#212154] px-4 py-2 rounded-lg border border-[#3498db]">
                  <TrendingUp className="h-4 w-4 text-[#3498db]" />
                  <span className="text-white">
                    <span className="font-bold text-[#8a2be2]">{stats?.totalContributions}</span> contributions
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-[#212154] px-4 py-2 rounded-lg border border-[#3498db]">
                  <BookOpen className="h-4 w-4 text-[#3498db]" />
                  <span className="text-white">
                    <span className="font-bold text-[#8a2be2]">{stats?.publicRepos}</span> repositories
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-[#212154] px-4 py-2 rounded-lg border border-[#3498db]">
                  <Users className="h-4 w-4 text-[#3498db]" />
                  <span className="text-white">
                    <span className="font-bold text-[#8a2be2]">{stats?.followers}</span> followers
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#212154] p-6 rounded-lg border border-[#3498db]">
            <div className="flex items-center gap-2 mb-4">
              <Github className="h-5 w-5 text-[#8a2be2]" />
              <h3 className="text-xl font-semibold text-white">
                {stats?.totalContributions} contributions in the last year
              </h3>
            </div>

            <div className="overflow-x-auto">
              <div className="inline-block min-w-full">
                <div className="flex mb-2 ml-8">
                  {weeks.map((week, weekIndex) => {
                    const firstDay = week.find((day): day is Contribution => day !== null);
                    if (firstDay) {
                      const date = new Date(firstDay.date);
                      const isFirstWeekOfMonth = date.getDate() <= 7;
                      const month = months[date.getMonth()];
                      
                      if (isFirstWeekOfMonth && (weekIndex === 0 || date.getDate() <= 7)) {
                        return (
                          <div key={weekIndex} className="text-xs text-gray-400 w-3" style={{ marginLeft: weekIndex === 0 ? 0 : '9px' }}>
                            {month}
                          </div>
                        );
                      }
                    }
                    return <div key={weekIndex} className="w-3 ml-3" />;
                  })}
                </div>

                <div className="flex gap-1">
                  <div className="flex flex-col gap-1 mr-2 text-xs text-gray-400">
                    {days.map((day, i) => (
                      <div key={day} className="h-3 flex items-center" style={{ opacity: i % 2 === 0 ? 1 : 0 }}>
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-1">
                    {weeks.map((week, weekIndex) => (
                      <div key={weekIndex} className="flex flex-col gap-1">
                        {[0, 1, 2, 3, 4, 5, 6].map(dayIndex => {
                          const day = week[dayIndex];
                          return (
                            <div
                              key={dayIndex}
                              className={`w-3 h-3 rounded-sm transition-all hover:scale-110 ${day ? getColor(day.count) : 'bg-transparent'}`}
                              title={day ? `${day.date}: ${day.count} contributions` : ''}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 mt-4 text-xs text-gray-400">
                  <span>Less</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-sm bg-[#212154]" />
                    <div className="w-3 h-3 rounded-sm bg-[#3498db] opacity-40" />
                    <div className="w-3 h-3 rounded-sm bg-[#3498db] opacity-60" />
                    <div className="w-3 h-3 rounded-sm bg-[#3498db] opacity-80" />
                    <div className="w-3 h-3 rounded-sm bg-[#3498db]" />
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="flex items-center text-white hover:text-[#3498db] transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GitHubContributions;