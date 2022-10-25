export enum GodzillaItemTypes {
	text = 'text',
	password = 'password',
	email = 'email',
	url = 'url',
	tel = 'tel',
	number = 'number',
	color = 'color',
	checkbox = 'checkbox',
	radio = 'radio',
	search = 'search',
	dropdown = 'dropdown',
	textarea = 'textarea',
	heading = 'heading',
	upload = 'upload',
}

export enum GodzillaValueSource {
	static = 'static',
	service = 'service',
}

export enum GodzillaFormType {
	classic = 'classic',
	pages = 'pages',
}

export enum GodzillaConditions {
	equal = 'equal',
	notEqual = 'notEqual',
	greaterThan = 'greaterThan',
	greaterThanOrEqual = 'greaterThanOrEqual',
	lessThan = 'lessThan',
	lessThanOrEqual = 'lessThanOrEqual',
	contains = 'contains',
	notContains = 'notContains',
	startsWith = 'startsWith',
	endsWith = 'endsWith',
	between = 'between',
	notBetween = 'notBetween',
	in = 'in',
	notIn = 'notIn',
	isNull = 'isNull',
	isNotNull = 'isNotNull',
	isTrue = 'isTrue',
	isFalse = 'isFalse',
	isNotEmpty = 'isNotEmpty',
	isEmpty = 'isEmpty',
}
