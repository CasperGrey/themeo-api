import { success, notFound } from '../../services/response/'
import { Songs } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Songs.create(body)
    .then((songs) => songs.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Songs.count(query)
    .then(count => Songs.find(query, select, cursor)
      .then((songs) => ({
        count,
        rows: songs.map((songs) => songs.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Songs.findById(params.id)
    .then(notFound(res))
    .then((songs) => songs ? songs.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Songs.findById(params.id)
    .then(notFound(res))
    .then((songs) => songs ? Object.assign(songs, body).save() : null)
    .then((songs) => songs ? songs.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Songs.findById(params.id)
    .then(notFound(res))
    .then((songs) => songs ? songs.remove() : null)
    .then(success(res, 204))
    .catch(next)
