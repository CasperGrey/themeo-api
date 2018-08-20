import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Theme } from '.'

const app = () => express(apiRoot, routes)

let theme

beforeEach(async () => {
  theme = await Theme.create({})
})

test('POST /theme 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ theme_id: 'test', theme_name: 'test', theme_agent_id: 'test', theme_youtube: 'test', theme_num_ppl: 'test', theme_date: 'test', seqNoCommentofWeek: 'test', theme_used: 'test', theme_current: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.theme_id).toEqual('test')
  expect(body.theme_name).toEqual('test')
  expect(body.theme_agent_id).toEqual('test')
  expect(body.theme_youtube).toEqual('test')
  expect(body.theme_num_ppl).toEqual('test')
  expect(body.theme_date).toEqual('test')
  expect(body.seqNoCommentofWeek).toEqual('test')
  expect(body.theme_used).toEqual('test')
  expect(body.theme_current).toEqual('test')
})

test('GET /theme 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /theme/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${theme.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(theme.id)
})

test('GET /theme/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /theme/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${theme.id}`)
    .send({ theme_id: 'test', theme_name: 'test', theme_agent_id: 'test', theme_youtube: 'test', theme_num_ppl: 'test', theme_date: 'test', seqNoCommentofWeek: 'test', theme_used: 'test', theme_current: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(theme.id)
  expect(body.theme_id).toEqual('test')
  expect(body.theme_name).toEqual('test')
  expect(body.theme_agent_id).toEqual('test')
  expect(body.theme_youtube).toEqual('test')
  expect(body.theme_num_ppl).toEqual('test')
  expect(body.theme_date).toEqual('test')
  expect(body.seqNoCommentofWeek).toEqual('test')
  expect(body.theme_used).toEqual('test')
  expect(body.theme_current).toEqual('test')
})

test('PUT /theme/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ theme_id: 'test', theme_name: 'test', theme_agent_id: 'test', theme_youtube: 'test', theme_num_ppl: 'test', theme_date: 'test', seqNoCommentofWeek: 'test', theme_used: 'test', theme_current: 'test' })
  expect(status).toBe(404)
})

test('DELETE /theme/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${theme.id}`)
  expect(status).toBe(204)
})

test('DELETE /theme/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
