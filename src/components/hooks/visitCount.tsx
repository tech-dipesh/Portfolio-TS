import { useForm } from 'react-hook-form';

const useCustomForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return {
    register,
    handleSubmit,
    errors,
    reset,
  };
};

export default useCustomForm;
