import { useFetchFoodByNameQuery } from '@/store';

function App() {
  const { data, isSuccess } = useFetchFoodByNameQuery({
    ingr: 'strawberries',
  });

  const fetchData = () => {
    isSuccess && console.log(data);
  };

  return (
    <div>
      <button onClick={fetchData}>Kliknij</button>
    </div>
  );
}

export default App;
