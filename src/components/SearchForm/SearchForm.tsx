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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Search Food
        <input {...register('searchTerm')} />
      </label>
      <button type='submit'>Search</button>
    </form>
  );
};

export default SearchForm;
