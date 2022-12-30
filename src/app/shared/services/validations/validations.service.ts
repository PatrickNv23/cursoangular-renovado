import { Injectable } from '@angular/core';
import { ERROS_VALIDATIONS } from '@data/constants/errors/errors-validations.const';
import { ENUM_VALIDATION_OPTIONS } from '@data/enums';
import { IResponseValidation } from '@data/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  validateField(value: any, type: ENUM_VALIDATION_OPTIONS) {
    switch (type) {
      case ENUM_VALIDATION_OPTIONS.EMAIL:
        return this.validateEmail(value);
      case ENUM_VALIDATION_OPTIONS.PASSWORD:
        return this.validatePassword(value);
    }
  }


  validateEmail(value: any): IResponseValidation {
    const response: IResponseValidation = {
      message: '',
      isValid: true
    }
    const pattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
    response.isValid = pattern.test(value);
    response.message = value === '' ? ERROS_VALIDATIONS.EMAIL_REQUIRED_FIELD : ERROS_VALIDATIONS.EMAIL_INVALID;
    return response;
  }

  validatePassword(value: any): IResponseValidation {
    const response: IResponseValidation = {
      message: '',
      isValid: true
    }
    const pattern = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
    response.isValid = pattern.test(value);
    response.message = value === '' ? ERROS_VALIDATIONS.PASSWORD_REQUIRED_FIELD : ERROS_VALIDATIONS.PASSWORD_REQUIRED_PATTERN;
    return response;
  }
}
