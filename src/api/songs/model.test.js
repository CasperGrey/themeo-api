import { Songs } from '.'

let songs

beforeEach(async () => {
  songs = await Songs.create({ song_id: 'test', song_name: 'test', artist_id: 'test', genre_id: 'test', song_url: 'test', video_id: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = songs.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(songs.id)
    expect(view.song_id).toBe(songs.song_id)
    expect(view.song_name).toBe(songs.song_name)
    expect(view.artist_id).toBe(songs.artist_id)
    expect(view.genre_id).toBe(songs.genre_id)
    expect(view.song_url).toBe(songs.song_url)
    expect(view.video_id).toBe(songs.video_id)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = songs.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(songs.id)
    expect(view.song_id).toBe(songs.song_id)
    expect(view.song_name).toBe(songs.song_name)
    expect(view.artist_id).toBe(songs.artist_id)
    expect(view.genre_id).toBe(songs.genre_id)
    expect(view.song_url).toBe(songs.song_url)
    expect(view.video_id).toBe(songs.video_id)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
