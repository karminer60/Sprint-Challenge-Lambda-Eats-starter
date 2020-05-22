import * as yup from 'yup'


const formSchema = yup.object().shape({
  username: yup.string()
    .trim()
    .min(2, 'The username must be at least three characters long')
    .required('The username is a required field'),
  special: yup.string(),
    
  toppings: yup.string().required('The role is a required field'),
    
  password: yup.string()
    .trim()
    .min(5, 'The password must be at least five characters long')
    .required('The password is a required field'),
})

export default formSchema