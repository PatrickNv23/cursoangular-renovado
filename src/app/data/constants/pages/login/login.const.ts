import { ERROS_VALIDATIONS } from "@data/constants/errors/errors-validations.const";
import { ENUM_VALIDATION_OPTIONS } from "@data/enums";
import { IField } from "@data/interfaces"
import { ValidationsService } from "@shared/services/validations/validations.service";

export const CONST_LOGIN_PAGE: {
  FORM: {
    email: IField;
    password: IField;
  }
} = {
  FORM: {
    email: {
      value: '',
      error: ERROS_VALIDATIONS.EMAIL_REQUIRED_FIELD,
      isValid() {
        const validationsService = new ValidationsService();
        const validateEmail = validationsService.validateField(this.value, ENUM_VALIDATION_OPTIONS.EMAIL);
        this.error = validateEmail.message;
        return validateEmail.isValid;
      }
    },
    password: {
      value: '',
      error: ERROS_VALIDATIONS.PASSWORD_REQUIRED_FIELD,
      isValid() {
        const validationsService = new ValidationsService();
        const validatePassword = validationsService.validateField(this.value, ENUM_VALIDATION_OPTIONS.PASSWORD);
        this.error = validatePassword.message;
        return validatePassword.isValid;
      }
    }
  }
}