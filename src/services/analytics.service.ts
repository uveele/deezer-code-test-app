import { VITE_BACKEND_URL } from "@/config/constants";
import { Track } from "@/domain/entities/track.entity";
import { ApiSearchLogDtoResponse, ApiSongPlayLogDtoResponse } from "@/infrastructure/interfaces";

const DEFAULT_BACKEND_FETCH_PARAMS = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
}

class AnalyticsService {

    static async saveSearchLog(query: string): Promise<void> {

        try {

            const url = `${VITE_BACKEND_URL}/search/`;

            const response = await fetch(url, {
                ...DEFAULT_BACKEND_FETCH_PARAMS,
                method: 'POST',
                body: JSON.stringify({ query })
            });
    
            await response.json() as ApiSearchLogDtoResponse;

        } catch {

            console.log(`[AnalyticsService] - Error executing saveSearchLog with params "${JSON.stringify({ query })}"`);

        }

    }

    static async saveSongPlayLog(track: Track): Promise<void> {

        const url = `${VITE_BACKEND_URL}/songplay/`;
        const body = {
            song_id: String(track.id),
            title: track.title,
            artist_name: track.artistName,
            album_title: track.albumTitle
        }

        try {

            const response = await fetch(url, {
                ...DEFAULT_BACKEND_FETCH_PARAMS,
                method: 'POST',
                body: JSON.stringify(body)
            });
    
            await response.json() as ApiSongPlayLogDtoResponse;

        } catch {

            console.log(`[AnalyticsService] - Error executing saveSongPlayLog with params "${JSON.stringify(body)}"`);

        }

    }

}

export default AnalyticsService;