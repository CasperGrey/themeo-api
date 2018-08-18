import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Artists, { schema } from './model'

const router = new Router()
const { artistName, artistRanking } = schema.tree

/**
 * @api {post} /artists Create artists
 * @apiName CreateArtists
 * @apiGroup Artists
 * @apiParam artistName Artists's artistName.
 * @apiParam artistRanking Artists's artistRanking.
 * @apiSuccess {Object} artists Artists's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Artists not found.
 */
router.post('/',
  body({ artistName, artistRanking }),
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
 * @apiParam artistName Artists's artistName.
 * @apiParam artistRanking Artists's artistRanking.
 * @apiSuccess {Object} artists Artists's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Artists not found.
 */
router.put('/:id',
  body({ artistName, artistRanking }),
  update)

/**
 * @api {delete} /artists/:id Delete artists
 * @apiName DeleteArtists
 * @apiGroup Artists
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Artists not found.
 */
router.delete('/:id',
  destroy)

export default router
