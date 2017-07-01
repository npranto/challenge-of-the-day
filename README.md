# challenge-of-the-day

Take on a coding problem(s), challenge(s) every day or so to stay active mentally and practice problem solving.

### Unit Testing W/ Mocha & Chai
Each challenge has been unit testes with mocha javascript testing framework. Chai assertion library also has been added to easily use assertion methods during tests

### Process

To setup unit testing with mocha and chai:

Install mocha as a development dependency
```
npm install --save-dev mocha
```

Install chai as a development dependency
```
npm install --save-dev chai
```

Add a 'test' script inside 'scripts' object of your package.json
```
"scripts": {
	"test": "mocha src/**/*.spec.js"		// mocha uses all files with extention '.spec.js' within 'src' directory for unit testing
},
```

