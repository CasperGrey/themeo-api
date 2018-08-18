import { Songs } from '.'

let songs

beforeEach(async () => {
  songs = await Songs.create({ artistName: 'test', artistRanking: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = songs.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(songs.id)
    expect(view.artistName).toBe(songs.artistName)
    expect(view.artistRanking).toBe(songs.artistRanking)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = songs.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(songs.id)
    expect(view.artistName).toBe(songs.artistName)
    expect(view.artistRanking).toBe(songs.artistRanking)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
