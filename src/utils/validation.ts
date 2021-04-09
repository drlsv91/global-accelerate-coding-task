export function validateCommentData(
  comment: string,
  ipAddressLocation: string,
  created: string,
) {
  const errors = {}
  if (!comment) {
    errors['comment'] = 'comment field cannot be empty'
  } else if (comment.length > 249) errors['comment'] = 'comment text too long'
  else if (!ipAddressLocation)
    errors['ipAddressLocation'] = 'ipAddressLocation field cannot be empty'
  else if (!created) errors['created'] = 'created field cannot be empty'

  return Object.keys(errors).length === 0 ? null : errors
}
