import { useSearchTracks } from "@/hooks/useSearchTracks";
import { useDiscoverStore } from "@/store/useDiscoverStore";
import List from "@/components/common/List";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import TrackCard from "../TrackCard";
import Player from "../Player";

import classes from './styles.module.css';
import TracksSkeleton from "../TracksSkeleton";

interface TrackSearchResultsProps {
    query: string;
}

const TrackSearchResults = ({ query }: TrackSearchResultsProps) => {

    const selectTrack = useDiscoverStore(state => state.selectTrack);
    const { data, isLoading, fetchNextPage } = useSearchTracks(query);
    const { targetRef } = useInfiniteScroll({ callbackFn: fetchNextPage });
    
    return (
        <>
            { 
                data && 
                (
                    <>
                        <List
                            extractKey={(track) => String(track.id) }
                            items={ data }
                            className={ classes.trackList }
                            renderItem={(track) => (
                                <TrackCard 
                                    track={ track } 
                                    onSelect={ () => selectTrack(track) }
                                />
                            )}
                        />
                        <Player />
                    </>
                )
            }
            { isLoading && <TracksSkeleton /> }
            <div ref={ targetRef } className={classes.bottom} />
        </>
        
    )
}

export default TrackSearchResults