import mongoose from "mongoose";
const auditLogSchema = new mongoose.Schema({
  type: { type: String, index: true, required: true },
  userId: { type: String, index: true },
  data: { type: Object, required: true },
  requestId: String,
  occurredAt: { type: Date, default: Date.now, index: true }
}, { timestamps: true });
auditLogSchema.pre("save", function(next) {
  if (!this.isNew) return next(new Error("Audit logs are immutable"));
  next();
});
export const AuditLog = mongoose.model("AuditLog", auditLogSchema);
