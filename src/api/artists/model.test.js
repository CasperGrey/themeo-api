import { Artists } from '.'

let artists

beforeEach(async () => {
  artists = await Artists.create({ artistName: 'test', artistRanking: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = artists.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(artists.id)
    expect(view.artistName).toBe(artists.artistName)
    expect(view.artistRanking).toBe(artists.artistRanking)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = artists.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(artists.id)
    expect(view.artistName).toBe(artists.artistName)
    expect(view.artistRanking).toBe(artists.artistRanking)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
