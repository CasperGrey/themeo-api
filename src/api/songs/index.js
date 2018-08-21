import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Songs, { schema } from './model'

const router = new Router()
const { song_id, song_name, artist_id, genre_id, song_url, video_id } = schema.tree

/**
 * @api {post} /songs Create songs
 * @apiName CreateSongs
 * @apiGroup Songs
 * @apiParam song_id Songs's song_id.
 * @apiParam song_name Songs's song_name.
 * @apiParam artist_id Songs's artist_id.
 * @apiParam genre_id Songs's genre_id.
 * @apiParam song_url Songs's song_url.
 * @apiParam video_id Songs's video_id.
 * @apiSuccess {Object} songs Songs's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Songs not found.
 */
router.post('/',
  body({ song_id, song_name, artist_id, genre_id, song_url, video_id }),
  create)

/**
 * @api {get} /songs Retrieve songs
 * @apiName RetrieveSongs
 * @apiGroup Songs
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of songs.
 * @apiSuccess {Object[]} rows List of songs.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /songs/:id Retrieve songs
 * @apiName RetrieveSongs
 * @apiGroup Songs
 * @apiSuccess {Object} songs Songs's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Songs not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /songs/:id Update songs
 * @apiName UpdateSongs
 * @apiGroup Songs
 * @apiParam song_id Songs's song_id.
 * @apiParam song_name Songs's song_name.
 * @apiParam artist_id Songs's artist_id.
 * @apiParam genre_id Songs's genre_id.
 * @apiParam song_url Songs's song_url.
 * @apiParam video_id Songs's video_id.
 * @apiSuccess {Object} songs Songs's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Songs not found.
 */
router.put('/:id',
  body({ song_id, song_name, artist_id, genre_id, song_url, video_id }),
  update)

/**
 * @api {delete} /songs/:id Delete songs
 * @apiName DeleteSongs
 * @apiGroup Songs
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Songs not found.
 */
router.delete('/:id',
  destroy)

export default router
