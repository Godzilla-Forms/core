import {GodzillaConditions, GodzillaItemTypes, GodzillaValueSource} from "./godzilla.enum";

export interface GodzillaFormCombinedValues {
  label: string;
  value: string;
}

export interface GodzillaFormControls {
  id: string;
  label?: string;
  placeholder?: string;
  subheader?: string;
  value: GodzillaFormControlValues
  type: GodzillaItemTypes;
  options?: GodzillaFormControlOptions;
  style?: GodzillaFormControlStyle;
  validators?: GodzillaFormControlValidator;
  errors?: GodzillaFormControlErrors;
  flow?: GodzillaFormControlFlow;
}

export interface GodzillaFormControlFlow {
  basedOn?: string;
  value?: string;
  condition?: GodzillaConditions;
}

export interface GodzillaFormControlValues {
  defaultValue: string | boolean;
  valueOptions?: GodzillaFormCombinedValues[];
  serviceName?: string;
  valueSource?: GodzillaValueSource;
  valueDataService?: string;
}


export interface GodzillaFormControlOptions {
  hidden?: boolean;
  disabled?: boolean;
}

export interface GodzillaFormControlStyle {
  floating?: boolean;
  col?: number;
  colXs?: number;
  colSm?: number;
  colMd?: number;
  colLg?: number;
  colXl?: number;
  colXxl?: number;
  customCss?: string;
}

export let defaultStyleValues: GodzillaFormControlStyle =
  {
    col: 12
  }

export interface GodzillaFormControlValidator {
  pattern?: string;
  required?: boolean;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
}

export interface GodzillaFormControlErrors {
  pattern?: string;
  required?: string;
  min?: string;
  max?: string;
  minLength?: string;
  maxLength?: string;
}

