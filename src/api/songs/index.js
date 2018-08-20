import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Songs, { schema } from './model'

const router = new Router()
const { song_id, songName, user_id, artistName, comment, url, videoId } = schema.tree

/**
 * @api {post} /songs Create songs
 * @apiName CreateSongs
 * @apiGroup Songs
 * @apiParam song_id Songs's song_id.
 * @apiParam songName Songs's songName.
 * @apiParam user_id Songs's user_id.
 * @apiParam artistName Songs's artistName.
 * @apiParam comment Songs's comment.
 * @apiParam url Songs's url.
 * @apiParam videoId Songs's videoId.
 * @apiSuccess {Object} songs Songs's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Songs not found.
 */
router.post('/',
  body({ song_id, songName, user_id, artistName, comment, url, videoId }),
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
 * @apiParam songName Songs's songName.
 * @apiParam user_id Songs's user_id.
 * @apiParam artistName Songs's artistName.
 * @apiParam comment Songs's comment.
 * @apiParam url Songs's url.
 * @apiParam videoId Songs's videoId.
 * @apiSuccess {Object} songs Songs's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Songs not found.
 */
router.put('/:id',
  body({ song_id, songName, user_id, artistName, comment, url, videoId }),
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
