'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { BsArrowRight } from 'react-icons/bs'
import { toast } from 'sonner'
import Circles from '/components/Circles'
import { fadeIn } from '../../variants'
import Bulb from '../../components/Bulb'

const Contact = () => {
  const form = useRef()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    console.log('EmailJS Configuration:', {
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      serviceID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      templateID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    })
  }, [])

  const sendEmail = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)

      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current
      )

      if (result.status === 200) {
        toast.success("Your message has been delivered successfully. I'll get back to you shortly!")
        form.current.reset()
      }
    } catch (error) {
      console.error('Error:', error)
      toast.error('Failed to send message. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-primary h-full bg-gradient-to-r from-primary/10 via-blue-800/20 to-black/20">
      <Circles />
      <Bulb />
      <div className="container mx-auto py-0 md:py-20 text-center xl:text-left flex items-center justify-center h-full relative z-20">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let&apos;s <span className="text-accent">Connect.</span>
          </motion.h2>

          <motion.form
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="Name"
                name="user_name"
                className="input"
                required
                minLength="3"
              />
              <input
                type="email"
                placeholder="Email"
                name="user_email"
                className="input"
                required
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="input"
              required
              minLength="5"
            />

            <textarea
              placeholder="Message"
              name="message"
              className="textarea"
              required
              rows="5"
              minLength="10"
            ></textarea>

            <button
              type="submit"
              disabled={isLoading}
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="animate-pulse">Sending...</span>
              ) : (
                <>
                  <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                    Let&apos;s Talk
                  </span>
                  <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  )
}

export default Contact
