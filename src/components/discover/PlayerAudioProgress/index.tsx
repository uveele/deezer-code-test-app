import pauseIcon from '@/assets/icons/pause.svg';
import playIcon from '@/assets/icons/play.svg';
import TimeUtils from '@/utils/time.utils';
import ProgressBar from '@/components/common/ProgressBar';
import classes from './styles.module.css';

interface PlayerAudioProgressProps {
    duration: number;
    progress: number;
    onTogglePlaying: () => void;
    onChange: (value: number) => void;
    isPlaying: boolean;
}

const PlayerAudioProgress = (props: PlayerAudioProgressProps) => {

    const { 
        duration, 
        progress, 
        onChange, 
        onTogglePlaying,
        isPlaying 
    } = props;
    
    const max = 100;
    const progressValue = duration > 0 ? (progress * max / duration) : 0;

    const handleChange = (value: number) => {
        onChange(value * duration / max);
    }
    
    return (
        <div className={ classes.playerProgress }>
            <button 
                type='button'
                className={ classes.buttonPlay }
                onClick={ onTogglePlaying }
            >
                {
                    isPlaying
                    ? (<img src={ pauseIcon } alt='pause song' />)
                    : (<img src={ playIcon } alt='play song' />)
                }
            </button>
            <div className={ classes.progressWrapper }>
                <div>{ TimeUtils.formatDuration(progress) }</div>
                <div className={ classes.rangeWrapper }>
                    <ProgressBar 
                        max={ max }
                        value={ progressValue } 
                        onChange={ (e) => handleChange(e.currentTarget.valueAsNumber) }
                        step={ 0.1 }
                    />
                </div>
                <div>{ TimeUtils.formatDuration(duration) }</div>
            </div>
        </div>
    )

}

export default PlayerAudioProgress