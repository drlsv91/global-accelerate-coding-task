import CommentModel from '../models/Comment'

async function createComments() {
  try {
    await CommentModel.bulkCreate([
      {
        comment: 'this is a nice episode',
        ipAddressLocation: '192.0.0.8/32',
        created: new Date('7/8/2018'),
        episodeId: 1,
      },
      {
        comment: 'sweet episode',
        ipAddressLocation: '192.0.0.9/22',
        created: new Date('8/8/2020'),
        episodeId: 2,
      },
      {
        comment: 'nice episody',
        ipAddressLocation: '192.0.0.9/12',
        created: new Date(),
        episodeId: 2,
      },
    ])
    console.log('successfully created comment')
  } catch (err) {
    console.log(err)
  }
}

export default createComments
