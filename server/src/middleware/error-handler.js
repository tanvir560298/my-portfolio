export function notFoundHandler(request, response) {
  response.status(404).json({ success: false, message: 'Endpoint not found.' })
}

export function errorHandler(error, request, response, next) {
  if (response.headersSent) {
    next(error)
    return
  }

  console.error(error)
  response.status(500).json({
    success: false,
    message: 'The server could not process the request.',
  })
}
