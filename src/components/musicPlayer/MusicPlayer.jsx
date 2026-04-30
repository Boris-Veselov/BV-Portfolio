import { useState, useEffect, useRef, useCallback } from 'react';
import './musicPlayer.scss';

const API_URL =
  'https://api.jamendo.com/v3.0/tracks/?client_id=8b124fc9&format=json' +
  '&tags=techno&audioformat=mp32&limit=20&order=popularity_total';

export default function MusicPlayer() {
  const [tracks, setTracks]       = useState([]);
  const [trackIdx, setTrackIdx]   = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [loading, setLoading]     = useState(true);

  const audioRef      = useRef(new Audio());
  const isPlayingRef  = useRef(false);
  const trackIdxRef   = useRef(0);
  const tracksRef     = useRef([]);

  useEffect(() => { isPlayingRef.current = isPlaying; }, [isPlaying]);
  useEffect(() => { trackIdxRef.current  = trackIdx;  }, [trackIdx]);
  useEffect(() => { tracksRef.current    = tracks;    }, [tracks]);

  useEffect(() => {
    fetch(API_URL)
      .then(r => r.json())
      .then(data => { setTracks(data.results); setLoading(false); })
      .catch(() => setLoading(false));

    const audio = audioRef.current;
    return () => { audio.pause(); };
  }, []);

  const goTo = useCallback((idx) => {
    const t = tracksRef.current;
    if (!t.length) return;
    const next = (idx + t.length) % t.length;
    trackIdxRef.current = next;
    setTrackIdx(next);
    audioRef.current.src = t[next].audio;
    if (isPlayingRef.current) audioRef.current.play();
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    const onEnded = () => goTo(trackIdxRef.current + 1);
    audio.addEventListener('ended', onEnded);
    return () => audio.removeEventListener('ended', onEnded);
  }, [goTo]);

  useEffect(() => {
    if (!tracks.length) return;
    audioRef.current.src = tracks[0].audio;
  }, [tracks]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const current = tracks[trackIdx];

  return (
    <div className={`musicPlayer${isMinimized ? ' minimized' : ''}`}>
      {!isMinimized && (
        <div className='playerInfo'>
          <div className='trackName'>
            {loading ? 'Loading...' : current?.name ?? '—'}
          </div>
          <div className='trackBpm'>
            {!loading && current?.artist_name}
          </div>
          <div className='visualizer'>
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`bar${isPlaying ? ' active' : ''}`}
                style={{ animationDelay: `${i * 0.09}s` }} />
            ))}
          </div>
        </div>
      )}
      <div className='playerControls'>
        {!isMinimized && (
          <button className='prevBtn' onClick={() => goTo(trackIdx - 1)} title='Previous'>◀◀</button>
        )}
        <button className='playBtn' onClick={togglePlay} disabled={loading} title={isPlaying ? 'Pause' : 'Play'}>
          {isPlaying ? '⏸' : '▶'}
        </button>
        {!isMinimized && (
          <button className='nextBtn' onClick={() => goTo(trackIdx + 1)} title='Next'>▶▶</button>
        )}
        <button className='toggleBtn' onClick={() => setIsMinimized(!isMinimized)} title={isMinimized ? 'Expand' : 'Minimize'}>
          {isMinimized ? '♫' : '−'}
        </button>
      </div>
    </div>
  );
}
