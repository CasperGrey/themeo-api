import mongoose, { Schema } from 'mongoose'

const artistsSchema = new Schema({
  createdBy: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true
  },
  artist_id: {
    type: String
  },
  artist_name: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

artistsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      createdBy: this.createdBy.view(full),
      artist_id: this.artist_id,
      artist_name: this.artist_name,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Artists', artistsSchema)

export const schema = model.schema
export default model
