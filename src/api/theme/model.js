import mongoose, { Schema } from 'mongoose'

const themeSchema = new Schema({
  theme_id: {
    type: String
  },
  theme_name: {
    type: String
  },
  theme_agent_id: {
    type: String
  },
  theme_youtube: {
    type: String
  },
  theme_num_ppl: {
    type: String
  },
  theme_date: {
    type: String
  },
  seqNoCommentofWeek: {
    type: String
  },
  theme_used: {
    type: String
  },
  theme_current: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

themeSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      theme_id: this.theme_id,
      theme_name: this.theme_name,
      theme_agent_id: this.theme_agent_id,
      theme_youtube: this.theme_youtube,
      theme_num_ppl: this.theme_num_ppl,
      theme_date: this.theme_date,
      seqNoCommentofWeek: this.seqNoCommentofWeek,
      theme_used: this.theme_used,
      theme_current: this.theme_current,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Theme', themeSchema)

export const schema = model.schema
export default model
