import { success, notFound } from '../../services/response/'
import { Scores } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Scores.create(body)
    .then((scores) => scores.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Scores.count(query)
    .then(count => Scores.find(query, select, cursor)
      .then((scores) => ({
        count,
        rows: scores.map((scores) => scores.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Scores.findById(params.id)
    .then(notFound(res))
    .then((scores) => scores ? scores.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Scores.findById(params.id)
    .then(notFound(res))
    .then((scores) => scores ? Object.assign(scores, body).save() : null)
    .then((scores) => scores ? scores.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Scores.findById(params.id)
    .then(notFound(res))
    .then((scores) => scores ? scores.remove() : null)
    .then(success(res, 204))
    .catch(next)
