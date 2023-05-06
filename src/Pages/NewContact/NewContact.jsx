//css
import './NewContact.css'

//valid
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'

// for id
import {v4 as uuidv4} from 'uuid'
import { useNavigate } from 'react-router-dom'


const NewContact = () => {
    const initialValues = {
      id: uuidv4(),
      name: '',
      phone: '',
      email: '',
      avatar: '',
      gender: '',
      status: '',
      favorite: ''
    }

    const validationSchema = Yup.object().shape({
      name: Yup.string().required('Name is required'),
      phone: Yup.string().required('Phone is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      avatar: Yup.string().url('Invalid URL').required('Avatar is required'),
      gender: Yup.string().oneOf(['Men', 'Women'],'Invalid gender').required('Gender is required'),
      status: Yup.string().oneOf(['Work', 'Family','Private', 'Friends'],'Status gender').required('Status is required'),
      favorite: Yup.boolean()
    })

    const navigate = useNavigate();
    const handleSubmit = (values) => {
      console.log(values);
      navigate('/');
    };



    return(
      <div className='container'>
          <div className="rounded addPage shadow-lg">
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
              {({isSubmitting }) => (
                <Form >
                  <h1 className="text-center">Add new contact</h1>
                  <hr />
                  <div className='m-4'>
                    <Field className="form-control fs-5" placeholder='Name' type='text' name='name' />
                    <ErrorMessage component="p" className='text-danger position-absolute' name='name' />
                  </div>

                  <div className='m-4'>
                    <Field className="form-control fs-5" placeholder='Phone' type='text' name='phone' />
                    <ErrorMessage component="p" className='text-danger position-absolute'  name='phone' />
                  </div>

                  <div className='m-4'>
                    <Field className="form-control fs-5" placeholder='Email' type='text' name='email' />
                    <ErrorMessage component="p" className='text-danger position-absolute' name='email' />
                  </div>

                  <div className='m-4'>
                    <Field className="form-control fs-5" placeholder='Avatar' type='text' name='avatar' />
                    <ErrorMessage component="p" className='text-danger position-absolute' name='avatar' />
                  </div>

                  <div className='m-4'>
                    <Field className="form-control fs-5"  as='select' name='gender' >
                      <option value=''>Choose gender</option>
                      <option value='Men'>Men</option>
                      <option value='Women'>Women</option>
                    </Field>
                    <ErrorMessage component="p" className='text-danger position-absolute' name='gender' />
                  </div>

                  <div className='m-4'>
                    <Field className="form-control fs-5" as='select' name='status' >
                      <option value=''>Choose status</option>
                      <option value='Work'>Work</option>
                      <option value='Family'>Family</option>
                      <option value='Private'>Private</option>
                      <option value='Friends'>Friends</option>
                    </Field>
                    <ErrorMessage component="p" className='text-danger position-absolute' name='status' />
                  </div>
                  <div className='m-4 fs-5'>
                    <Field className='form-check-input m-1' type='checkbox' name='favorite' />
                    <label className='form-check-label' htmlFor='favorite'>Favorite</label>
                  </div>
                  
                  <div className='m-4'>
                  <button type='submit' className="btn btn-primary btn-lg form-control" disabled={isSubmitting}>Add</button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
      </div>


    )
}

export default NewContact