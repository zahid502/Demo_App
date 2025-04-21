import {FormikValues} from 'formik';
import * as Yup from 'yup';
interface Field {
  label: string;
  placeholder: string;
  name: keyof FormikValues;
}

const paymentSchema = Yup.object().shape({
  billingName: Yup.string()
    .required('Billing Name is required.')
    .trim('Billing Name contain only of spaces.'),
  // cardNumber: Yup.string()
  //   .required('Card Number is required.')
  //   .trim('Card Number cannot contain only of spaces.'),
  // expiryDate: Yup.string()
  //   .required('Expiry Date is required.')
  //   .trim('Expiry Date cannot contain only of spaces.'),
  // cvv: Yup.string()
  //   .required('CVV is required.')
  //   .length(3, 'CVV must be 3 digits.')
  //   .trim('CVV cannot contain only of spaces.'),
});

const addUserDetailSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First Name is required.')
    .trim('First Name cannot contain only spaces.'),
  lastName: Yup.string()
    .required('Last Name is required.')
    .trim('Last Name cannot contain only spaces.'),
  email: Yup.string()
    .required('Email is required.')
    .email('Enter a valid email address.')
    .trim('Email cannot contain only spaces.'),
  dateOfBirth: Yup.string()
    .required('Date of Birth is required.')
    .trim('Date of Birth cannot contain only spaces.'),
  govtId: Yup.string()
    .required('Government ID is required.')
    .matches(/^\d{9}$/, 'Government ID must be exactly 9 digits.')
    .trim('Government ID cannot contain only spaces.'),
  country: Yup.string()
    .required('Country is required.')
    .trim('Country cannot contain only spaces.'),
  state: Yup.string()
    .required('State is required.')
    .trim('State cannot contain only spaces.'),
  city: Yup.string()
    .required('City is required.')
    .trim('City cannot contain only spaces.'),
  address: Yup.string()
    .required('Address is required.')
    .trim('Address cannot contain only spaces.'),
  postalCode: Yup.string()
    .required('Postal Code is required.')
    .matches(/^\d{5}$/, 'Postal Code must be exactly 5 digits.')
    .trim('Postal Code cannot contain only spaces.'),
});

const createStepValidationSchema = (fields: Field[]) => {
  const schemaShape: Record<string, Yup.Schema<any>> = {};

  fields.forEach(field => {
    switch (field.name) {
      case 'firstName':
      case 'lastName':
        schemaShape[field.name] = Yup.string()
          .required(`${field.label} is required.`)
          .trim(`${field.label} cannot contain only spaces.`);
        break;
      case 'email':
        schemaShape[field.name] = Yup.string()
          .required('Email is required.')
          .email('Enter a valid email address.')
          .trim('Email cannot contain only spaces.');
        break;
      case 'dateOfBirth':
        schemaShape[field.name] = Yup.string()
          .required('Date of Birth is required.')
          .trim('Date of Birth cannot contain only spaces.');
        break;
      case 'govtId':
        schemaShape[field.name] = Yup.string()
          .required('National ID is required.')
          .matches(/^\d{9}$/, 'National ID must be exactly 9 digits.')
          .trim('National ID cannot contain only spaces.');
        break;
      case 'country':
      case 'state':
      case 'city':
      case 'address':
        schemaShape[field.name] = Yup.string()
          .required(`${field.label} is required.`)
          .trim(`${field.label} cannot contain only spaces.`);
        break;
      case 'postalCode':
        schemaShape[field.name] = Yup.string()
          .required('Postal Code is required.')
          .matches(/^\d{5}$/, 'Postal Code must be exactly 5 digits.')
          .trim('Postal Code cannot contain only spaces.');
        break;
      default:
        schemaShape[field.name] = Yup.mixed().notRequired(); // Handle unexpected fields gracefully
        break;
    }
  });

  return Yup.object().shape(schemaShape);
};

const signInSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required.')
    .matches(/^\S*$/, 'Email cannot contain spaces.')
    .email('Invalid email format.'),
  password: Yup.string()
    .required('Password is required.')
    .matches(/^\S*$/, 'Password cannot contain spaces.'),
});

const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required.')
    .matches(/^\S*$/, 'Email cannot contain spaces.'),
  password: Yup.string()
    .required('Password is required.')
    .matches(/^\S*$/, 'Password cannot contain spaces.')
    .min(8, 'Password must be at least 8 characters.'),
  confirmPassword: Yup.string()
    .required('Confirm Password is required.')
    .oneOf([Yup.ref('password')], 'Confirm Password must match.')
    .matches(/^\S*$/, 'Confirm Password cannot contain spaces.'),
});

export {
  paymentSchema,
  addUserDetailSchema,
  createStepValidationSchema,
  signInSchema,
  signUpSchema,
};
