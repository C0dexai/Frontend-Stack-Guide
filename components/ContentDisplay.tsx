
import React from 'react';
import type { Topic, ContentBlock } from '../types';

interface ContentDisplayProps {
  topic: Topic | undefined;
}

const renderContentBlock = (block: ContentBlock, index: number) => (
  <div key={index} className="mb-12">
    <h3 className="text-2xl font-semibold text-sky-400 mb-4 border-l-4 border-sky-400 pl-4">{block.heading}</h3>
    {block.text && <div className="text-slate-300 leading-relaxed whitespace-pre-wrap pl-5">{block.text}</div>}
    {block.list && (
      <ul className="list-none mt-4 space-y-3 pl-5">
        {block.list.map((item, i) => (
          <li key={i} className="flex items-start">
            <svg className="w-4 h-4 mr-3 mt-1.5 text-sky-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            <span className="text-slate-300 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    )}
    {block.subItems && (
      <div className="mt-6 space-y-6 pl-5">
        {block.subItems.map((subItem, i) => (
          <div key={i} className="bg-slate-800/40 p-4 rounded-lg ring-1 ring-slate-700/50">
            <h4 className="font-semibold text-slate-100 mb-2">{subItem.subHeading}</h4>
            <p className="text-slate-400 leading-relaxed whitespace-pre-wrap">{subItem.text}</p>
          </div>
        ))}
      </div>
    )}
  </div>
);

export const ContentDisplay: React.FC<ContentDisplayProps> = ({ topic }) => {
  if (!topic) {
    return (
      <main className="flex-1 p-8 md:p-12 overflow-y-auto flex items-center justify-center">
        <div className="text-center text-slate-500">
            <h2 className="text-2xl font-bold">Welcome!</h2>
            <p>Please select a topic from the sidebar to begin.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 p-8 md:p-12 overflow-y-auto">
      <header className="mb-12 pb-6 border-b border-slate-700">
        <h2 className="text-4xl font-bold text-white tracking-tight">{topic.title}</h2>
      </header>
      <article className="prose prose-invert max-w-none prose-p:text-slate-300 prose-headings:text-white">
        {topic.content.map(renderContentBlock)}
      </article>
    </main>
  );
};
