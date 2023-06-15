# Concentration-Game

1. Prompt "Find the pairs!"
    initialize board
        board circles all set to null
        render board
2. User will pick a circle that will display a color/picture
    - document querySelectorAll (.circle)
   - userChoice addEventListener 'click', function
        - userChoice set attribute which will flip the circles(display the color/pic)

3. User will pick a second circle to display a color/circle
    - user choice will flip the circle again
4. If circle 1 and circle 2 match it will log out "Nice one can you find the rest?" and keep the circles faced up
    - if circle1 = circle 2 
    - log out "Nice one can you find the rest?"
5. If circle 1 and cicle 2 dont match it will log out "Try again!" and the circles will face down again.
    - else if circle 1 /= circle 2 
    - log out "Try Again"
6. If there are still remaing circles without a pair (aka face down circles) the game continues and the user will be prompted to "pick a circle and find the pair"
    - if circles = null
    - game continues
7. Once all cards are face up it will log out "Winner!"
    - if all circles have a corresponding match
    ex. circle 1 = circle 2
        circle 3 = circle 4
        circle 5 = circle 6
        circle 7 = circle 8
        circle 9 = circle 10
    - log out winner 
8. Play again button will pop up
    - render controls
    - play again button will pop up once winner is prompted
9. Resets the game board shuffles cards
    - function shuffle array
 