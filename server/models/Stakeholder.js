import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Stakeholder Schema: End-users under an organization
const stakeholderSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  orgId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organization',
    required: true,
  },
  customRole: { type: String }, // e.g. UX Team, Analyst, etc.
  role: {
    type: String,
    enum: ['stakeholder'],
    default: 'stakeholder',
    required: true,
  },
}, { timestamps: true });

stakeholderSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

stakeholderSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model('Stakeholder', stakeholderSchema);
