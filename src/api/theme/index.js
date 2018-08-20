import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Theme, { schema } from './model'

const router = new Router()
const { theme_id, theme_name, theme_agent_id, theme_youtube, theme_num_ppl, theme_date, seqNoCommentofWeek, theme_used, theme_current } = schema.tree

/**
 * @api {post} /theme Create theme
 * @apiName CreateTheme
 * @apiGroup Theme
 * @apiParam theme_id Theme's theme_id.
 * @apiParam theme_name Theme's theme_name.
 * @apiParam theme_agent_id Theme's theme_agent_id.
 * @apiParam theme_youtube Theme's theme_youtube.
 * @apiParam theme_num_ppl Theme's theme_num_ppl.
 * @apiParam theme_date Theme's theme_date.
 * @apiParam seqNoCommentofWeek Theme's seqNoCommentofWeek.
 * @apiParam theme_used Theme's theme_used.
 * @apiParam theme_current Theme's theme_current.
 * @apiSuccess {Object} theme Theme's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Theme not found.
 */
router.post('/',
  body({ theme_id, theme_name, theme_agent_id, theme_youtube, theme_num_ppl, theme_date, seqNoCommentofWeek, theme_used, theme_current }),
  create)

/**
 * @api {get} /theme Retrieve themes
 * @apiName RetrieveThemes
 * @apiGroup Theme
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of themes.
 * @apiSuccess {Object[]} rows List of themes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /theme/:id Retrieve theme
 * @apiName RetrieveTheme
 * @apiGroup Theme
 * @apiSuccess {Object} theme Theme's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Theme not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /theme/:id Update theme
 * @apiName UpdateTheme
 * @apiGroup Theme
 * @apiParam theme_id Theme's theme_id.
 * @apiParam theme_name Theme's theme_name.
 * @apiParam theme_agent_id Theme's theme_agent_id.
 * @apiParam theme_youtube Theme's theme_youtube.
 * @apiParam theme_num_ppl Theme's theme_num_ppl.
 * @apiParam theme_date Theme's theme_date.
 * @apiParam seqNoCommentofWeek Theme's seqNoCommentofWeek.
 * @apiParam theme_used Theme's theme_used.
 * @apiParam theme_current Theme's theme_current.
 * @apiSuccess {Object} theme Theme's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Theme not found.
 */
router.put('/:id',
  body({ theme_id, theme_name, theme_agent_id, theme_youtube, theme_num_ppl, theme_date, seqNoCommentofWeek, theme_used, theme_current }),
  update)

/**
 * @api {delete} /theme/:id Delete theme
 * @apiName DeleteTheme
 * @apiGroup Theme
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Theme not found.
 */
router.delete('/:id',
  destroy)

export default router
