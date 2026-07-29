import { z } from 'zod'
import { Contact, inquiryTypes } from '../models/contact.js'
import { sendContactNotification } from '../services/email.js'

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  subject: z.string().trim().min(3).max(150),
  inquiryType: z.enum(inquiryTypes),
  message: z.string().trim().min(10).max(5000),
  website: z.string().max(200).optional().default(''),
})

export async function createContact(request, response, next) {
  try {
    const result = contactSchema.safeParse(request.body)

    if (!result.success) {
      response.status(400).json({
        success: false,
        message: 'Please check the submitted fields.',
        errors: result.error.flatten().fieldErrors,
      })
      return
    }

    const { website, ...payload } = result.data

    if (website) {
      response.status(202).json({ success: true, message: 'Message received.' })
      return
    }

    const contact = await Contact.create(payload)

    try {
      contact.notificationSent = await sendContactNotification(contact)
      await contact.save()
    } catch (emailError) {
      console.error('Contact saved, but notification delivery failed:', emailError)
    }

    response.status(201).json({
      success: true,
      message: 'Thanks — your message has been received.',
      id: contact.id,
    })
  } catch (error) {
    next(error)
  }
}
