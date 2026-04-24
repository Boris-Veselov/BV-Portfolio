import { useState, useEffect, useRef, useCallback } from 'react';
import './musicPlayer.scss';

const BPM = 140;
const STEPS = 16;
const secondsPerStep = (60.0 / BPM) / 4;

const kickPat  = [1,0,0,0, 1,0,0,0, 1,0,0,0, 1,0,0,0];
const snarePat = [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0];
const hihatPat = [0,1,0,1, 0,1,0,1, 0,1,0,1, 0,1,0,1];
const bassPat  = [0,-1,-1,-1, 7,-1,-1,-1, 5,-1,-1,-1, 3,-1,5,-1];

function playKick(ctx, time) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.type = 'sine';
  osc.frequency.setValueAtTime(160, time);
  osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.35);
  gain.gain.setValueAtTime(1.8, time);
  gain.gain.exponentialRampToValueAtTime(0.001, time + 0.35);
  osc.start(time);
  osc.stop(time + 0.35);
}

function playSnare(ctx, time) {
  const bufSize = ctx.sampleRate * 0.08;
  const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < bufSize; i++) data[i] = Math.random() * 2 - 1;
  const src = ctx.createBufferSource();
  src.buffer = buf;
  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = 2200;
  filter.Q.value = 0.8;
  const gain = ctx.createGain();
  src.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  gain.gain.setValueAtTime(0.9, time);
  gain.gain.exponentialRampToValueAtTime(0.001, time + 0.08);
  src.start(time);
  src.stop(time + 0.1);
}

function playHihat(ctx, time) {
  const bufSize = ctx.sampleRate * 0.03;
  const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < bufSize; i++) data[i] = Math.random() * 2 - 1;
  const src = ctx.createBufferSource();
  src.buffer = buf;
  const filter = ctx.createBiquadFilter();
  filter.type = 'highpass';
  filter.frequency.value = 9000;
  const gain = ctx.createGain();
  src.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  gain.gain.setValueAtTime(0.25, time);
  gain.gain.exponentialRampToValueAtTime(0.001, time + 0.03);
  src.start(time);
  src.stop(time + 0.04);
}

function playBass(ctx, time, semi) {
  const baseFreq = 110 * Math.pow(2, semi / 12);
  const osc = ctx.createOscillator();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();
  osc.type = 'sawtooth';
  osc.frequency.value = baseFreq;
  filter.type = 'lowpass';
  filter.frequency.value = 300;
  filter.Q.value = 2;
  osc.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  gain.gain.setValueAtTime(0.6, time);
  gain.gain.exponentialRampToValueAtTime(0.001, time + secondsPerStep * 0.9);
  osc.start(time);
  osc.stop(time + secondsPerStep);
}

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const audioCtxRef = useRef(null);
  const nextNoteRef = useRef(0);
  const stepRef = useRef(0);
  const intervalRef = useRef(null);

  const schedule = useCallback(() => {
    const ctx = audioCtxRef.current;
    if (!ctx) return;
    while (nextNoteRef.current < ctx.currentTime + 0.08) {
      const t = nextNoteRef.current;
      const step = stepRef.current % STEPS;
      if (kickPat[step])       playKick(ctx, t);
      if (snarePat[step])      playSnare(ctx, t);
      if (hihatPat[step])      playHihat(ctx, t);
      if (bassPat[step] >= 0)  playBass(ctx, t, bassPat[step]);
      nextNoteRef.current += secondsPerStep;
      stepRef.current++;
    }
  }, []);

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
      audioCtxRef.current?.close();
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      clearInterval(intervalRef.current);
      audioCtxRef.current?.suspend();
      setIsPlaying(false);
    } else {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      } else {
        audioCtxRef.current.resume();
      }
      nextNoteRef.current = audioCtxRef.current.currentTime + 0.05;
      stepRef.current = 0;
      intervalRef.current = setInterval(schedule, 20);
      setIsPlaying(true);
    }
  };

  return (
    <div className={`musicPlayer${isMinimized ? ' minimized' : ''}`}>
      {!isMinimized && (
        <div className='playerInfo'>
          <div className='trackName'>Techno Sequence</div>
          <div className='trackBpm'>140 BPM</div>
          <div className='visualizer'>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`bar${isPlaying ? ' active' : ''}`}
                style={{ animationDelay: `${i * 0.09}s` }}
              />
            ))}
          </div>
        </div>
      )}
      <div className='playerControls'>
        <button className='playBtn' onClick={togglePlay} title={isPlaying ? 'Pause' : 'Play'}>
          {isPlaying ? '⏸' : '▶'}
        </button>
        <button className='toggleBtn' onClick={() => setIsMinimized(!isMinimized)} title={isMinimized ? 'Expand' : 'Minimize'}>
          {isMinimized ? '♫' : '−'}
        </button>
      </div>
    </div>
  );
}
