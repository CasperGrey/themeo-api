import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Artists, { schema } from './model'

const router = new Router()
const { artist_id, artist_name } = schema.tree

/**
 * @api {post} /artists Create artists
 * @apiName CreateArtists
 * @apiGroup Artists
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam artist_id Artists's artist_id.
 * @apiParam artist_name Artists's artist_name.
 * @apiSuccess {Object} artists Artists's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Artists not found.
 * @apiError 401 user access only.
 */
router.post('/',
  token({ required: false }),
  body({ artist_id, artist_name }),
  create)

/**
 * @api {get} /artists Retrieve artists
 * @apiName RetrieveArtists
 * @apiGroup Artists
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of artists.
 * @apiSuccess {Object[]} rows List of artists.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /artists/:id Retrieve artists
 * @apiName RetrieveArtists
 * @apiGroup Artists
 * @apiSuccess {Object} artists Artists's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Artists not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /artists/:id Update artists
 * @apiName UpdateArtists
 * @apiGroup Artists
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam artist_id Artists's artist_id.
 * @apiParam artist_name Artists's artist_name.
 * @apiSuccess {Object} artists Artists's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Artists not found.
 * @apiError 401 user access only.
 */
router.put('/:id',
  token({ required: true }),
  body({ artist_id, artist_name }),
  update)

/**
 * @api {delete} /artists/:id Delete artists
 * @apiName DeleteArtists
 * @apiGroup Artists
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Artists not found.
 * @apiError 401 user access only.
 */
router.delete('/:id',
  token({ required: true }),
  destroy)

export default router
