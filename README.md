# deezer app

This application was created using 

```
npm create vite@latest
```

The selected template was ```react-swc-ts```

```Vite``` requires Node.js version 18+ or 20+.

## Configuration

Copy the ```.env.template``` file and rename it to ```.env```. Assign the following environment variables: 

1. VITE_DEEZER_API_URL

    At the moment the URL is "https://deezerdevs-deezer.p.rapidapi.com"

2. VITE_DEEZER_API_HOST
    
    At the moment the host is "deezerdevs-deezer.p.rapidapi.com"

3. VITE_DEEZER_API_KEY

    Your personal API key. You can get one at "https://rapidapi.com/deezerdevs/api/deezer-1/"

4. VITE_BACKEND_URL

    The backend URL (Django project)

    http://localhost:8000/api


## Installation

```
npm install
npm run dev
```