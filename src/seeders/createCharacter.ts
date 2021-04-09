import CharacterModel, { Gender, Status } from '../models/Character'

async function createCharacters() {
  try {
    await CharacterModel.bulkCreate([
      {
        firstName: 'John',
        lastName: 'Doe',
        status: Status.ACTIVE,
        stateOfOrigin: 'Lagos',
        gender: Gender.MALE,
        created: new Date(),
      },
      {
        firstName: 'Mark',
        lastName: 'Kings',
        status: Status.UNKNOWN,
        stateOfOrigin: 'Kano',
        gender: Gender.MALE,
        created: new Date(),
      },
      {
        firstName: 'Ada',
        lastName: 'Matthew',
        status: Status.ACTIVE,
        stateOfOrigin: 'Abuja',
        gender: Gender.FEMALE,
        created: new Date(),
      },
    ])
    // console.log(character.get())
    console.log('character created')
  } catch (err) {
    console.log('could not create character ', err)
  }
}

export default createCharacters
