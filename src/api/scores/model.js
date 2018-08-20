import mongoose, { Schema } from 'mongoose'

const scoresSchema = new Schema({
  score_id: {
    type: String
  },
  theme_id: {
    type: String
  },
  user_id: {
    type: String
  },
  song_id: {
    type: String
  },
  score: {
    type: String
  },
  song_comment: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

scoresSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      score_id: this.score_id,
      theme_id: this.theme_id,
      user_id: this.user_id,
      song_id: this.song_id,
      score: this.score,
      song_comment: this.song_comment,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Scores', scoresSchema)

export const schema = model.schema
export default model
