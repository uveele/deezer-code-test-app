import { 
    DEEZER_DEFAULT_API_PARAMS, 
    DEEZER_DEFAULT_SEARCH_TYPE, 
    VITE_DEEZER_API_URL 
} from "@/config/constants";
import { Track } from "@/domain/entities/track.entity";
import { DeezerSearchResponse, FetchParams } from "@/infrastructure/interfaces";
import TrackMapper from "@/infrastructure/mappers/track.mapper";

interface QueryParams {
    query: string;
    page: number;
}

interface TracksPagination {
    data: Track[];
    hasNextPage: boolean;
}

const ITEMS_PER_PAGE = 24;

class TracksService {

    static async findTracks(
        queryParams: QueryParams, 
        fetchParams?: FetchParams
    ): Promise<TracksPagination>{

        const _fetchParams = { ...DEEZER_DEFAULT_API_PARAMS, ...fetchParams };
        const { query, page } = queryParams;
        const offset = (page-1)*ITEMS_PER_PAGE;
        const url = `${VITE_DEEZER_API_URL}/search?q=${query}&index=${offset}&limit=${ITEMS_PER_PAGE}`;
    
        const response = await fetch(url, _fetchParams);
        const results = await response.json() as DeezerSearchResponse;
        const tracks = results.data.filter(result => result.type === DEEZER_DEFAULT_SEARCH_TYPE);
    
        return {
            data: tracks.map( TrackMapper.deezerTrackToEntity ),
            hasNextPage: !!results.next
        }

    }

}

export default TracksService;