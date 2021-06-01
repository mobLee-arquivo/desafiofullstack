import { Button, Card, CardContent, TextField, Typography } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
// @ts-ignore
import { FormikTextField } from 'formik-material-fields';
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

  const [questions, setQuestions] = React.useState<any[]>([]);
  const classes = useStyles();


  const handleSubmit = async (values: any) => {
    fetch('http://localhost:5000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        query: `
        { fetchQuestions(tag: "${values.tag}", sort: "${values.sort}", limit: "${values.limit}", score: "${values.score}"){
        title
          link
          question_id
          owner {
            user_id
            display_name
          }
        }
        }
        `
      })
    })
    .then( res => res.json())
    .then( res => {
      setQuestions(res.data.fetchQuestions)
    });
  }

  return <> 
  <Card className={classes.search_form_card}>
      <CardContent>
          <Typography>Buscar na API</Typography>
          <Formik
            initialValues={initialData}
            validationSchema={FormSchema}
            onSubmit={handleSubmit}>
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
  </Card>
   <div>
   {questions && questions.map( (el, indx) => <Card style={{marginBottom: 10}} key={indx}>
        <CardContent>
          <Typography variant="h4"><a href={el.link}>{el.title}</a></Typography>
        </CardContent>
      </Card>)}
   </div>
  </>;
}

export default SearchForm;