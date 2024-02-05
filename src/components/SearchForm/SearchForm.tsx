import { useForm, SubmitHandler } from 'react-hook-form';

type SearchFormProps = {
  onSearch: (searchTerms: string) => void;
};

type FormValues = {
  searchTerm: string;
};

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    onSearch(data.searchTerm);
    reset();
  };

  return (
    <div className='w-5/6 m-auto'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-row   m-auto mt-5'>
        <label className='w-full '>
          Search Food
          <input
            {...register('searchTerm')}
            type='text'
            placeholder='Food You want to find'
            className='px-4 py-3  bg-gray-100 w-full text-sm outline-none border-b-2 border-blue-500 rounded'
          />
        </label>
        <button
          type='submit'
          className='!mt-6  px-4 py-2.5  block text-sm font-semibold bg-blue-500 text-white rounded hover:bg-blue-600'>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
