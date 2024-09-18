
import TrackSearchResults from '@/components/discover/TrackSearchResults';
import { useDiscoverStore } from '@/store/useDiscoverStore';
import classes from './styles.module.css';

export const DiscoverPage = () => {

    const searchQuery = useDiscoverStore(state => state.searchQuery);

    return (
        <div className={classes.discoverPage}>
            <h1>Search results for: <span>{searchQuery}</span></h1>
            <TrackSearchResults query={ searchQuery.trim() } />
        </div>
    )
}