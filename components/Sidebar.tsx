
import React from 'react';
import type { Topic } from '../types';

interface SidebarProps {
  topics: Topic[];
  activeTopicId: string;
  setActiveTopicId: (id: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ topics, activeTopicId, setActiveTopicId }) => {
  return (
    <aside className="w-1/4 min-w-[280px] max-w-[350px] bg-slate-800/50 p-6 flex flex-col flex-shrink-0 h-full border-r border-slate-700/50">
      <div className="flex-grow">
        <header className="mb-10">
            <h1 className="text-xl font-bold text-white">Frontend Stack Guide</h1>
            <p className="text-sm text-slate-400">Strategic Selection Guide</p>
        </header>
        <nav>
          <ul>
            {topics.map((topic) => (
              <li key={topic.id} className="mb-2">
                <button
                  onClick={() => setActiveTopicId(topic.id)}
                  className={`w-full text-left flex items-center p-3 rounded-lg transition-colors duration-200 ${
                    activeTopicId === topic.id
                      ? 'bg-sky-500/20 text-sky-300'
                      : 'text-slate-400 hover:bg-slate-700/50 hover:text-slate-200'
                  }`}
                >
                  <div className="mr-4 text-sky-400">{topic.icon}</div>
                  <span className="font-medium text-sm">{topic.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <footer className="mt-auto pt-6 text-center text-xs text-slate-500">
        <p>Powered by Gemini & React</p>
        <p>&copy; {new Date().getFullYear()} AI Engineer</p>
      </footer>
    </aside>
  );
};
