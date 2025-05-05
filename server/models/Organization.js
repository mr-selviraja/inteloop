import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Organization Schema: Users representing organizations
const organizationSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  orgName: { type: String, required: true },
  role: {
    type: String,
    enum: ['organization'],
    default: 'organization',
    required: true,
  },
  membershipStatus: {
    type: String,
    enum: ['free', 'paid'],
    default: 'free',
  },
}, { timestamps: true });

// Hash password before saving to DB
organizationSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare input password with hashed password
organizationSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model('Organization', organizationSchema);
