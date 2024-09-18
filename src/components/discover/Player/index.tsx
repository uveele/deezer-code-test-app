import { useEffect, useRef, useState } from 'react';
import { useDiscoverStore } from '@/store/useDiscoverStore';
import classes from './styles.module.css';

import StringUtils from '@/utils/string.utils';
import PlayerAudioProgress from '../PlayerAudioProgress';
import PlayerVolumeProgress from '../PlayerVolumeProgress';

const Player = () => {

    const track = useDiscoverStore(state => state.selectedTrack);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentProgress, setCurrentProgress] = useState(0);
    const [volume, setVolume] = useState(0.2);
    const [duration, setDuration] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    const togglePlaying = () => {
        if (isPlaying){
            audioRef.current?.pause();
        } else {
            audioRef.current?.play();
        }
    }

    useEffect(() => {

        if (!track){
            setIsVisible(false);
            return;
        }

        if (audioRef.current){
            audioRef.current?.pause();

            if (track){
                audioRef.current.src = track?.preview;
            }
        }

        const timeout = setTimeout(() => {
            setIsVisible(true);
            if (audioRef.current && track){
                audioRef.current.currentTime = 0;
                audioRef.current.play();
            }
        }, 200);

        return () => {
            clearTimeout(timeout);
        }

    }, [track]);

    const handleChangeProgress = (value: number) => {
        
        if (!audioRef.current) return;
        audioRef.current.currentTime = value;

    }

    const handleChangeVolume = (value: number) => {
        
        if (!audioRef.current) return;
        audioRef.current.volume = value;
        // setVolume(value);

      };

    return (
        <>
            <div ref={ ref } className={`${classes.playerContainer} ${isVisible ? classes.playerVisible : classes.playerHidden}`}>
                <div className={ classes.player }>
                    {
                        track && 
                        (
                            <div className={ classes.playerInfo }>
                                <img 
                                    src={ track.coverThumbnail } 
                                    alt={`${ track.artistName } - ${ track.title } cover`} 
                                />
                                <div>
                                    <span>{ StringUtils.truncate(track.title, 32) }</span>
                                    <span>{ StringUtils.truncate(track.artistName, 20) }</span>
                                </div>
                            </div>
                        )
                    }
                    <PlayerAudioProgress 
                        isPlaying={ isPlaying }
                        duration={ duration }
                        progress={ currentProgress }
                        onChange={ handleChangeProgress }
                        onTogglePlaying={ togglePlaying }
                    />
                    <PlayerVolumeProgress 
                        volume={volume} 
                        onChange={handleChangeVolume }
                    />
                </div>    
            </div>
            <audio 
                ref={audioRef} 
                preload="metadata"
                onPlaying={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onTimeUpdate={(e) => setCurrentProgress(e.currentTarget.currentTime)}
                onDurationChange={(e) => setDuration(e.currentTarget.duration)}
                onVolumeChange={(e) => setVolume(e.currentTarget.volume)}
            >
                {
                    track && 
                    <source type="audio/mpeg" src={track.preview} />
                }
            </audio>
        </>
  )
}

export default Player