
import React, { useState, useMemo } from 'react';
import { Sidebar } from './components/Sidebar';
import { ContentDisplay } from './components/ContentDisplay';
import { TOPICS } from './constants';
import type { Topic } from './types';

function App() {
  const [activeTopicId, setActiveTopicId] = useState<string>(TOPICS[0].id);

  const activeTopic = useMemo(
    () => TOPICS.find((topic) => topic.id === activeTopicId),
    [activeTopicId]
  );

  return (
    <div className="flex h-screen w-full bg-slate-900 font-sans">
      <Sidebar 
        topics={TOPICS} 
        activeTopicId={activeTopicId}
        setActiveTopicId={setActiveTopicId} 
      />
      <ContentDisplay topic={activeTopic} />
    </div>
  );
}

export default App;
