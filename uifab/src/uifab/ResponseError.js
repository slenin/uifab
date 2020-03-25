class ResponseError {
  constructor(status, data) {
    this.status = status;
    this.data = data;
  }

  map = (errors) => {
    if (errors) {
      if (this.status === 400 && errors.badRequest) {
        this.message = errors.badRequest;
      }

      if (this.status === 401 && errors.unauthorized) {
        this.message = errors.unauthorized;
      }

      if (this.status === 403 && errors.forbidden) {
        this.message = errors.forbidden;
      }

      if (this.status === 404 && errors.notFound) {
        this.message = errors.notFound;
      }

      if (this.status === 409 && errors.conflict) {
        this.message = errors.conflict;
      }

      if (this.status === 412 && errors.preconditionFailed) {
        this.message = errors.preconditionFailed;
      }

      if (errors.unknown) {
        this.messsage = errors.unknown;
      }
    }

    return this.message;
  }
}

export default ResponseError;
