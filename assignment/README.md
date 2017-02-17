# Assignment: Preparing for Midterm

## Introduction

For your [midterm project](https://github.com/CPLN690-MUSA610/midterm), you will
create a story map application. The midterm is due on March 6. The assignment for
Week 6 will have you gather data and think about functions in preparation for
the midterm. You are also welcome to get started on writing the midterm if you
want to get ahead.

## Task 1: Prepare Geographic Data

Think about what data you want to tell a story about. You can choose a dataset
from any of the following sources:

- Use data you've been working with for another class
- Find data from an open data repository (see [third party data repository](https://github.com/CPLN690-MUSA610/resources/blob/master/datasources.md)
for a few potential sources)
- Create your own dataset (check out [geojson.io](http://geojson.io))

### Data Requirements

- At least fifteen data points
- At least one property that can be used to filter the data and color the data
- GeoJSON format
- Points, line, and polygon are all fine
- Data should be real stuff (like, don't create your own dataset with fictional
locations)

## Task 2: Think About Slide Data

Your story will have multiple slides, each with a title, some additional text,
and geographic data. It might also need to contain information about how you will
filter or style the data for that particular slide. This kind of structure is
another type of data.

How will you represent this data that is about the slides? In slideModel.js,
write a brief example that shows what the data for one slide might look like.
Think about how it will be stored and read in Javascript (arrays, objects, etc.).

## Task 3: Write Function Signatures

This midterm project might be the largest Javascript application you have
written so far. An exciting milestone for sure. Since it is a larger
application, it might be helpful to step back and think about the project before
starting to write code.

In midtermFunctions.js, write short descriptions of the functions that will make
up your application. You don't need to write any of the code inside the functions
(yet) — just think about what the functions will do, what parameters you will
pass to them, and what they will return.

Example 1: Let's say we want to take a first and last name and return a single
string containing both first and last name.
```javascript
// take two strings and return them concatenated together
var combineNames = ???
```

Example 2: Let's take NO arguments and return an array of values.
```javascript
// This function should return an array
var produceArray = ???
```

Example 3: Let's take a number and an array and return nothing. Let's go
a bit further and write out some of the parts of the function we already
know.
```javascript
// This function takes a number (n) and an array and logs the array n times
var nValuesLogged = function(n: number, values: array) {};
```

Try this as an exercise in imagining the higher level structure of your
code. We're not writing javascript so much as outlining how our
javascript will be written. Try to describe your functions in terms of
the types of things you expect to put in and the types of things you
expect to get out.
1. number
2. string
3. array
4. object

Give any arguments passed into functions useful names. If no
arguments are passed in, explain what the function does in comment form.
Take a look at the example project this week for an idea about how you
might write your comments.

## Task 4: Write a Basic Application

Write the three specified functions in basicApplication.js. Test them out by opening
basicApplication.html.
