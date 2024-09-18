import { Track } from "@/domain/entities/track.entity";
import AnalyticsService from "@/services/analytics.service";
import { create } from "zustand";

export interface DiscoverState {
    
    searchQuery: string;
    setSearchQuery: (query: string) => Promise<void>;

    selectedTrack: Track | null;
    selectTrack: (track: Track | null) => Promise<void>;

    resetState: () => void;
}

export const useDiscoverStore = create<DiscoverState>()((set) => ({

    searchQuery: '',
    selectedTrack: null,
    
    setSearchQuery: async (searchQuery: string): Promise<void> => {
        set({ searchQuery });
        
        if (searchQuery.trim().length > 0){
            await AnalyticsService.saveSearchLog(searchQuery);
        }
    },

    selectTrack: async (track: Track | null): Promise<void> => {
        set({ selectedTrack: track });

        if (track) await AnalyticsService.saveSongPlayLog(track);
    },

    resetState: () => {
        set({ 
            searchQuery: '', 
            selectedTrack: null
        })
    }

}));