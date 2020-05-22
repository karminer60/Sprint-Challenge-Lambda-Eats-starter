import * as yup from 'yup'


const formSchema = yup.object().shape({
  username: yup.string()
    .trim()
    .min(3, 'The username must be at least three characters long')
    .required('The username is a required field'),

    toppings: yup.string().required('Toppings is a required field'),
    
  password: yup.string()
    .trim()
    .min(5, 'The password must be at least five characters long')
    .required('The password is a required field'),
})

export default formSchema