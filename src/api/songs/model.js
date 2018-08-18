import mongoose, { Schema } from 'mongoose'

const songsSchema = new Schema({
  song_name: {
    type: String
  },
  artist_id: {
    type: String
  },
  genre_id: {
    type: String
  },
  song_url: {
    type: String
  },
  video_id: {
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
      song_name: this.song_name,
      artist_id: this.artist_id,
      genre_id: this.genre_id,
      song_url: this.song_url,
      video_id: this.video_id,
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
