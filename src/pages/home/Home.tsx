/* eslint-disable @typescript-eslint/no-unused-vars */
import FetchedFoodList from '@/components/FetchedFoodList/FetchedFoodList';
import SearchForm from '@/components/SearchForm/SearchForm';
import { useFetchFoodByNameQuery } from '@/store';

import { useState } from 'react';

const Home: React.FC = () => {
  const [term, setTerm] = useState<string>();
  const [skipToken, setSkipToken] = useState(true);

  const { data, isSuccess } = useFetchFoodByNameQuery(
    { ingr: term! },
    { skip: skipToken }
  );

  const handleSearch = (searchTerm: string) => {
    setTerm((prevTerm) => (prevTerm = searchTerm));
    setSkipToken((prev) => !prev);
    isSuccess && setSkipToken((prev) => !prev);
  };

  return (
    <main>
      <SearchForm onSearch={handleSearch} />
      {data && <FetchedFoodList data={data} />}
    </main>
  );
};

export default Home;
