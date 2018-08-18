import { success, notFound } from '../../services/response/'
import { Artists } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Artists.create(body)
    .then((artists) => artists.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Artists.count(query)
    .then(count => Artists.find(query, select, cursor)
      .then((artists) => ({
        count,
        rows: artists.map((artists) => artists.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Artists.findById(params.id)
    .then(notFound(res))
    .then((artists) => artists ? artists.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Artists.findById(params.id)
    .then(notFound(res))
    .then((artists) => artists ? Object.assign(artists, body).save() : null)
    .then((artists) => artists ? artists.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Artists.findById(params.id)
    .then(notFound(res))
    .then((artists) => artists ? artists.remove() : null)
    .then(success(res, 204))
    .catch(next)
