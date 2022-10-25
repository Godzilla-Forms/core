import {
	GodzillaConditions,
	GodzillaFormType,
	GodzillaItemTypes,
	GodzillaValueSource,
} from './godzilla.enum';

export interface GodzillaFormCombinedValues {
	label: string;
	value: string;
}

export interface GodzillaForm {
	id?: string;
	title?: string;
	style: GodzillaFormStyle;
	pages: GodzillaFormPage[];
}

export interface GodzillaFormStyle {
	type: GodzillaFormType;
	showSubmitButton?: boolean;
	submitLabel?: string;
	nextLabel?: string;
	previousLabel?: string;
}

export interface GodzillaFormPage {
	id: string;
	title: string;
	controls: GodzillaFormControls[];
}

export interface GodzillaFormControls {
	id: string;
	label?: string;
	placeholder?: string;
	subheader?: string;
	value: GodzillaFormControlValues;
	type: GodzillaItemTypes;
	options?: GodzillaFormControlOptions;
	file?: GodzillaFileControl;
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

export interface GodzillaFileControl {
	multiple: boolean;
}

export interface GodzillaFormControlValues {
	defaultValue: string | boolean;
	valueOptions?: GodzillaFormCombinedValues[];
	serviceName?: string;
	valueSource?: GodzillaValueSource;
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

export const defaultStyleValues: GodzillaFormControlStyle = {
	col: 12,
};

export interface GodzillaFormControlValidator {
	pattern?: string;
	required?: boolean;
	min?: number;
	max?: number;
	minLength?: number;
	maxLength?: number;
	maxSize?: number;
	allowedTypes?: string;
}

export interface GodzillaFormControlErrors {
	pattern?: string;
	required?: string;
	min?: string;
	max?: string;
	minLength?: string;
	maxLength?: string;
}
