# Concentration-Game
For JS
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

For CSS

1. For body add sizing, margins, font, background colors
2. For Header change font and zie
3. For the board arrange the rows and columns for the circles, add gaps in between circles
4. Add Play again button

For HTML
1. Header "Concentration Game"
2. H1 "Pick a circle and find the pair"
3. Section #Board 
    add 16 div slots for each card or circle
4. Button "Play Again"


 WIREFRAME
 https://excalidraw.com/#json=mvFKXfh_cM6X3TkukCaPj,ZtEQrkbSVirZgIHRP1F-6w
