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
    .send({ song_id: 'test', songName: 'test', user_id: 'test', artistName: 'test', comment: 'test', url: 'test', videoId: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.song_id).toEqual('test')
  expect(body.songName).toEqual('test')
  expect(body.user_id).toEqual('test')
  expect(body.artistName).toEqual('test')
  expect(body.comment).toEqual('test')
  expect(body.url).toEqual('test')
  expect(body.videoId).toEqual('test')
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
    .send({ song_id: 'test', songName: 'test', user_id: 'test', artistName: 'test', comment: 'test', url: 'test', videoId: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(songs.id)
  expect(body.song_id).toEqual('test')
  expect(body.songName).toEqual('test')
  expect(body.user_id).toEqual('test')
  expect(body.artistName).toEqual('test')
  expect(body.comment).toEqual('test')
  expect(body.url).toEqual('test')
  expect(body.videoId).toEqual('test')
})

test('PUT /songs/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ song_id: 'test', songName: 'test', user_id: 'test', artistName: 'test', comment: 'test', url: 'test', videoId: 'test' })
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
