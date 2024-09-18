import volumeIcon from '@/assets/icons/volume.svg';
import ProgressBar from '@/components/common/ProgressBar';
import classes from './styles.module.css';

interface PlayerVolumeProgressProps {
    volume: number;
    onChange: (value: number) => void;
}

const VOLUME_MAX_FACTOR = 100;

const PlayerVolumeProgress = (props: PlayerVolumeProgressProps) => {

    const { 
        volume, 
        onChange
    } = props;

    const convertedValue = volume * VOLUME_MAX_FACTOR; // volume is between 0 and 1

    return (
        <div className={ classes.volumeProgress }>
            <img src={ volumeIcon } alt='volume icon' />
            <div className={ classes.rangeWrapper }>
                <ProgressBar 
                    min={ 0 }
                    max={ VOLUME_MAX_FACTOR }
                    value={ convertedValue } 
                    onChange={ (e) => onChange(e.currentTarget.valueAsNumber / VOLUME_MAX_FACTOR) }
                    step={ 0.2 }
                />
            </div>
        </div>
    )

}

export default PlayerVolumeProgress