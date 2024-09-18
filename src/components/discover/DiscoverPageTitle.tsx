import { useDiscoverStore } from "@/store/useDiscoverStore";

const DiscoverPageTitle = () => {
    
    const searchQuery = useDiscoverStore(state => state.searchQuery);

    return (
        <h1>Search results for: <span>{searchQuery}</span></h1>
    )

}

export default DiscoverPageTitle;