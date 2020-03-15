import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';

import Button from './Button';
import FormError from './FormError';
import FormContext from './FormContext';
import style from './style';

function Form(props) {
  const {
    action, actionVariant, className,
    errorFontSize, errorPosition, fields,
    initialValues, goBackOnSuccess, onSubmit,
    validationSchema,
  } = props;

  const history = useHistory();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        actions.setStatus(null);
        if (onSubmit) {
          const error = await onSubmit(values, actions);
          if (error) {
            actions.setStatus(error);
            actions.setSubmitting(false);
          } else if (goBackOnSuccess) {
            history.goBack();
          } else {
            actions.setSubmitting(false);
          }
        }
      }}
      render={(fprops) => (
        <form className={className} onSubmit={fprops.handleSubmit}>
          {errorPosition === 'top' && (
            <FormError
              fontSize={errorFontSize}
              mb={3}
              message={fprops.status}
              onClose={() => fprops.setStatus(null)}
            />
          )}
          <FormContext.Provider value={fprops}>
            {fields && fields(fprops)}
          </FormContext.Provider>
          {errorPosition === 'middle' && (
            <FormError
              fontSize={errorFontSize}
              my={3}
              message={fprops.status}
              onClose={() => fprops.setStatus(null)}
            />
          )}
          {action && typeof action === 'string' && (
            <Button
              mt={2}
              variant={actionVariant}
              text={action}
              type="submit"
              loading={fprops.isSubmitting}
            />
          )}
          {action && typeof action === 'function' && action(fprops)}
          {errorPosition === 'bottom' && (
            <FormError
              fontSize={errorFontSize}
              mt={3}
              message={fprops.status}
              onClose={() => fprops.setStatus(null)}
            />
          )}
        </form>
      )}
    />
  );
}

Form.propTypes = {
  action: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  actionVariant: PropTypes.string,
  className: PropTypes.string,
  errorFontSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  errorPosition: PropTypes.string,
  fields: PropTypes.func,
  goBackOnSuccess: PropTypes.bool,
  initialValues: PropTypes.shape({}),
  onSubmit: PropTypes.func,
  validationSchema: PropTypes.shape({}),
};

Form.defaultProps = {
  action: 'Submit',
  actionVariant: 'primary',
  className: null,
  errorFontSize: 'inherit',
  errorPosition: 'top',
  fields: null,
  goBackOnSuccess: false,
  initialValues: {},
  onSubmit: null,
  validationSchema: null,
};

export default style(Form);
