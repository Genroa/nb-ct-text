import { Content, ContentTypes } from 'meteor/genroa:nb-ct-base';

TextContent = Content.inherit({
	name: "TextContent",
	
	fields: {
		humanName:{
			type: String,
			default: function() {return "texte formaté";}
		},
		className: {
			type: String,
			default: function() {return "TextContent";}
		},
		text: {
			type: String,
			default: function() {return "";}
		},
		creationFormTemplate: {
			type: String,
			default: function() {return "creating_new_text_content_template";}
		}
	},

	helpers: {
		getTemplateName : function(obj) {
			return "text_content_template";
		}
	}
});


ContentTypes["TextContent"] = TextContent;