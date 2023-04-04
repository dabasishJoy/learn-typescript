# Learn-typescript

1: What is TypeScript?
a: TS is a programming language that overcomes some shotcomings of JavaScript such as Dynamic Typing.
b: TS is a superset of JS.
c: TS was introduced by Microsoft and added some additional features like compile time errors. that is developer can find errors during the development/ while JS is complining
d: TS provides static types so that unexpected behaviors of unit testing or gives an standard coding practice as same the strongly types language like c, C++, java etc

Transpilation of TS:
1: Browsers don't understand typScript codes, so it needs to be tranformed into JS, and to make sure that every old browsers also can understand the code so TS complier transpiles the TS code into vanilla JS code this process is called Transpilation.

Installation:
1: install typeScript globally and get the tsc command. Using tsc command we can complie .ts files and get the expected result.

First Program:
1: Create a .ts file
2: Perform transpilation using "tsc" command followed by the file name and rum compilation

Configure Compiler :
1: "tsc --init" to initialize a project -> get a tscconfig.json file
2: set target: specify the version of JS it will compiled
3: set rootDir: to take input file from this directory
4: set outDir: the generated output js file/ transpiled js file
5: removeComments: to make simplify the js file removing comments
6: noEmmitOnError: prevent transpilation with error

then run "tsc" command to transpile the tsc file

Debugging
1: enable source map-> which enables to get a map file to js file that will be used for debuggers
2: put a breakpoint in the code
3: create a launch.json file from debug section
4: Add ""preLaunchTask": "tsc: build - tsconfig.json" this configuration to tell the compiler to build on that json file
5: then run debug

AnyType:
If we declare a varible without type specified durig declaration, by default it will be as "any" type which is actually not the goal of TS, becaise JS has this feature by default.
so it is good practice to avoid the "any" type in TS. which is known as "inferring type"

caution: the implicit any type gives an error. This is best practise to have that.
