import { Theme } from '.'

let theme

beforeEach(async () => {
  theme = await Theme.create({ theme_id: 'test', theme_name: 'test', theme_agent_id: 'test', theme_youtube: 'test', theme_num_ppl: 'test', theme_date: 'test', seqNoCommentofWeek: 'test', theme_used: 'test', theme_current: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = theme.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(theme.id)
    expect(view.theme_id).toBe(theme.theme_id)
    expect(view.theme_name).toBe(theme.theme_name)
    expect(view.theme_agent_id).toBe(theme.theme_agent_id)
    expect(view.theme_youtube).toBe(theme.theme_youtube)
    expect(view.theme_num_ppl).toBe(theme.theme_num_ppl)
    expect(view.theme_date).toBe(theme.theme_date)
    expect(view.seqNoCommentofWeek).toBe(theme.seqNoCommentofWeek)
    expect(view.theme_used).toBe(theme.theme_used)
    expect(view.theme_current).toBe(theme.theme_current)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = theme.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(theme.id)
    expect(view.theme_id).toBe(theme.theme_id)
    expect(view.theme_name).toBe(theme.theme_name)
    expect(view.theme_agent_id).toBe(theme.theme_agent_id)
    expect(view.theme_youtube).toBe(theme.theme_youtube)
    expect(view.theme_num_ppl).toBe(theme.theme_num_ppl)
    expect(view.theme_date).toBe(theme.theme_date)
    expect(view.seqNoCommentofWeek).toBe(theme.seqNoCommentofWeek)
    expect(view.theme_used).toBe(theme.theme_used)
    expect(view.theme_current).toBe(theme.theme_current)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
