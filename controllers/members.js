const { catchAsync } = require('../helpers')
const { endpointResponse } = require('../helpers/success')
const { ErrorObject } = require('../helpers/error')
const { getMembers } = require('../services/members')

module.exports = {
  get: catchAsync(async (req, res, next) => {
    try {
      const allMembers = await getMembers()
      endpointResponse({
        res,
        message: 'Members were retrieved successfully.',
        body: allMembers,
      })
    } catch (error) {
      next(
        new ErrorObject(
          `[Error retrieving members] - [members - get]: ${error.message}`,
          500,
        ),
      )
    }
  }),
}