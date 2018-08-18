import request from 'supertest'
import { apiRoot } from '../../config'
import { signSync } from '../../services/jwt'
import express from '../../services/express'
import { User } from '../user'
import routes, { Artists } from '.'

const app = () => express(apiRoot, routes)

let userSession, anotherSession, artists

beforeEach(async () => {
  const user = await User.create({ email: 'a@a.com', password: '123456' })
  const anotherUser = await User.create({ email: 'b@b.com', password: '123456' })
  userSession = signSync(user.id)
  anotherSession = signSync(anotherUser.id)
  artists = await Artists.create({ createdBy: user })
})

test('POST /artists 201 (user)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: userSession, artist_id: 'test', artist_name: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.artist_id).toEqual('test')
  expect(body.artist_name).toEqual('test')
  expect(typeof body.createdBy).toEqual('object')
})

test('POST /artists 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /artists 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /artists/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${artists.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(artists.id)
})

test('GET /artists/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /artists/:id 200 (user)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${artists.id}`)
    .send({ access_token: userSession, artist_id: 'test', artist_name: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(artists.id)
  expect(body.artist_id).toEqual('test')
  expect(body.artist_name).toEqual('test')
  expect(typeof body.createdBy).toEqual('object')
})

test('PUT /artists/:id 401 (user) - another user', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${artists.id}`)
    .send({ access_token: anotherSession, artist_id: 'test', artist_name: 'test' })
  expect(status).toBe(401)
})

test('PUT /artists/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${artists.id}`)
  expect(status).toBe(401)
})

test('PUT /artists/:id 404 (user)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: anotherSession, artist_id: 'test', artist_name: 'test' })
  expect(status).toBe(404)
})

test('DELETE /artists/:id 204 (user)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${artists.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(204)
})

test('DELETE /artists/:id 401 (user) - another user', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${artists.id}`)
    .send({ access_token: anotherSession })
  expect(status).toBe(401)
})

test('DELETE /artists/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${artists.id}`)
  expect(status).toBe(401)
})

test('DELETE /artists/:id 404 (user)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: anotherSession })
  expect(status).toBe(404)
})
