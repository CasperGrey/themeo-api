import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Songs } from '.'

const app = () => express(apiRoot, routes)

let songs

beforeEach(async () => {
  songs = await Songs.create({})
})

test('POST /songs 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ song_name: 'test', artist_id: 'test', genre_id: 'test', song_url: 'test', video_id: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.song_name).toEqual('test')
  expect(body.artist_id).toEqual('test')
  expect(body.genre_id).toEqual('test')
  expect(body.song_url).toEqual('test')
  expect(body.video_id).toEqual('test')
})

test('GET /songs 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /songs/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${songs.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(songs.id)
})

test('GET /songs/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /songs/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${songs.id}`)
    .send({ song_name: 'test', artist_id: 'test', genre_id: 'test', song_url: 'test', video_id: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(songs.id)
  expect(body.song_name).toEqual('test')
  expect(body.artist_id).toEqual('test')
  expect(body.genre_id).toEqual('test')
  expect(body.song_url).toEqual('test')
  expect(body.video_id).toEqual('test')
})

test('PUT /songs/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ song_name: 'test', artist_id: 'test', genre_id: 'test', song_url: 'test', video_id: 'test' })
  expect(status).toBe(404)
})

test('DELETE /songs/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${songs.id}`)
  expect(status).toBe(204)
})

test('DELETE /songs/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
