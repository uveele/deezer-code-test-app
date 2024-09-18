import { Track } from "@/domain/entities/track.entity";
import { DeezerResult } from "../interfaces/deezer-search-response.interface";

class TrackMapper {

    static deezerTrackToEntity(deezerTrack: DeezerResult): Track {

        const { id, title, duration, preview, album, artist } = deezerTrack;

        return {
            id,
            title,
            duration,
            preview,
            artistName: artist.name,
            albumTitle: album.title,
            cover: album.cover_big,
            coverThumbnail: album.cover,
        }

    }

}

export default TrackMapper;