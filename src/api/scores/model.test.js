import { Scores } from '.'

let scores

beforeEach(async () => {
  scores = await Scores.create({ score_id: 'test', theme_id: 'test', user_id: 'test', song_id: 'test', score: 'test', song_comment: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = scores.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(scores.id)
    expect(view.score_id).toBe(scores.score_id)
    expect(view.theme_id).toBe(scores.theme_id)
    expect(view.user_id).toBe(scores.user_id)
    expect(view.song_id).toBe(scores.song_id)
    expect(view.score).toBe(scores.score)
    expect(view.song_comment).toBe(scores.song_comment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = scores.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(scores.id)
    expect(view.score_id).toBe(scores.score_id)
    expect(view.theme_id).toBe(scores.theme_id)
    expect(view.user_id).toBe(scores.user_id)
    expect(view.song_id).toBe(scores.song_id)
    expect(view.score).toBe(scores.score)
    expect(view.song_comment).toBe(scores.song_comment)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
