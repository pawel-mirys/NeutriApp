import { useForm } from 'react-hook-form';
import Form from '../Form/Form';
import FormInput from '../FormInput/FormInput';

type SearchFormProps = {
  onSearch: (searchTerms: string) => void;
};

type Inputs = {
  searchTerm: string;
};

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const { control, getValues, handleSubmit, setError, reset } =
    useForm<Inputs>();

  const inputs = (
    <div className='w-full'>
      <FormInput
        type='text'
        control={control}
        name='searchTerm'
        label='Search food'
      />
    </div>
  );

  const handleSearch = (inputsData: Inputs) => {
    const { searchTerm } = getValues();
    if (!searchTerm) {
      setError('searchTerm', { message: 'Food name is required' });
    } else {
      onSearch(inputsData.searchTerm);
    }
    reset();
  };

  return (
    <div className='mt-5 w-3/4 m-auto'>
      <Form
        handleSubmit={handleSubmit(handleSearch)}
        inputs={inputs}
        submitButtonLabel='Search'
      />
    </div>
  );
};

export default SearchForm;
