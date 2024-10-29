import React, { useState } from 'react';
import { Compass, Map, Trophy, Timer, Users, Plus, Sparkles } from 'lucide-react';
import CreateHuntModal from './components/CreateHuntModal';
import HuntCard from './components/HuntCard';
import { Hunt } from './types';

function App() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [hunts, setHunts] = useState<Hunt[]>([
    {
      id: 1,
      title: "The Lost City",
      description: "Navigate through ancient ruins to find the hidden treasure",
      startTime: new Date(Date.now() + 3600000).toISOString(),
      participants: 24,
      prize: "$500",
      difficulty: "Medium",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Pirate's Cove",
      description: "Follow the map to discover the buried chest",
      startTime: new Date().toISOString(),
      participants: 56,
      prize: "$1000",
      difficulty: "Hard",
      status: "live"
    }
  ]);

  const addHunt = (hunt: Hunt) => {
    setHunts([...hunts, { ...hunt, id: hunts.length + 1 }]);
    setIsCreateModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <nav className="bg-black/30 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Compass className="w-8 h-8 text-yellow-400" />
              <span className="text-2xl font-bold text-white">TreasureQuest</span>
            </div>
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg transition-all"
            >
              <Plus className="w-5 h-5" />
              <span>Create Hunt</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="flex items-center space-x-3 mb-6">
              <Timer className="w-6 h-6 text-green-400" />
              <h2 className="text-2xl font-bold text-white">Live Hunts</h2>
            </div>
            <div className="space-y-4">
              {hunts.filter(hunt => hunt.status === 'live').map(hunt => (
                <HuntCard key={hunt.id} hunt={hunt} />
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="flex items-center space-x-3 mb-6">
              <Map className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Upcoming Hunts</h2>
            </div>
            <div className="space-y-4">
              {hunts.filter(hunt => hunt.status === 'upcoming').map(hunt => (
                <HuntCard key={hunt.id} hunt={hunt} />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-yellow-400/20 to-orange-500/20 p-6 rounded-xl border border-yellow-500/20 backdrop-blur-sm">
            <Trophy className="w-8 h-8 text-yellow-400 mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">Biggest Prize Pool</h3>
            <p className="text-yellow-200">$5,000 in total prizes this month!</p>
          </div>
          <div className="bg-gradient-to-br from-purple-400/20 to-pink-500/20 p-6 rounded-xl border border-purple-500/20 backdrop-blur-sm">
            <Users className="w-8 h-8 text-purple-400 mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">Active Hunters</h3>
            <p className="text-purple-200">1,234 treasure hunters online</p>
          </div>
          <div className="bg-gradient-to-br from-blue-400/20 to-cyan-500/20 p-6 rounded-xl border border-blue-500/20 backdrop-blur-sm">
            <Sparkles className="w-8 h-8 text-blue-400 mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">Success Rate</h3>
            <p className="text-blue-200">72% completion rate this week</p>
          </div>
        </div>
      </main>

      <CreateHuntModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={addHunt}
      />
    </div>
  );
}

export default App;