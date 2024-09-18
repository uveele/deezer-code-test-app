export const VITE_DEEZER_API_HOST = import.meta.env.VITE_DEEZER_API_HOST;
export const VITE_DEEZER_API_URL = import.meta.env.VITE_DEEZER_API_URL;
export const VITE_DEEZER_API_KEY = import.meta.env.VITE_DEEZER_API_KEY;
export const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const DEEZER_DEFAULT_API_PARAMS = {
    headers: {
        'x-rapidapi-host': VITE_DEEZER_API_HOST,
        'x-rapidapi-key': VITE_DEEZER_API_KEY,
    }
};

export const DEEZER_DEFAULT_SEARCH_TYPE = 'track';