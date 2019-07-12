# Fortune Teller
### Set the scene

##### Inside `index.html`
* Add an `<h1>` heading that says something like I CAN SEE THE FUTURE!
* Add an image of something related to a fortune teller. Maybe a crystal ball, a picture of a fortune teller, a wand, magical light?

##### Inside `style.css`
* Change the color of your `h1` to something else. If you would like to use a hex color, google "hex color picker" to find a good one :).
* Change the background color of the page to use a `linear-gradient()`. Check out this [link](https://www.w3schools.com/css/css3_gradients.asp) if you forgot how to do it. **HINT**: Notice that `linear-gradient()` is used on `background` not `background-color`. Try adding 3 or 4 colors!
* If you are having trouble getting the gradient to go across the whole page. Try adding `background-attachment: fixed;`.
* Let's use the [hover](https://www.w3schools.com/cssref/sel_hover.asp) selector. Try adding this

            
            h1:hover {
               background-color: #ffee00;
            }
            
 Now, hover your mouse over the `h1`!
 
##### Inside `script.js` file.
* Ask the user: "Pick a color: yellow or purple". 
* Save this in a variable called `color`.
* If the color is yellow `alert()` the user: "You will have a happy life!!"
* Else if the color is purple `alert()` the user: "There is great danger in your future!"
* Else, `alert()` "Sorry, you did not follow the rules!"

##### Kick it up a notch!!
* After asking the user to pick yellow or purple, ask them to pick a number: 1, 2, 3, or 4. 
* Save this new prompt in a variable called `number`
* Now, get rid of your old if/else statements from above, let's rewrite them.
* If the number is equal to 2 AND the color is equal to purple, `alert()` the user: "You will have a happy life!"
  * Check to see if it works
* Else if the number is 1 AND the color is purple, `alert()` the user: "There is great danger in your future!"
  * Check to see if it works
* Else if the number is 3 OR the color is yellow, `alert()` the user: "You will meet your soulmate today!"
  * Check to see if it works
* Else if the number is 4 AND the color is purple, `alert()` the user: "Stay away from the color blue today."
  * Check to see if it works
* Else, `alert()` "Sorry, you did not follow the rules!"
  * Check to see if it works
  
### Finish Early?
* Make your fortune teller unique by asking more/different questions!!
