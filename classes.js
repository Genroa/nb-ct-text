import { Class } from 'meteor/jagi:astronomy';
import { Content } from 'meteor/genroa:nb-ct-base';

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
		canBeCreated: {
			type: Boolean,
			default: function() {return true;}
		},
		text: {
			type: String,
			default: function() {return "";}
		}
	},

	helpers: {
		getTemplateName : function(obj) {
			return "text_content_template";
		}
	}
});