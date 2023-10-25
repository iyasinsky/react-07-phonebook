import * as Yup from 'yup';
import 'yup-phone-lite';

export const formValidationScheme = Yup.object().shape({
  name: Yup.string().required(),
  phone: Yup.string().phone('UA').required(),
});
