export let validateForAtleastOneRelatedItem = ({ operation, addValidationError, resolvedData, fieldKey }) => {
  const field = resolvedData[fieldKey];
  if (operation == "create") {
    // We call addValidationError to indicate an invalid value.
    if (field === undefined || field === '') {
      addValidationError(`The ${fieldKey} field of a video cannot be empty`);
    }
  } else if (operation == "update") {
    // We call addValidationError to indicate an invalid value.
    if (field?.disconnect === true) {
      addValidationError(`The ${fieldKey} field of a video cannot be empty`);
    }
  }
}