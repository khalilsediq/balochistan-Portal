import React from 'react';
import { NOTICES } from '../../data/news';

export default function NoticeTickerBand() {
  const latestNotices = NOTICES.slice(0, 3);
  
  if (!latestNotices.length) return null;

  return (
    <div className="w-full bg-gov-gold text-[#1a1a1a] h-10 flex items-center overflow-hidden relative border-b border-gov-gold-light shadow-sm">
      <div className="bg-gov-gold text-black font-bold px-4 h-full flex items-center z-10 whitespace-nowrap shadow-[2px_0_5px_rgba(0,0,0,0.1)] shrink-0 text-sm tracking-wider uppercase">
        📢 Notices:
      </div>
      
      {/* Tailwind specific custom animation via class injection or standard arbitrary variants */}
      <div className="flex-1 overflow-hidden relative h-full">
        <div className="absolute whitespace-nowrap flex items-center h-full animate-[ticker_25s_linear_infinite] hover:[animation-play-state:paused]">
          {latestNotices.map((notice, i) => (
            <React.Fragment key={notice.id}>
              <a href="#" className="font-semibold text-sm hover:underline mx-8">
                {notice.title} <span className="opacity-75 bg-black/10 px-2 py-0.5 rounded text-xs ml-2">{notice.department}</span>
              </a>
              {i < latestNotices.length - 1 && <span className="text-black/30">|</span>}
            </React.Fragment>
          ))}
          {/* Duplicate for seamless loop */}
           {latestNotices.map((notice, i) => (
            <React.Fragment key={notice.id + '-dup'}>
              <a href="#" className="font-semibold text-sm hover:underline mx-8">
                {notice.title} <span className="opacity-75 bg-black/10 px-2 py-0.5 rounded text-xs ml-2">{notice.department}</span>
              </a>
              {i < latestNotices.length - 1 && <span className="text-black/30">|</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
