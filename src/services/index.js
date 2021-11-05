import axios from 'axios'

// Public Endpoint: https://github.com/r-spacex/SpaceX-API/blob/master/docs/README.md

// Sample Payload:
//  [{
//   name: 'Robert Behnken',
//   agency: 'NASA',
//   image: 'https://imgur.com/0smMgMH.png',
//   wikipedia: 'https://en.wikipedia.org/wiki/Robert_L._Behnken',
//   launches: [ '5eb87d46ffd86e000604b388' ],
//   status: 'active',
//   id: '5ebf1a6e23a9a60006e03a7a'
//  }]
const getSpacexCrewMembers = async () => axios.get('https://api.spacexdata.com/v4/crew')

const getSpacexCrewMember = async id => axios.get(`https://api.spacexdata.com/v4/crew/${id}`)

module.exports = {
  getSpacexCrewMembers,
  getSpacexCrewMember,
}
