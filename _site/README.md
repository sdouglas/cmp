codename: biscuit
=================

Jekyll Site for CMP

The publications page is dynamically generated (i.e. created in the browser) so that it will always reflect the latest faculty publications.

1. Start with PubMed search for authors that are CMP faculty --

	http://www.ncbi.nlm.nih.gov/pubmed?cmd=Search&amp=&term=((Correia,+Maria+Almira%5BAuthor%5D)+OR+(Fujimori,+Danica+Galonic%5BAuthor%5D)+OR+(Mullins,+Dyche%5BAuthor%5D)+OR+(Bourne,+Henry%5BAuthor%5D)+OR+(Ingraham,+Holly%5BAuthor%5D)+OR+(Taunton,+Jack%5BAuthor%5D)+OR+(Wells,+James%5BAuthor%5D)+OR+(Lansman,+Jeffry%5BAuthor%5D)+OR+(Weissman,+Jonathan%5BAuthor%5D)+OR+(Yamamoto,+Keith%5BAuthor%5D)+OR+(Shokat,+Kevan%5BAuthor%5D)+OR+(Brinen,+Linda%5BAuthor%5D)+OR+(Kruidering-Hall,+Marieke%5BAuthor%5D)+OR+(Krogan,+Nevan%5BAuthor%5D)+OR+(Nicoll,+Roger%5BAuthor%5D)+OR+(Vale,+Ronald%5BAuthor%5D)+OR+(Douglas,+Shawn+M%5BAuthor%5D)+OR+(Masters,+Susan%5BAuthor%5D)+OR+(Lim,+Wendell%5BAuthor%5D))+AND+san+francisco%5BAffiliation%5D

	and RSS version of that (3? results)
	http://www.ncbi.nlm.nih.gov/entrez/eutils/erss.cgi?rss_guid=1zkXoYKOt-8r56iXAxrFF5xOmHPRKuOCMzE7OjB6mxfBfMSkkV 
	
	(50 results)
	http://www.ncbi.nlm.nih.gov/entrez/eutils/erss.cgi?rss_guid=1PYHLDX9h5igF3Y8eoj8jxnoahEZFuunqtPvBXOVAZxTYVwsH3
	
	The url will need to be updated when faculty change.
 
2. Use Yahoo! Pipes service to take the RSS as input. Byron created the pipe from his account and can edit it, but its output is publicly accessible. By requesting the Pipe output with '&_render=JSON_', we can pull it into the browser as JSON, which is probably enough convenience to justify the indirectness of using the pipe. But we get additional value from it by applying a string tokenizer in the pipe process to break apart the 'description' section (added to the output as 'cmpresults' in the JSON), which is the only place to get the journal name ('author', 'title', and 'link' are available directly from the JSON-ified version of the RSS without any further manipulation).

3. Since the source is Yahoo, I've modified an example script from them showing how to work with pipe output, meaning the page loads Yahoo's YUI library for ease of interaction with AJAX, JSON, page HTML, and templating. (It could probably be rewritten in jQuery, since that library is already loaded for other use on the site, but not sure performance gains would be worth the hassle). Script is inline in publication page. It loops results through a template string to insert list <li>'s into output <div>.