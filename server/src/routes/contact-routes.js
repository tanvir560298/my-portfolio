import { Router } from 'express'
import rateLimit from 'express-rate-limit'
import { createContact } from '../controllers/contact-controller.js'

const router = Router()

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many messages. Please wait before trying again.',
  },
})

router.post('/', contactLimiter, createContact)

export default router
