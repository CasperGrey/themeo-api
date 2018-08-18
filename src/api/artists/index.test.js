import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Artists } from '.'

const app = () => express(apiRoot, routes)

let artists

beforeEach(async () => {
  artists = await Artists.create({})
})

test('POST /artists 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ artistName: 'test', artistRanking: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.artistName).toEqual('test')
  expect(body.artistRanking).toEqual('test')
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

test('PUT /artists/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${artists.id}`)
    .send({ artistName: 'test', artistRanking: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(artists.id)
  expect(body.artistName).toEqual('test')
  expect(body.artistRanking).toEqual('test')
})

test('PUT /artists/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ artistName: 'test', artistRanking: 'test' })
  expect(status).toBe(404)
})

test('DELETE /artists/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${artists.id}`)
  expect(status).toBe(204)
})

test('DELETE /artists/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
