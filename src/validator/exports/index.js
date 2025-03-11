const { ExportNotesPayloadSchema } = require('./schema');
const InvarianError = require('../../exceptions/InvariantError');

const ExportsValidator = {
  validateExportNotesPayload: (payload) => {
    const validationResult = ExportNotesPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvarianError(validationResult.error.message);
    }
  }
};

module.exports = ExportsValidator;