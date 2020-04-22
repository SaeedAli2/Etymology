# Philosophy book website
This website contains inspirational quotes alongside displaying a list of books that I have read and those I have yet to read. It is beneficial as I can use this in the future and make regular updates as my book library increases. Furthermore, as I become more knowledgable in regards to coding, I can implement many additional features which will be pleasing to me when I look through the collection. It is a website which will hopefully be regularly updated even after the submission for the assignment.
## Layout
- I made use of floats, grid and flexbox throughout the website. The floats were used for the book sections to lay them out side by side. And for the sections underneath so that they displayed correctly in the required position.
- The grid layout was used for the book containers and enabled me to change the number of books displayed per column depending on the size of the page using grid template columns.
- Flexbox was used for the further reading section to display the evenly spaced circles. 
## Testing 
- Showed the website to family members and friends which enabled me to improve features and enhance website usability. This was done by acknowledging how best to layout the site alongside allowing the site to have a consistent colour scheme.
- Regularly validated website for html and css errors and fixed these as I went along to prevent many bugs appearing once the website had been completed.
- Had an issue with the submit button not working which was due to the quotes section having a position of fixed instead of absolute. This resolved the issue but then caused another issue of a horizontal scroll briefly appearing on the page due to hover effects on the original quotes. Both of these issues were then completely resolved by keeping the quotes as fixed and then making the submit button position as sticky.
- There was an issue where the scroll to the top of the page javascript was being disabled due to pausing the rotation of the API. This was due to using window onscroll twice and with only one variable assigned to it. To resolve this issue an event listener was added to the API rotation which prevented the two from clashing. The only issue which I struggled to resolve was how to resume the API rotation after it had been paused. It pauses after scrolling a value of 700 pixels from the top of the page however does not continue rotating once you scroll back up. An else statement was attempted as well as a separate function but both failed to restart the rotation and so were removed from the javascript. It must be noted that there are no javascript errors in the console with or without this resume function and all functions work correctly. The reason for pausing the rotation is so that the page is prevented from constantly scrolling up and down when viewing the rest of the sections since certain quotes are longer than others. 
- If the API data fails to populate the quote section then you just need to open the link to the API in a separate tab. This is a very rare occurence but may be neccessary since the API needs to be woken up. Nonetheless, the original quotes continue to rotate and the functionality of the website remains unhindered. 
## References
- API data taken from [here](https://philosophy-quotes-api.glitch.me/quotes).
- Async/await using fetch adapted from [here](https://www.youtube.com/watch?v=h6Zo8cxCFoY).
- Gradient effect for philosophical quotes inspired from [here](https://www.youtube.com/watch?v=dhLcyBCJ0r4).
- Git solutions implemented from [here](https://www.atlassian.com/git/tutorials/using-branches).
- Scroll event listener adapted from [here](https://stackoverflow.com/questions/12522807/scroll-event-listener-javascript).
- Gained beneficial knowledge from all labs, lectures and tutorials.
- Gained insight into different applications of each front-end language from [w3schools](https://www.w3schools.com/).
- All the images apart from the book images were taken from [Unsplash](https://unsplash.com/).
- Images for the book covers were taken from [Amazon](https://www.amazon.co.uk/) and then reverse Google searched for greater image resolution.