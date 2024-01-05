import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import AlertSuccess from '../../components/AlertSuccess'

const schema = yup.object().shape({
  fullName: yup
    .string()
    .required('Full Name is required')
    .min(3, 'Minimum length is 3 characters'),
  subject: yup
    .string()
    .required('Subject is required')
    .min(3, 'Minimum length is 3 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email address'),
  message: yup
    .string()
    .required('A message is required')
    .min(3, 'Minimum length is 3 characters'),
})

const ContactPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const onSubmit = async (data) => {
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    reset()
    setIsSubmitted(true)
  }

  return (
    <main>
      <div className='hero min-h-screen  bg-base-200'>
        <div className='card shrink-0 w-full max-w-md shadow-2xl bg-base-100'>
          <form className='card-body' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-3xl font-bold mb-8 text-center'>Contact us</h1>
            
            {isSubmitted && <AlertSuccess message='Form submitted successfully!' />}

            <div className='form-control'>
              <label className='label' htmlFor='fullName'>
                Full Name
              </label>
              <input
                {...register('fullName')}
                id='fullName'
                type='text'
                className='input input-bordered'
                disabled={isSubmitting}
              />
              {errors.fullName && (
                <span className='text-red-600'>{errors.fullName.message}</span>
              )}
            </div>

            <div className='form-control'>
              <label className='label' htmlFor='subject'>
                Subject
              </label>
              <input
                {...register('subject')}
                id='subject'
                type='text'
                className='input input-bordered'
                disabled={isSubmitting}
              />
              {errors.subject && (
                <span className='text-red-600'>{errors.subject.message}</span>
              )}
            </div>

            <div className='form-control'>
              <label className='label' htmlFor='email'>
                Email
              </label>
              <input
                {...register('email')}
                id='email'
                type='email'
                className='input input-bordered'
                disabled={isSubmitting}
              />
              {errors.email && (
                <span className='text-red-600'>{errors.email.message}</span>
              )}
            </div>

            <div className='form-control'>
              <label htmlFor='message' className='label'>
                Message
              </label>
              <textarea
                {...register('message')}
                id='message'
                className='textarea textarea-bordered'
                disabled={isSubmitting}
              />
              {errors.message && (
                <span className='text-red-600'>{errors.message.message}</span>
              )}
            </div>

            <button
              className='btn btn-primary mt-8'
              type='submit'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default ContactPage
