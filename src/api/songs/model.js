import mongoose, { Schema } from 'mongoose'

const songsSchema = new Schema({
  artistName: {
    type: String
  },
  artistRanking: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

songsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      artistName: this.artistName,
      artistRanking: this.artistRanking,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Songs', songsSchema)

export const schema = model.schema
export default model
