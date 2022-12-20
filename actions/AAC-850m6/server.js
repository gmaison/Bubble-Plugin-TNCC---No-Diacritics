function(properties, context) {

	str = properties.text;
	result = str.normalize("NFKD").replace(/[\u0300-\u036f]/g, "");
	return {simplified_text:result}

}