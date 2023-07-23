import { Formik,Field , Form, ErrorMessage } from 'formik';
/* import * as yup from 'yup'; */

export const BasketRadioButtons = () => {
/*     const schema = yup.object().shape({
        type: yup.string().required(),
        contact: yup.number().required().positive().integer(),
      }); */

      const handleSubmit = () =>{console.log("BasketRadioButtons")};

    return(<>
          <Formik
        initialValues={{ contact: '', }}
        /* validationSchema={schema} */
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, isSubmitting }) => (
          <div>
            <Form onSubmit={handleSubmit}>
              <label htmlFor="name">
                Name
                <Field
                  type="text"
                  name="name"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer"
                />
                <ErrorMessage
                  name="name"
                  render={
                    <p>{'Incorrect name'}</p>
                  }
                />
              </label>
              <button type="submit" disabled={isSubmitting}>
                Add contact
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </>);
};