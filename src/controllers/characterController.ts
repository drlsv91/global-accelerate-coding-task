import { RequestHandler } from 'express'
import CharacterModel from '../models/Character'
import LocationModel from '../models/Location'

interface QueryData {
  location?: string
  status?: string
  // gender?: string
  // firstName?: string
  // lastName?: string
}

export const getAllCharacters: RequestHandler = async (req, res) => {
  const { location, status } = req.query as QueryData

  try {
    let includeLocation: any[]
    let statusQuery: object

    if (location) {
      includeLocation = [{ model: LocationModel, where: { name: location } }]
    }

    if (status) {
      statusQuery = {
        status: status,
      }
    }

    let sortByValue: any
    sortByValue = Object.values(req.query)[0]!
    console.log(sortByValue)
    if (
      (sortByValue && sortByValue === 'firstName') ||
      sortByValue === 'gender' ||
      sortByValue === 'lastName'
    ) {
      const characters = await CharacterModel.findAll({
        where: statusQuery && statusQuery,
        include: includeLocation && includeLocation,
        order: [[sortByValue, 'ASC']],
      })

      return res.json(characters)
    }
    res.status(404).json({
      message: 'No record Match',
    })
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
    console.log(err)
  }
}

export const getCharacterEpisodes: RequestHandler = async (req, res) => {
  const characterId = req.params.characterId

  try {
    const character = await CharacterModel.findOne({
      where: { id: characterId },
    })
    if (!character) return res.status(404).json({ message: 'Not found' })
    const episodes = await character.getEpisodes()
    res.json(episodes)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
    console.log(err)
  }
}
