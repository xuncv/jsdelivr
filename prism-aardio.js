Prism.languages.aardio = {
	'comment': /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,
	// \z may be used to skip the following space
	'string': {
		pattern: /(["'`])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
		greedy: true
	},
	'number': /\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
	'keyword': /\b(?:begin|end|false|true|if|else|elseif|class|function|return|while|do|namespace|select|case|catch|try|for|in|this|global|self|owner|var|def|null|and|not|or|break|continue|import|with|ctor|try|catch|eval|import|type|assert|assertf|error|rget|loadcode|dumpcode|collectgarbage|call|tostring|topointer|tonumber|sleep|execute|setlocale|setprivilege|null)\b/,
	'function': /(?!\d)\w+(?=\s*(?:[({]))/,
	'operator': [
		/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,
		{
			// Match ".." but don't break "..."
			pattern: /(^|[^.])\.\.(?!\.)/,
			lookbehind: true
		}
	],
	'punctuation': /[\[\](){},;]|\.+|:+/
};
