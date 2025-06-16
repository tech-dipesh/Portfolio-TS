import { useForm, SubmitHandler } from 'react-hook-form'
import { AlertCircle, Send, ArrowLeft } from 'lucide-react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '../common/Footer'
import Navbar from '../common/navBar'

// this is the types of the data that need a type strict.
type FormData = {
  name: string
  email: string
  message: string
}

export default function Contact() {
  // react hook form data
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>()
  const navigate = useNavigate()

  // form submit that i copy from online.
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch('https://formsubmit.co/ajax/dipeshgautambusiness+portfolio@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data)
      })
      if (response.ok) {
        toast.success('Message sent successfully!')
        reset()
        setTimeout(() => navigate('/'), 2000)
      } else {
        toast.error('Failed to send message. Please try again.')
      }
    } catch {
      toast.error('An error occurred. Please try again.')
    }
  }

  const fieldStyle =
    'w-full p-3 bg-[#212154] text-white rounded-lg border border-[#3498db] focus:outline-none focus:ring-2 focus:ring-[#8a2be2]'

  return (
    <div className="flex absolute flex-col min-h-screen w-full bg-[#06063a]">
      <Navbar/>

      {/* Main content - full width */}
      <div className="flex-grow w-full px-4 py-12 relative z-10">
        <div className="w-full max-w-6xl mx-auto">
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full bg-[#30339d] p-8 md:p-10 rounded-xl shadow-xl"
          >
            <h2 className="text-4xl font-bold text-[#8a2be2] mb-2">Get in Touch</h2>
            <p className="text-white mb-8">I'd love to hear from you! Send me a message below.</p>

            <div className="mb-6">
              <label className="block text-white mb-2 font-medium">Name</label>
              <input
                type="text"
                {...register('name', { required: 'Name is required' })}
                className={fieldStyle}
                placeholder="Your name"
              />
              {errors.name && (
                <div className="flex items-center mt-2 text-red-400">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  <span className="text-sm">{errors.name.message}</span>
                </div>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-white mb-2 font-medium">Email</label>
              <input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Please enter a valid email address'
                  }
                })}
                className={fieldStyle}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <div className="flex items-center mt-2 text-red-400">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  <span className="text-sm">{errors.email.message}</span>
                </div>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-white mb-2 font-medium">Message</label>
              <textarea
                {...register('message', {
                  required: 'Message is required',
                  minLength: {
                    value: 10,
                    message: 'Message must be at least 10 characters'
                  }
                })}
                className={`${fieldStyle} h-32`}
                placeholder="Your message here..."
              ></textarea>
              {errors.message && (
                <div className="flex items-center mt-2 text-red-400">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  <span className="text-sm">{errors.message.message}</span>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="flex items-center text-white hover:text-[#3498db] transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Home
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center bg-[#8a2be2] text-white px-6 py-3 rounded-lg transition ${
                  isSubmitting ? 'opacity-60 cursor-not-allowed' : 'hover:bg-opacity-90'
                }`}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}