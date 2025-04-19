'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { AlertCircle } from 'lucide-react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch('https://formsubmit.co/ajax/dipeshgautambusiness+portfolio@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        reset();
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#30339d] text-white p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#3498db] p-6 rounded-md shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>

        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="w-full p-2 rounded text-black"
          />
          {errors.name && (
            <div className="bg-gray-900 p-2 mt-2 rounded-md shadow-lg">
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-red-500" />
                <span className="text-red-500 text-sm font-medium">
                  {errors.name.message}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            {...register('email', { required: 'Email is required' })}
            className="w-full p-2 rounded text-black"
          />
          {errors.email && (
            <div className="bg-gray-900 p-2 mt-2 rounded-md shadow-lg">
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-red-500" />
                <span className="text-red-500 text-sm font-medium">
                  {errors.email.message}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1">Message</label>
          <textarea
            {...register('message', { required: 'Message is required' })}
            className="w-full p-2 rounded text-black"
          ></textarea>
          {errors.message && (
            <div className="bg-gray-900 p-2 mt-2 rounded-md shadow-lg">
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-red-500" />
                <span className="text-red-500 text-sm font-medium">
                  {errors.message.message}
                </span>
              </div>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#8a2be2] text-white p-2 rounded hover:bg-[#7a1be2]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
