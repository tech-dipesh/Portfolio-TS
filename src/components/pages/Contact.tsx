import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { AlertCircle } from 'lucide-react';
import 'react-toastify/dist/ReactToastify.css';

type FormValues = {
  name?: string;
  email?: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = () => {
    toast.success('Thank you for your message!'); // success toast
    window.location.href = '/';
  };

  return (
    <main className="min-h-screen bg-[#30339d] text-white flex flex-col items-center justify-center px-4 py-20">
      <h2 className="text-3xl font-bold text-[#3498db] mb-2">Get in Touch</h2>
      <p className="mb-6 text-center">I love to get your feedback—fill out the form below!</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#06063a] p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <div className="mb-4">
          <label className="block mb-1">Full Name (optional)</label>
          <input
            {...register('name')}
            className="w-full p-2 rounded bg-[#30339d] text-white focus:ring-2 focus:ring-[#3498db]"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email (optional)</label>
          <input
            type="email"
            {...register('email')}
            className="w-full p-2 rounded bg-[#30339d] text-white focus:ring-2 focus:ring-[#3498db]"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1">Message <span className="text-[#8a2be2]">*</span></label>
          <textarea
            {...register('message', { required: 'Message is required' })}
            className="w-full p-2 rounded bg-[#30339d] text-white h-32 focus:ring-2 focus:ring-[#3498db]"
          />
          {errors.message && (
            <div className="bg-gray-900 p-2 mt-2 rounded">
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-red-500" />
                <span className="text-red-500 text-sm">{errors.message.message}</span>
              </div>
            </div>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-[#8a2be2] text-white p-3 rounded hover:bg-opacity-90 transition"
        >
          Contact Me
        </button>
      </form>
      <a href="/" className="mt-6 text-sm text-[#3498db] hover:underline">
        ← Back to Home
      </a>
    </main>
  );
}
