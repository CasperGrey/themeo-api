import { Artists } from '.'
import { User } from '../user'

let user, artists

beforeEach(async () => {
  user = await User.create({ email: 'a@a.com', password: '123456' })
  artists = await Artists.create({ createdBy: user, artist_id: 'test', artist_name: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = artists.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(artists.id)
    expect(typeof view.createdBy).toBe('object')
    expect(view.createdBy.id).toBe(user.id)
    expect(view.artist_id).toBe(artists.artist_id)
    expect(view.artist_name).toBe(artists.artist_name)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = artists.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(artists.id)
    expect(typeof view.createdBy).toBe('object')
    expect(view.createdBy.id).toBe(user.id)
    expect(view.artist_id).toBe(artists.artist_id)
    expect(view.artist_name).toBe(artists.artist_name)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
