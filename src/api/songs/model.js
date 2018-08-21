import mongoose, { Schema } from 'mongoose'

const songsSchema = new Schema({
  song_id: {
    type: String
  },
  songName: {
    type: String
  },
  user_id: {
    type: String
  },
  artistName: {
    type: String
  },
  comment: {
    type: String
  },
  url: {
    type: String
  },
  videoId: {
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
      song_id: this.song_id,
      songName: this.songName,
      user_id: this.user_id,
      artistName: this.artistName,
      comment: this.comment,
      url: this.url,
      videoId: this.videoId,
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
