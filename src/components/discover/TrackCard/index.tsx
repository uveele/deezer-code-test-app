import { Track } from '@/domain/entities/track.entity'
import classes from './styles.module.css';
import playButton from '@/assets/card-play-button.svg';
import { memo } from 'react';

interface TrackCardProps {
    track: Track;
    onSelect: () => void;
}

const TrackCard = ({ track, onSelect }: TrackCardProps) => {

  return (
    <button 
        type="button" 
        className={ classes.trackBtn }
        onClick={ onSelect }
    >
        <img 
            className={ classes.cover }
            src={ track.cover } 
            alt={`${ track.artistName } - ${ track.title } song button`}
        />

        <span className={ classes.infoWrapper }>
            <span className={ classes.infoTitle }>{ track.title }</span>
            <span>{ track.artistName }</span>
            <span>{ track.albumTitle }</span>
        </span>

        <span className={ classes.overlay }>

            <img 
                className={ classes.imgPlay }
                src={ playButton }
                alt={`${ track.artistName } - ${ track.title } play button`}
            />
            
        </span>
    </button>
  )

}

export default memo(TrackCard)