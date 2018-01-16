walk(document.body);

function walk(node) {
	// I stole this function from here:
	// http://is.gd/mwZp7E
	var child, next;
	
	switch (node.nodeType) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;
		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)  {
	var v = textNode.nodeValue;
	
    v = v.replace(/\bBlockchain\b/g, "Ponzi Scheme");
	v = v.replace(/\bblockchain\b/g, "ponzi scheme");
	v = v.replace(/\bblockchains\b/g, "ponzi schemes");
	v = v.replace(/\bBlockchains\b/g, "Ponzi Schemes");
	v = v.replace(/\bcryptocurrency\b/g, "scam");
	v = v.replace(/\bCryptocurrency\b/g, "Scam");
	v = v.replace(/\bcrypto currency\b/g, "scam");
	v = v.replace(/\bCrypto Currency\b/g, "Scam");
	v = v.replace(/\bICO\b/g, "scam");

	textNode.nodeValue = v;
}