import { Box, Button } from '@mui/material';
import clsx from 'clsx';

type FormProps = {
  handleSubmit: () => void;
  inputs: JSX.Element | JSX.Element[];
  submitButtonLabel?: string;
  className?: string;
};

const Form: React.FC<FormProps> = ({
  inputs,
  handleSubmit,
  submitButtonLabel,
  className,
}) => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit();
  };
  return (
    <Box
      className={clsx(
        'flex gap-3 h-auto  justify-center items-start',
        className
      )}
      component='form'
      sx={{
        '& .MuiTextField-root': { mb: 2, width: '100%' },
      }}
      noValidate={false}
      autoComplete='on'
      onSubmit={handleFormSubmit}>
      {inputs}
      <Button variant='contained' type='submit' sx={{ height: 55 }}>
        {submitButtonLabel ? submitButtonLabel : 'Submit'}
      </Button>
    </Box>
  );
};

export default Form;
