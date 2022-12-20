function(instance, properties, context) {


	var str = properties.text;
	var result = str.normalize("NFKD").replace(/[\u0300-\u036f]/g, "");

	instance.publishState("cleaned_text", result);
	instance.triggerEvent("diacritics_removed")



}