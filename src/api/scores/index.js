import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Scores, { schema } from './model'

const router = new Router()
const { score_id, theme_id, user_id, song_id, score, song_comment } = schema.tree

/**
 * @api {post} /scores Create scores
 * @apiName CreateScores
 * @apiGroup Scores
 * @apiParam score_id Scores's score_id.
 * @apiParam theme_id Scores's theme_id.
 * @apiParam user_id Scores's user_id.
 * @apiParam song_id Scores's song_id.
 * @apiParam score Scores's score.
 * @apiParam song_comment Scores's song_comment.
 * @apiSuccess {Object} scores Scores's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Scores not found.
 */
router.post('/',
  body({ score_id, theme_id, user_id, song_id, score, song_comment }),
  create)

/**
 * @api {get} /scores Retrieve scores
 * @apiName RetrieveScores
 * @apiGroup Scores
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of scores.
 * @apiSuccess {Object[]} rows List of scores.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /scores/:id Retrieve scores
 * @apiName RetrieveScores
 * @apiGroup Scores
 * @apiSuccess {Object} scores Scores's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Scores not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /scores/:id Update scores
 * @apiName UpdateScores
 * @apiGroup Scores
 * @apiParam score_id Scores's score_id.
 * @apiParam theme_id Scores's theme_id.
 * @apiParam user_id Scores's user_id.
 * @apiParam song_id Scores's song_id.
 * @apiParam score Scores's score.
 * @apiParam song_comment Scores's song_comment.
 * @apiSuccess {Object} scores Scores's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Scores not found.
 */
router.put('/:id',
  body({ score_id, theme_id, user_id, song_id, score, song_comment }),
  update)

/**
 * @api {delete} /scores/:id Delete scores
 * @apiName DeleteScores
 * @apiGroup Scores
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Scores not found.
 */
router.delete('/:id',
  destroy)

export default router
