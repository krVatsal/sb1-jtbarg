import React from 'react';
import { Calendar, Users, Award } from 'lucide-react';
import { Hunt } from '../types';

interface HuntCardProps {
  hunt: Hunt;
}

export default function HuntCard({ hunt }: HuntCardProps) {
  const isLive = hunt.status === 'live';
  const startTime = new Date(hunt.startTime);

  return (
    <div className="bg-white/10 hover:bg-white/15 transition-all rounded-xl p-6 border border-white/10">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{hunt.title}</h3>
          <p className="text-gray-300 text-sm">{hunt.description}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          isLive ? 'bg-green-500/20 text-green-300' : 'bg-blue-500/20 text-blue-300'
        }`}>
          {isLive ? 'Live Now' : 'Upcoming'}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-300">
            {startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Users className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-300">{hunt.participants} joined</span>
        </div>
        <div className="flex items-center space-x-2">
          <Award className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-300">{hunt.prize}</span>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <span className={`text-sm font-medium ${
          hunt.difficulty === 'Easy' ? 'text-green-400' :
          hunt.difficulty === 'Medium' ? 'text-yellow-400' :
          'text-red-400'
        }`}>
          {hunt.difficulty}
        </span>
        <button className={`px-4 py-2 rounded-lg font-semibold transition-all ${
          isLive
            ? 'bg-green-500 hover:bg-green-400 text-black'
            : 'bg-blue-500 hover:bg-blue-400 text-black'
        }`}>
          {isLive ? 'Join Hunt' : 'Register'}
        </button>
      </div>
    </div>
  );
}