import SearchForm from '@/components/SearchForm/SearchForm';
import { useFetchFoodByNameQuery } from '@/store';

import { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [term, setTerm] = useState<string>();
  const [skipToken, setSkipToken] = useState(true);

  const { data } = useFetchFoodByNameQuery(
    { ingr: term! },
    { skip: skipToken }
  );

  const handleSearch = (searchTerm: string) => {
    setTerm(searchTerm);
    setSkipToken((prev) => !prev);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <main>
      <SearchForm onSearch={handleSearch} />
    </main>
  );
};

export default Home;
