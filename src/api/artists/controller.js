import { success, notFound, authorOrAdmin } from '../../services/response/'
import { Artists } from '.'

export const create = ({ user, bodymen: { body } }, res, next) =>
  Artists.create({ ...body, createdBy: user })
    .then((artists) => artists.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Artists.count(query)
    .then(count => Artists.find(query, select, cursor)
      .populate('createdBy')
      .then((artists) => ({
        count,
        rows: artists.map((artists) => artists.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Artists.findById(params.id)
    .populate('createdBy')
    .then(notFound(res))
    .then((artists) => artists ? artists.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ user, bodymen: { body }, params }, res, next) =>
  Artists.findById(params.id)
    .populate('createdBy')
    .then(notFound(res))
    .then(authorOrAdmin(res, user, 'createdBy'))
    .then((artists) => artists ? Object.assign(artists, body).save() : null)
    .then((artists) => artists ? artists.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ user, params }, res, next) =>
  Artists.findById(params.id)
    .then(notFound(res))
    .then(authorOrAdmin(res, user, 'createdBy'))
    .then((artists) => artists ? artists.remove() : null)
    .then(success(res, 204))
    .catch(next)
