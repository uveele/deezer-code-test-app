import { useEffect, useState } from 'react';

import searchIcon from '@/assets/icons/search.svg';
import classes from './styles.module.css';
import { useDiscoverStore } from '@/store/useDiscoverStore';
import useDebounce from '@/hooks/useDebounce';
import Input from '@/components/common/Input';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

  const location = useLocation();
  const [query, setQuery] = useState('');
  const setSearchQuery = useDiscoverStore(state => state.setSearchQuery);
  const resetState = useDiscoverStore(state => state.resetState);
  const deferredQuery = useDebounce(query, 700);

  useEffect(() => {
    if (deferredQuery.trim().length < 1) return;
    setSearchQuery(deferredQuery);
  }, [setSearchQuery, deferredQuery]);

  useEffect(() => {
    resetState();
  }, [location, resetState]);

  return (
    <div className={classes.searchBar}>
      <Input 
        icon={<img alt="Search's icon" src={searchIcon} />}
        placeholder="Search artists"
        onChange={ (e) => setQuery(e.target.value) }
        value={ query }
      />
    </div>
  )
}

export default SearchBar;