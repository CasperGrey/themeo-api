import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Scores } from '.'

const app = () => express(apiRoot, routes)

let scores

beforeEach(async () => {
  scores = await Scores.create({})
})

test('POST /scores 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ score_id: 'test', theme_id: 'test', user_id: 'test', song_id: 'test', score: 'test', song_comment: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.score_id).toEqual('test')
  expect(body.theme_id).toEqual('test')
  expect(body.user_id).toEqual('test')
  expect(body.song_id).toEqual('test')
  expect(body.score).toEqual('test')
  expect(body.song_comment).toEqual('test')
})

test('GET /scores 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /scores/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${scores.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(scores.id)
})

test('GET /scores/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /scores/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${scores.id}`)
    .send({ score_id: 'test', theme_id: 'test', user_id: 'test', song_id: 'test', score: 'test', song_comment: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(scores.id)
  expect(body.score_id).toEqual('test')
  expect(body.theme_id).toEqual('test')
  expect(body.user_id).toEqual('test')
  expect(body.song_id).toEqual('test')
  expect(body.score).toEqual('test')
  expect(body.song_comment).toEqual('test')
})

test('PUT /scores/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ score_id: 'test', theme_id: 'test', user_id: 'test', song_id: 'test', score: 'test', song_comment: 'test' })
  expect(status).toBe(404)
})

test('DELETE /scores/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${scores.id}`)
  expect(status).toBe(204)
})

test('DELETE /scores/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
