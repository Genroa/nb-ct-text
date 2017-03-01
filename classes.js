import { Content, ContentTypes, ContentCreationOptions } from 'meteor/genroa:nb-ct-base';

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
		}
	},

	helpers: {
		getTemplateName : function(obj) {
			return "text_content_template";
		}
	}
});


ContentTypes["TextContent"] = TextContent;

// Create text block but hide it from content management : onyl edit it in page
ContentCreationOptions["create_inline_text_block"] = {
	name: "Créer un bloc de texte",
	description: "Créer un bloc de texte simple dans la page : ne crée pas de contenu éditable dans le panneau d'administration.",
	formTemplate: "creating_inline_text_block_template",
	action: function(parameters) {
	
	}
};

// Create text block content, editable from content management
ContentCreationOptions["create_content_text_block"] = {
	name: "Créer un contenu textuel",
	description: "Créer un contenu textuel : ce contenu sera gérable dans le panneau d'administration, et pourra être inséré dans d'autres pages.",
	formTemplate: "creating_content_text_block_template",
	action: function(parameters) {
	
	}
};