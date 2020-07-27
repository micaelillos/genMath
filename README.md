# What is this ?
Genmath is a next generation math libary that lets you have all your math commands in one simple package letting you focuse on the code while we focus on the math.

# Install

`npm i genmath --save`

# Usage 

## Nodejs
`const genmath = require('genmath')`

## Frontend js
`import {simple,factiorial} from 'genMath'`

## CDN
Coming soon  ...

## Function List
 ~ simple  //  does simple arithmetic (+,-,/,*)

 ~ factorial  // gets exact factorial

 ~ percentage // gets percentage %

### Example
`console.log(genmath.simple({ a:'5',b:'7',sign:'*'}))`
  a,b are numbers and sign is the arithmetic option.

`console.log(genmath.factorial(0.44))`
calculates 0.44! by Lanczos Approximation of the Gamma Function

`console.log(genmath.percentage(2,20))`
  gets percentage of 2 in 20

  ## More coming soon
