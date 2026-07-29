import mongoose from 'mongoose'

const inquiryTypes = [
  'Job Opportunity',
  'Freelance Project',
  'Teaching Request',
  'Student Mentorship',
  'Collaboration',
  'General Question',
]

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 254 },
    subject: { type: String, required: true, trim: true, maxlength: 150 },
    inquiryType: { type: String, required: true, enum: inquiryTypes },
    message: { type: String, required: true, trim: true, maxlength: 5000 },
    status: {
      type: String,
      enum: ['new', 'read', 'replied', 'archived'],
      default: 'new',
    },
    notificationSent: { type: Boolean, default: false },
  },
  { timestamps: true },
)

contactSchema.index({ createdAt: -1 })
contactSchema.index({ email: 1 })

export const Contact = mongoose.model('Contact', contactSchema)
export { inquiryTypes }
