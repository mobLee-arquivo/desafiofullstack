import { Button, Card, CardContent, TextField, Typography } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
// @ts-ignore
import { FormikTextField } from 'formik-material-fields';
import { gql } from '@apollo/client';

import React from 'react';
import * as Yup from 'yup';
import useStyles from '../hooks/useStyles';

const FormSchema = Yup.object().shape({
    tag: Yup.string().required("Campo obrigatório"),
    limit: Yup.number(),
    score: Yup.number(),
    sort: Yup.string()
  })

const initialData = {
    tag: '',
    limit: '',
    sort: '',
    score: ''
}

const SearchForm: React.FC = () => {
  const classes = useStyles();

  return <Card className={classes.search_form_card}>
      <CardContent>
          <Typography>Buscar na API</Typography>
          <Formik
            initialValues={initialData}
            validationSchema={FormSchema}
            onSubmit={(values) => {
                console.log(values)
            }}>
              {({values, handleChange, handleSubmit}): React.ReactElement => (
                 <Form onSubmit={handleSubmit}>
                 <div>
                   <Field
                     name="tag"
                     type="text"
                     component={FormikTextField}
                     id="tag"
                     label="Tag"
                     style={{ margin: 8 }}
                     margin="normal"
                     variant="outlined"
                   />
                   <Field
                     name="limit"
                     type='number'
                     component={FormikTextField}
                     id="limit"
                     label="Limit"
                     style={{ margin: 8 }}
                     margin="normal"
                     variant="outlined"
                   />
                   <Field
                     name="score"
                     component={FormikTextField}
                     id="score"
                     label="Score"
                     style={{ margin: 8 }}
                     margin="normal"
                     variant="outlined"
                   />
                    <Field
                     name="sort"
                     component={FormikTextField}
                     id="sort"
                     label="Sort"
                     style={{ margin: 8 }}
                     margin="normal"
                     variant="outlined"
                   />
                 </div>
                 <Button type="submit" variant="contained" color="secondary">Buscar</Button>
               </Form>
              )}

          </Formik>
      </CardContent>
  </Card>;
}

export default SearchForm;