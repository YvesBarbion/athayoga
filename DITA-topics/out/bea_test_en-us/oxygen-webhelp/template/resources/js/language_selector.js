/*
 * LANG_CHOICES contains a list for every language. Every list should contain 6 strings:
 *   - The language code which appears in the URLs.
 *   - The name of the language, which will be displayed in the language selection box.
 *   - A footer text that will be added to every page of the mechanical manual. If this text contains the word INDEXURL, that word will be replaced by the URL of the terminal manual.
 *   - A footer text that will be added to every page of the terminal manual. If this text contains the word INDEXURL, that word will be replaced by the URL of the mechanical manual.
 *   - The text of the link that will be added at the top of the search page of the mechanical manual, pointing to the search page of the terminal manual with the same search query. If this text contains the word QUERY, that word will be replaced by the actual search query.
 *   - The text of the link that will be added at the top of the search page of the terminal manual, pointing to the search page of the mechanical manual with the same search query. If this text contains the word QUERY, that word will be replaced by the actual search query.
 */

$(document).ready(function () {
	var SITE_DIRS = ["mechanical", "terminal"];
	var LANG_CHOICES = [
		["de", "Deutsch", "Umschalten auf <a href=\"INDEXURL\"><img src=\"BASEPATH/oxygen-webhelp/template/resources/images/icon-display-dark_main.svg\" width=\"30px\"/></a>", 
		"Umschalten auf <a href=\"INDEXURL\"><img src=\"BASEPATH/oxygen-webhelp/template/resources/images/icon-machine_settings-dark-L_main.svg\" width=\"30px\"/></a>",
		"Suche nach \"QUERY\" in <img src=\"oxygen-webhelp/template/resources/images/icon-display-dark_main.svg\" width=\"30px\"/>", 
		"Suche nach \"QUERY\" in <img src=\"oxygen-webhelp/template/resources/images/icon-machine_settings-dark-L_main.svg\" width=\"30px\"/>"],
		["en", "English", "Switch to <a href=\"INDEXURL\"><img src=\"BASEPATH/oxygen-webhelp/template/resources/images/icon-display-dark_main.svg\" width=\"30px\"/></a>", "Switch to <a href=\"INDEXURL\"><img src=\"BASEPATH/oxygen-webhelp/template/resources/images/icon-machine_settings-dark-L_main.svg\" width=\"30px\"/></a>", "Search for \"QUERY\" in <img src=\"oxygen-webhelp/template/resources/images/icon-display-dark_main.svg\" width=\"30px\"/>", "Search for \"QUERY\" in <img src=\"oxygen-webhelp/template/resources/images/icon-machine_settings-dark-L_main.svg\" width=\"30px\"/>"],
		["pt", "português (Brasil)", 
		"Mudar para <a href=\"INDEXURL\"><img src=\"BASEPATH/oxygen-webhelp/template/resources/images/icon-display-dark_main.svg\" width=\"30px\"/></a>", 
		"Mudar para <a href=\"INDEXURL\"><img src=\"BASEPATH/oxygen-webhelp/template/resources/images/icon-machine_settings-dark-L_main.svg\" width=\"30px\"/></a>", 
		"Pesquisar \"QUERY\" em <img src=\"oxygen-webhelp/template/resources/images/icon-display-dark_main.svg\" width=\"30px\"/>", 
		"Pesquisar \"QUERY\" em <img src=\"oxygen-webhelp/template/resources/images/icon-machine_settings-dark-L_main.svg\" width=\"30px\"/>"],
		["nl", "Nederlands", 
		"Overschakelen naar <a href=\"INDEXURL\"><img src=\"BASEPATH/oxygen-webhelp/template/resources/images/icon-display-dark_main.svg\" width=\"30px\"/></a>", 
		"Overschakelen naar <a href=\"INDEXURL\"><img src=\"BASEPATH/oxygen-webhelp/template/resources/images/icon-machine_settings-dark-L_main.svg\" width=\"30px\"/></a>", 
		"Zoeken naar \"QUERY\" in <img src=\"oxygen-webhelp/template/resources/images/icon-display-dark_main.svg\" width=\"30px\"/>", 
		"Zoeken naar \"QUERY\" in <img src=\"oxygen-webhelp/template/resources/images/icon-machine_settings-dark-L_main.svg\" width=\"30px\"/>"],
		["es", "español", 
		"Cambiar a <a href=\"INDEXURL\"><img src=\"BASEPATH/oxygen-webhelp/template/resources/images/icon-display-dark_main.svg\" width=\"30px\"/></a>", 
		"Cambiar a <a href=\"INDEXURL\"><img src=\"BASEPATH/oxygen-webhelp/template/resources/images/icon-machine_settings-dark-L_main.svg\" width=\"30px\"/></a>", 
		"Buscar \"QUERY\" en <img src=\"oxygen-webhelp/template/resources/images/icon-display-dark_main.svg\" width=\"30px\"/>", 
		"Buscar \"QUERY\" en <img src=\"oxygen-webhelp/template/resources/images/icon-machine_settings-dark-L_main.svg\" width=\"30px\"/>"],
		["fr", "Français", 
		"Basculer vers <a href=\"INDEXURL\"><img src=\"BASEPATH/oxygen-webhelp/template/resources/images/icon-display-dark_main.svg\" width=\"30px\"/></a>", 
		"Basculer vers <a href=\"INDEXURL\"><img src=\"BASEPATH/oxygen-webhelp/template/resources/images/icon-machine_settings-dark-L_main.svg\" width=\"30px\"/></a>", 
		"Rechercher \"QUERY\" dans <img src=\"oxygen-webhelp/template/resources/images/icon-display-dark_main.svg\" width=\"30px\"/>", 
		"Rechercher \"QUERY\" dans <img src=\"oxygen-webhelp/template/resources/images/icon-machine_settings-dark-L_main.svg\" width=\"30px\"/>"], 
		["cs", "čeština", 
		"Přepnout na <a href=\"INDEXURL\"><img src=\"BASEPATH/oxygen-webhelp/template/resources/images/icon-display-dark_main.svg\" width=\"30px\"/></a>", 
		"Přepnout na <a href=\"INDEXURL\"><img src=\"BASEPATH/oxygen-webhelp/template/resources/images/icon-machine_settings-dark-L_main.svg\" width=\"30px\"/></a>", 
		"Hledat \"QUERY\" v <img src=\"oxygen-webhelp/template/resources/images/icon-display-dark_main.svg\" width=\"30px\"/>", 
		"Hledat \"QUERY\" v <img src=\"oxygen-webhelp/template/resources/images/icon-machine_settings-dark-L_main.svg\" width=\"30px\"/>"],
		["it", "italiano", 
		"Passa a <a href=\"INDEXURL\"><img src=\"BASEPATH/oxygen-webhelp/template/resources/images/icon-display-dark_main.svg\" width=\"30px\"/></a>", 
		"Passa a <a href=\"INDEXURL\"><img src=\"BASEPATH/oxygen-webhelp/template/resources/images/icon-machine_settings-dark-L_main.svg\" width=\"30px\"/></a>", 
		"Cerca \"QUERY\" in <img src=\"oxygen-webhelp/template/resources/images/icon-display-dark_main.svg\" width=\"30px\"/>", 
		"Cerca \"QUERY\" in <img src=\"oxygen-webhelp/template/resources/images/icon-machine_settings-dark-L_main.svg\" width=\"30px\"/>"],
		["lt", "lietuvių", 
		"Perjungti į <a href=\"INDEXURL\"><img src=\"BASEPATH/oxygen-webhelp/template/resources/images/icon-display-dark_main.svg\" width=\"30px\"/></a>", 
		"Perjungti į <a href=\"INDEXURL\"><img src=\"BASEPATH/oxygen-webhelp/template/resources/images/icon-machine_settings-dark-L_main.svg\" width=\"30px\"/></a>", 
		"Ieškoti \"QUERY\" iš <img src=\"oxygen-webhelp/template/resources/images/icon-display-dark_main.svg\" width=\"30px\"/>", 
		"Ieškoti \"QUERY\" iš <img src=\"oxygen-webhelp/template/resources/images/icon-machine_settings-dark-L_main.svg\" width=\"30px\"/>"],
		["pl", "polski", 
		"Przełącz na <a href=\"INDEXURL\"><img src=\"BASEPATH/oxygen-webhelp/template/resources/images/icon-display-dark_main.svg\" width=\"30px\"/></a>", 
		"Przełącz na <a href=\"INDEXURL\"><img src=\"BASEPATH/oxygen-webhelp/template/resources/images/icon-machine_settings-dark-L_main.svg\" width=\"30px\"/></a>", 
		"Szukaj \"QUERY\" w <img src=\"oxygen-webhelp/template/resources/images/icon-display-dark_main.svg\" width=\"30px\"/>", 
		"Szukaj \"QUERY\" w <img src=\"oxygen-webhelp/template/resources/images/icon-machine_settings-dark-L_main.svg\" width=\"30px\"/>"],
		["ro", "română", 
		"Comutare la <a href=\"INDEXURL\"><img src=\"BASEPATH/oxygen-webhelp/template/resources/images/icon-display-dark_main.svg\" width=\"30px\"/></a>", 
		"Comutare la <a href=\"INDEXURL\"><img src=\"BASEPATH/oxygen-webhelp/template/resources/images/icon-machine_settings-dark-L_main.svg\" width=\"30px\"/></a>", 
		"Căutare \"QUERY\" în <img src=\"oxygen-webhelp/template/resources/images/icon-display-dark_main.svg\" width=\"30px\"/>", 
		"Căutare \"QUERY\" în <img src=\"oxygen-webhelp/template/resources/images/icon-machine_settings-dark-L_main.svg\" width=\"30px\"/>"],
		["ru", "русский", 
		"Переключить на <a href=\"INDEXURL\"><img src=\"BASEPATH/oxygen-webhelp/template/resources/images/icon-display-dark_main.svg\" width=\"30px\"/></a>", 
		"Переключить на <a href=\"INDEXURL\"><img src=\"BASEPATH/oxygen-webhelp/template/resources/images/icon-machine_settings-dark-L_main.svg\" width=\"30px\"/></a>", 
		"Найти \"QUERY\" в <img src=\"oxygen-webhelp/template/resources/images/icon-display-dark_main.svg\" width=\"30px\"/>", 
		"Найти \"QUERY\" в <img src=\"oxygen-webhelp/template/resources/images/icon-machine_settings-dark-L_main.svg\" width=\"30px\"/>"],
		["tr", "Türkçe", 
		"Geçiş yap <a href=\"INDEXURL\"><img src=\"BASEPATH/oxygen-webhelp/template/resources/images/icon-display-dark_main.svg\" width=\"30px\"/></a>", 
		"Geçiş yap <a href=\"INDEXURL\"><img src=\"BASEPATH/oxygen-webhelp/template/resources/images/icon-machine_settings-dark-L_main.svg\" width=\"30px\"/></a>", 
		"Ara \"QUERY\" şurada <img src=\"oxygen-webhelp/template/resources/images/icon-display-dark_main.svg\" width=\"30px\"/>", 
		"Ara \"QUERY\" şurada <img src=\"oxygen-webhelp/template/resources/images/icon-machine_settings-dark-L_main.svg\" width=\"30px\"/>"],
		["zh", "中文", 
		"切换至 <a href=\"INDEXURL\"><img src=\"BASEPATH/oxygen-webhelp/template/resources/images/icon-display-dark_main.svg\" width=\"30px\"/></a>", 
		"切换至 <a href=\"INDEXURL\"><img src=\"BASEPATH/oxygen-webhelp/template/resources/images/icon-machine_settings-dark-L_main.svg\" width=\"30px\"/></a>", 
		"搜索 \"QUERY\" 在 <img src=\"oxygen-webhelp/template/resources/images/icon-display-dark_main.svg\" width=\"30px\"/>", 
		"搜索 \"QUERY\" 在 <img src=\"oxygen-webhelp/template/resources/images/icon-machine_settings-dark-L_main.svg\" width=\"30px\"/>"]// Last line should not end with a comma!
	];
	var AVAILABLE_LANGUAGES = []; // Leave empty. Array will be written by imgdedup.py
	
	var location_split = window.location.href.split('/');
	var mechanical_terminal_path_index = -1; // index of path element containing one of the elements of SITE_DIRS
	var site_index = -1; // Current active site index, refers to element of SITE_DIRS
	location_split.forEach(function(item, index) {
		SITE_DIRS.forEach(function(item2, index2) {
			if (item === item2) {
				mechanical_terminal_path_index = index;
				site_index = index2;
			}
		});
	});

	if (mechanical_terminal_path_index > -1) {
		var location_prefix = location_split.slice(0, mechanical_terminal_path_index).join('/');
		var lang_dir = location_split[mechanical_terminal_path_index + 1];
		var location_suffix = location_split.slice(mechanical_terminal_path_index + 2).join('/');
		
		var lang_index = -1; // index of selected language in LANG_CHOICES
		LANG_CHOICES.forEach(function(item, index) {
			if (item[0] === lang_dir) lang_index = index;
		});
		
		if (lang_index > -1) {
			// Selected language should always be on top of the list
			var lang_options = ["<option value=\"" + lang_index.toString() + "\" selected=\"selected\">" + LANG_CHOICES[lang_index][1] + "</option>"];
			LANG_CHOICES.forEach(function (item, index) {
				if (item[0] !== lang_dir && AVAILABLE_LANGUAGES.indexOf(item[0]) !== -1) {
					lang_options.push("<option value=\"" + index.toString() + "\">" + item[1] + "</option>");
				}
			});

			$(".wh_header_flex_container").append("<div id=\"lang_div\"><select id=\"lang_select\">" + lang_options.join('') + "<select></div>");

			$("#lang_select").change(function () {
				index = parseInt($("#lang_select").val());
				var new_lang_dir = LANG_CHOICES[index][0];
				if (new_lang_dir !== lang_dir) {
					window.location.assign([location_prefix, SITE_DIRS[site_index], new_lang_dir, location_suffix].join('/'));
				}
			});
			
			// Adding a reference to index page of other site at the bottom of this page.
			var base_path = [location_prefix, SITE_DIRS[site_index], lang_dir].join('/');
			var index_url = [location_prefix, SITE_DIRS[1 - site_index], lang_dir, "index.html"].join('/');
			$(".wh_content_area").append("<p style=\"text-align: center;\">" + LANG_CHOICES[lang_index][2 + site_index].replace("INDEXURL", index_url).replace("BASEPATH", base_path) + "</p>");

			
			// If this page is "search.html", add a link to the search page of the other site with the same search query.
			if (location_split[location_split.length - 1].lastIndexOf("search.html", 0) === 0) {
				var search_query = "";
				window.location.search.substr(1).split("&").forEach(function (i) {
					splitted = i.split("=");
					if (splitted[0] === "searchQuery") search_query = decodeURIComponent(splitted[1]);
				});
				if (search_query !== "") {
					var search_url = [location_prefix, SITE_DIRS[1 - site_index], lang_dir, location_suffix].join('/')
					var link_text = LANG_CHOICES[lang_index][4 + site_index].replace("QUERY", search_query)
					$(".wh_search_input").after("<div class=\"container-fluid\"><p style=\"text-align: right; margin: 1em 0;\"><a href=\"" + search_url + "\">" + link_text + " &raquo;</a></p></div>");
				}
			}
		}
	}
});
