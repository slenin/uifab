class Response {
  constructor() {
    this.error = null;
  }

  setError = (error, responseErrors) => {
    this.error = {
      status: error.response.status,
      data: error.response.data,
    };

    this.error.message = this.mapError(responseErrors);
  }

  mapError = (responseErrors) => {
    if (this.error && responseErrors) {
      const { status } = this.error;
      if (status === 400 && responseErrors.badRequest) {
        return responseErrors.badRequest;
      }

      if (status === 401 && responseErrors.unauthorized) {
        return responseErrors.unauthorized;
      }

      if (status === 403 && responseErrors.forbidden) {
        return responseErrors.forbidden;
      }

      if (status === 404 && responseErrors.notFound) {
        return responseErrors.notFound;
      }

      if (status === 409 && responseErrors.conflict) {
        return responseErrors.conflict;
      }

      if (status === 412 && responseErrors.preconditionFailed) {
        return responseErrors.preconditionFailed;
      }

      if (responseErrors.unknown) {
        return responseErrors.unknown;
      }
    }

    if (this.error) {
      return this.error.message;
    }

    return null;
  }
}

export default Response;
