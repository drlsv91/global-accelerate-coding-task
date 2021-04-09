import { RequestHandler } from 'express'
import { Sequelize } from 'sequelize'
import CommentModel from '../models/Comment'
import EpisodeModel from '../models/Episode'
import { validateCommentData } from '../utils/validation'

export const getAllEpisode: RequestHandler = async function (req, res) {
  try {
    const episodes = await EpisodeModel.findAll({
      attributes: {
        include: [
          [Sequelize.fn('COUNT', Sequelize.col('comments.id')), 'commentCount'],
        ],
      },
      order: [['releaseDate', 'ASC']],
      include: [
        {
          model: CommentModel,
          as: 'comments',
          attributes: [],
        },
      ],
      group: ['comments.episodeId'],
    })
    res.json(episodes)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'something went wrong' })
  }
}

export const createComment: RequestHandler = async function (req, res) {
  const { episodeId } = req.params
  let { comment, ipAddressLocation, created } = req.body
  const errors = validateCommentData(comment, ipAddressLocation, created)

  if (errors) {
    return res.status(400).json({ message: errors })
  }

  created = new Date(created)
  try {
    const episode = await EpisodeModel.findOne({ where: { id: episodeId } })
    const createdComment = await episode.createComment({
      comment,
      ipAddressLocation,
      created,
    })
    res.json(createdComment)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Something went wrong' })
  }
}
