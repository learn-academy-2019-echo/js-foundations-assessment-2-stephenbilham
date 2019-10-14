# ASSESSMENT 2: FOUNDATIONS OF JAVASCRIPT
## Interview Practice Questions

### Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

Consider the function:

var text = 'outside'
function logIt(){
  console.log(text)
  var text = 'inside'
}
logIt()


1a. Look at this Javascript function and try to predict what the console show.

I predicted that it would either print outside or print a syntax error. 


1b. Test the function. Explain why the function returned what it did.

  Your answer: I predicted that it would either print outside or print a syntax error.
  First, the reasoning behind why I thought it would print 'outside' was that runIt would run the fuction and before tex got reassigned it would print 'outside.'
  Secondly, I thought there could be an error due to the reassigned location -- if it was above the console.log it would print 'inside'
  but since its below it was undefined. 


  Researched answer: It printed undefined -- due to the reassigned location. 


2. What is JSON?

  Your answer: JavaScript Object N.... (not entirely sure about the meaning)

  Researched answer:  JavaScript Object Notation! JSON data is written as name/value pairs, just like JavaScript object properties.
  A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:
  
  It is a fomat used of storing and transporting data.
  
  Within our class, we have used it mostly to store names: dates: type: location: etc...
  to maniputlate the final code when inputting different info without rewriting everything. 


3. What does CRUD stand for?

  Your answer: functions a website should do (4 important ones) 1. Create 2.read 3. U... 4. delete

  Researched answer: From class notes.
  
The basic actions a website should be able to do:
C - Create
R - Read
U - Update
D - Delete



4. What does are the 5 HTTP verbs?

  Your answer: I don't know. I just know they go hand and hand with CRUD.

  Researched answer:
  The HTTP verbs comprise a major portion of our “uniform interface”
  constraint and provide us the action counterpart to the noun-based resource. 
  
Get - read, simplest type of request
Post - create, usually filling out a form
Put - update/replace
Patch - update/modify
Delete
HTTP transfers info as strings




5. What is a higher-order function?

  Your answer: A function that takes in another function. 

  Researched answer: A higher-order function is simply a function that either takes in another function 
  as an argument or returns another function.
  
  .map()
  .filter()
  

6. STRETCH: What is a closure, what is it good for and how do you recognize one?

  Your answer:no idea

  Researched answer:
  A closure is the combination of a function bundled together (enclosed) with references to
  its surrounding state (the lexical environment). In other words, a closure gives you access to an
  outer function’s scope from an inner function. 
  In JavaScript, closures are created every time a function is created, at function creation time.
  
  
  from my understanding, it was a function within a function 
  who's inner function could access the orginal function's purpose? 


7. STRETCH: What is an API?

  Your answer: ... 

  Researched answer:
Application Programs Interface, the process of getting data from a website that is returned 
in JSON An API is a data to data interface, does not have any markup, just generates information
Websites have pages, APIs have endpoints




### Additional Feedback Questions.

1. Do you have a suggestion for a Check In question?

No, I did like this assesmment. We don't review terminology of this sort often and honesly I didn't know most of 
the questions above. Some I knew how to do without even knowing the name of what i was doing. example, JSON. 


2. What was your favorite topic this week?

I liked the Intro to react and am excited to get better at it. 

3. What was your "A-ha!" moment this week?

I was getting better at understanding JS code and relations more toward the end of the week! 