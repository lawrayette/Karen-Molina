---
slug: "/blog/python-games-001"
date: "2021-05-29"
title: "Guess the Number"
desc: "Welcome to a new serie to build a little games in python..."
img: "http://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png"
---


Hi! 

Some months ago, I was thinking to practice my skills in python, but I don't want do stuff in backend. I had no idea how to start. So, one day, one friend at Twitter sais me: Hey! you can practice with that book!. The book called: Invent Your Own Games with Python by Al Sweigart.

The first game I would to recreate is called: Guess the Number. We have to use the input, conditionals, booleans, Modules, statements to iterate some things... and other stuffs. The objective is...

As a user. I have to write my name in the game to make a custom gretting at the beginning of the game. The game must return the greeting and said my name and give me the next instruction to continue the game.

Let's go.... hands on code! 
__________

```
import random 

guessesTaken = 0

print("Hola crayola.... ¿Cómo te llamas?")
myName = input()

number = random.randint(1,20)
print("Hola" + myName + "Adivina el número en el que estoy pensando")

while guessesTaken < 6:
    print("date con un número")
    guess = input()
    guess = int(guess)
    
    guessesTaken = guessesTaken + 1
    
    if guess < number:
        print("ay no!..... es un número más alto")
              
    if guess > number:
        print("estás muy muy arriba, ve más abajo")
    
    if guess == number:
        break
        
if guess == number:
    guessesTaken = str(guessesTaken)
    print("Esoooo" + myName + "es el bueno")
    
if guess != number:
    number = str(number)
    print("nope! ese no es. Estuve pensando en" + number)
```    

First, we have to import the random Module. We need it to create a random variables... or numbers, in this case.

Next, we create a variable named guessesTaken, this variable we use to create a record or a counter as how many times we try to guess the number. At lines 6-7 we create the first interaction with the user, we ask the name.

At lines 9-10 we can use the random Module with the randint method. Inside the parentheses we can put two parameters, separated by commas. then randit(), return a random number between the parameters. The number been returned it be the number that the user going to try to guess.

In line 12 we has to create a loop... we must use a while. A while its a loop that execute the core over and over again. We create a loop that the conditional must be menor that 6. In that case, 6 is the number that the user got to try to guess.

Now, inside de While... we have few block to code. First, we ask to the user a number. Then we create two variables. One of then we use it for the number that the user write. The second varibale, we transform that value in a integrer. At line 17, we start the timer or the tryes that the user have. Remember... we created a loop with a six intents.

Then we have two if statements. Both are gonna make a comparison between the guess variable and the number to guess. But, the first if, gonna make a comparison if the guess is menor that number. And the second if, gonna make a comparison if guess is mayor that number. 

Now, we have a third if statement inside while loop. That if indicate to the game that if guess is equal to number. The user has guessed the right number. At this moment.. the loop will be stoped.

Once outside the loop we have two more if statements. 

Firts, a conditional that compare the guess and number varibales when the user knows the right number. In this block to code, we must return a succeful message as string, that why first we convert the guess varibale to string.

Finally, the second if statement will be retured an error message when the user fails the game.
