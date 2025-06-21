class SearchSuggestionSystem {
    constructor(products) {
        this.products = products.sort(); 
    }

    getSuggestions(searchWord) {
        const suggestions = [];
        let prefix = '';
        
        for (const char of searchWord) {
            prefix += char;
            const matched = [];
            
            for (const product of this.products) {
                if (product.startsWith(prefix)) {
                    matched.push(product);
                    if (matched.length === 3) break;
                }
            }
            
            suggestions.push(matched);
        }
        
        return suggestions;
    }
}

// Test case
const products = ["mobile","mouse","moneypot","monitor","mousepad"];
const searchWord = "mouse";
const suggestionSystem = new SearchSuggestionSystem(products);
console.log(suggestionSystem.getSuggestions(searchWord));
