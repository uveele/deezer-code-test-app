import { useCallback, useEffect, useRef, useState } from 'react';
import { Track } from "@/domain/entities/track.entity";
import { useDiscoverStore } from '@/store/useDiscoverStore';
import TracksService from '../services/track.service';

export const useSearchTracks = (query: string) => {
    
    const selectTrack = useDiscoverStore(state => state.selectTrack)
    const [data, setData] = useState<Track[] | undefined>();
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(0);
    const hasNextPageRef = useRef(false);
    const pageRef = useRef(0);
    const queryRef = useRef('');

    useEffect(() => {
        queryRef.current = query;
        pageRef.current = 1;
        selectTrack(null);
        setPage(1);
    }, [query, selectTrack]);

    useEffect(() => {

        async function loadData(){

            try {

                setIsLoading(true);

                if (pageRef.current === 1){
                    setData(undefined);
                }
                
                const pagination = await TracksService.findTracks({ 
                    query: queryRef.current, 
                    page: pageRef.current 
                });
                const tracks = pagination.data;
    
                hasNextPageRef.current = pagination.hasNextPage;
                if (pageRef.current === 1){
                    setData(tracks);
                } else {
                    setData(prevTracks => [...prevTracks ?? [], ...tracks]);
                }

            } catch {

                if (pageRef.current === 1){
                    setData([]);
                }

            } finally {
                setIsLoading(false);
            }


        }

        if (query.trim().length < 1) return;
        if (pageRef.current < 1) return;
        if (page !== pageRef.current) return;
        if (query !== queryRef.current) return;
        
        setTimeout(() => {
            loadData();
        }, 200)

    }, [query, page]);

    const fetchNextPage = useCallback(() => {
        
        if (!hasNextPageRef.current) return;
        pageRef.current += 1;
        setPage(prev => prev + 1);

    }, []);

    // if (isLoading) {
    //     throw new Promise((resolve) => setTimeout(resolve, 2000));
    // }

    return {
        data,
        isLoading,
        page,
        fetchNextPage
    };

}