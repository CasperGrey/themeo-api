import { Songs } from '.'

let songs

beforeEach(async () => {
  songs = await Songs.create({ song_id: 'test', songName: 'test', user_id: 'test', artistName: 'test', comment: 'test', url: 'test', videoId: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = songs.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(songs.id)
    expect(view.song_id).toBe(songs.song_id)
    expect(view.songName).toBe(songs.songName)
    expect(view.user_id).toBe(songs.user_id)
    expect(view.artistName).toBe(songs.artistName)
    expect(view.comment).toBe(songs.comment)
    expect(view.url).toBe(songs.url)
    expect(view.videoId).toBe(songs.videoId)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = songs.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(songs.id)
    expect(view.song_id).toBe(songs.song_id)
    expect(view.songName).toBe(songs.songName)
    expect(view.user_id).toBe(songs.user_id)
    expect(view.artistName).toBe(songs.artistName)
    expect(view.comment).toBe(songs.comment)
    expect(view.url).toBe(songs.url)
    expect(view.videoId).toBe(songs.videoId)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
