import { RequestHandler } from 'express'

import CommentModel from '../models/Comment'

export const getAllComments: RequestHandler = async (req, res) => {
  // the most recent comment comes first
  try {
    const comments = await CommentModel.findAll({
      order: [['created', 'DESC']],
    })
    res.json(comments)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
    console.log(err)
  }
}
