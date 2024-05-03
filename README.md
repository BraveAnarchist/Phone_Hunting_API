
# Phone Hunting API

A small project using a smartphone data api to display catalog of phones.


## 🛠 Skills
Javascript, HTML, CSS, TailWind.


## How I Did It
So I'm not gonna go through the html and css since they are basic. The challenge comes from the javascript. First problem I faced was I couldn't use await inside any scope besides the first level.
I made use functional programming which helped prevent repetitions.Function for getting data from API, function for rendering the data from API and so on.
forEach() has been used extensively to iterate through the array returned by the API.In the forEach() loop, everything from creating the HTML elements and putting the phone data into these HTML elements has been handled.