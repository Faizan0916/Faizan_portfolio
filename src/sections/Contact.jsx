import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  Mail,
  MapPin,
  Clock,
  Send,
  Copy,
  Check,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
} from 'lucide-react'
import './contact.css'

/* ------------------------------------------------------------------
   APNI DETAILS
------------------------------------------------------------------- */
const PROFILE = {
  email: 'faizan2225747523@gmail.com',
  location: 'Jamia Millia Islamia, New Delhi, India',
  github: 'https://github.com/Faizan0916',
  linkedin: 'https://www.linkedin.com/in/faizan-ahmad-ansari-6a089330a/',
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const MAX_MESSAGE = 500

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
)

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
}

const EMPTY_FORM = { name: '', email: '', message: '', website: '' } // website = honeypot

const Contact = () => {
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [copied, setCopied] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
    if (status === 'error') setStatus('idle')
  }

  const validate = () => {
    const next = {}
    if (form.name.trim().length < 2) next.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email.'
    if (form.message.trim().length < 10) next.message = 'Message should be at least 10 characters.'
    return next
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.website) return // bot ne honeypot bhar diya, chupchap ignore

    const found = validate()
    setErrors(found)
    if (Object.keys(found).length) return

    setStatus('sending')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      )
      setStatus('success')
      setForm(EMPTY_FORM)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${PROFILE.email}`
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="max-w-7xl mx-auto c-space contact-inner">
        <div className="contact-layout">
          {/* LEFT: intro + details */}
          <motion.div
            className="contact-left"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}>
            <span className="contact-eyebrow">get in touch</span>
            <h3 className="head-text mb-3">Contact</h3>
            <p className="contact-subtitle">
              Have a project in mind, an opportunity, or just want to say hi? Send me a message
              and I will get back to you as soon as I can.
            </p>

            <div className="contact-availability">
              <span className="contact-availability-dot" />
              Available for internships &amp; freelance work
            </div>

            <ul className="contact-info-list">
              <li className="contact-info-card">
                <span className="contact-info-icon">
                  <Mail size={20} />
                </span>
                <span className="contact-info-text">
                  <span className="contact-info-label">email</span>
                  <a className="contact-info-value" href={`mailto:${PROFILE.email}`}>
                    {PROFILE.email}
                  </a>
                </span>
                <button
                  type="button"
                  className={`contact-copy-btn ${copied ? 'is-copied' : ''}`}
                  onClick={copyEmail}
                  aria-label="Copy email address">
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </li>

              <li className="contact-info-card">
                <span className="contact-info-icon">
                  <MapPin size={20} />
                </span>
                <span className="contact-info-text">
                  <span className="contact-info-label">location</span>
                  <span className="contact-info-value">{PROFILE.location}</span>
                </span>
              </li>

              <li className="contact-info-card">
                <span className="contact-info-icon">
                  <Clock size={20} />
                </span>
                <span className="contact-info-text">
                  <span className="contact-info-label">response time</span>
                  <span className="contact-info-value">Usually within 24 hours</span>
                </span>
              </li>
            </ul>

            <div className="contact-socials">
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="contact-social">
                <GithubIcon />
                <span>GitHub</span>
                <ArrowUpRight size={16} className="contact-social-arrow" />
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="contact-social">
                <LinkedinIcon />
                <span>LinkedIn</span>
                <ArrowUpRight size={16} className="contact-social-arrow" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT: form card */}
          <motion.div
            className="contact-card"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}>
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  className="contact-success"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>
                  <motion.span
                    className="contact-success-icon"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.15, type: 'spring', stiffness: 260, damping: 16 }}>
                    <CheckCircle2 size={42} />
                  </motion.span>
                  <h4>Message sent!</h4>
                  <p>Thanks for reaching out. I will reply to your email as soon as I can.</p>
                  <button
                    type="button"
                    className="contact-secondary-btn"
                    onClick={() => setStatus('idle')}>
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  className="contact-form"
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}>
                  <div className="contact-form-head">
                    <h4>Send me a message</h4>
                    <p>Fill in the form and I will get back to you.</p>
                  </div>

                  <div className="contact-field">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder=" "
                      value={form.name}
                      onChange={handleChange}
                      autoComplete="name"
                      className={errors.name ? 'has-error' : ''}
                    />
                    <label htmlFor="name">Your name</label>
                    {errors.name && <span className="contact-error">{errors.name}</span>}
                  </div>

                  <div className="contact-field">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder=" "
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                      className={errors.email ? 'has-error' : ''}
                    />
                    <label htmlFor="email">Your email</label>
                    {errors.email && <span className="contact-error">{errors.email}</span>}
                  </div>

                  <div className="contact-field">
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      maxLength={MAX_MESSAGE}
                      placeholder=" "
                      value={form.message}
                      onChange={handleChange}
                      className={errors.message ? 'has-error' : ''}
                    />
                    <label htmlFor="message">Tell me about your project or idea</label>
                    <span className="contact-counter">
                      {form.message.length}/{MAX_MESSAGE}
                    </span>
                    {errors.message && <span className="contact-error">{errors.message}</span>}
                  </div>

                  {/* honeypot: real users ko ye dikhta nahi */}
                  <input
                    type="text"
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    className="contact-honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <button type="submit" className="contact-submit" disabled={status === 'sending'}>
                    {status === 'sending' ? (
                      <>
                        <span className="contact-spinner" /> Sending...
                      </>
                    ) : (
                      <>
                        Send message <Send size={18} />
                      </>
                    )}
                  </button>

                  {status === 'error' && (
                    <p className="contact-status is-error" role="alert">
                      <AlertCircle size={18} /> Something went wrong. Please try again or email
                      me directly.
                    </p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact