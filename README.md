# Random Colour Generator

This small Vanilla Javascript project is an example of how to combine random numbers and letters in a string and append the new combined string to DOM elements.

The process is quiet simple.

## 1.

First we create our variables using the most current variables syntax

```
const randBtn = document.getElementById('randBtn');
const background = document.getElementById('colorBox');
const hexCode = document.getElementById('hexCode');
```

This will allow us to grab elements from the DOM and make our desired changes. Keeping our variables at the top of our code will also help keep our code clean and organized.

## 2.

Next we will create our function that will generate a random 6 digit combination of capital letters and numbers, in our case we will be later appending them to DOM elements as if they were Hex Codes.

```
const getNewColor = () => {
  let newHexCode = '';
  const chars = '0123456789ABCDEF';
  const hexLength = 6;

  for (let i = 0; i < hexLength; i++) {
    let newHexChar = Math.floor(Math.random() * chars.length);
    newHexCode += chars.substring(newHexChar, newHexChar + 1);
  }

  return '#' + newHexCode;
};
```

The break down of this function is as such: <br>

#### 1.

Create a new arrow function using a `const` variable (because the function itself won't be chaning)

#### 2.

Create the variables we want scoped to only our new function

```
  let newHexCode = '';
  let chars = '0123456789ABCDEF';
  const hexLength = 6;
```

- The `newHexCode` will hold our new string of random numbers and letters
- `chars` is the numbers and letters that we will allow access to to create our Hex Code (Hex Codes only use numbers 1-9 and letters A-F)
- `hexLength` is the explicitly defined length of our new Hex Code. If we wanted to change our code to an RBGA code for example, we would need to change this variable as well

#### 3.

Create a `for loop` where we will generate our new 6 digit combination of letters and numbers

```
  for (let i = 0; i < hexLength; i++) {
    let newHexChar = Math.floor(Math.random() * chars.length);
    newHexCode += chars.substring(newHexChar, newHexChar + 1);
  }
```

- The conditions of the for loop `(let i = 0; i < hexLength; i++)` control how long the loop loops. In our case we will loop from 0 to 5 (6 digits, because in JavaScript we count in 0 based numbering or indexing, where in an index for example 0 would be the first item, 0 = 1)

- This is where the function gets tricky. First, we create a new variable that will hold a whole (`Math.floor()`), random (`Math.random()`) integrer that can only be the max length of our allowable characters in our `chars` variable
- Now we will use this random number and create a `substring` with an offset of our new random number, `newHexChar` and our new random number + 1 `newHexChar + 1`, this will basically pick a random spot in our `chars` variable and add that one character to our `newHexCode` string.

#### 4.

The last piece of our arrow function puzzle is to `return` our new value, with a hash symbol `#` in front of it so we know its explicit purpose - to be our new Hex Code!

## 3.

The final portion of our JavaScript to append a new Hex Code value to our DOM elements that we grabbed at the start of our code.

```

randBtn.addEventListener('click', function(event) {
 event.preventDefault();

 const audio = new Audio('./audio/ding.wav');
 const newDOMColor = getNewColor();

 hexCode.innerHTML = newDOMColor;
 background.setAttribute('style', 'background-color:' + newDOMColor);
 audio.play();
});


```

Here we have an `EventListener` waiting for the user to `click` on our button element in our DOM. On click, we perform a couple of actions.

- first we `preventDefault()` to stop the browser from performing any unforeseen actions when the user clicks the button
- second we add our ding sound effect with the `new Audio` class and add the corret path as an argument (in my case the path is `./audio/ding.wav`)
- third we create a variable to hold our new Hex Code and call it something semantic like `newDOMColor` and call our `getNewColor();` function
- last, but not least, we append our new Hex Code to the DOM elements by adding our `newDOMColor` variable to our `<p id='hexCode'>` and `<div id='colorBox' style= background-color:>` elements, and play our cool, custom .wav file.

And that is it folks! Now, if you coded along, you too can have your very own random Hex Code generator app!
