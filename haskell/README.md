# [Haskell For Noob](https://www.eventpop.me/e/336)
What I've learned from the class

## Setup Haskell Stack
1. `brew install haskell-stack`
2. `stack setup`

## Running GHCI
- Launch GHC interpreter `stack GHCI`

## Hello World
- `stack ghc -- -o hello Main.hs`
- `./hello`
- To run within GHCI `> :load Main.hs`
- `> main` Prints "Hello World"

## Defining Function `f`
- `f x = 2*x + 1`
- `> :reload`
- `> f 3` 7

## Type Check
- `> :t function_name`
- `> :t f` f :: Num a => a -> a
- Try add type to f `f :: Int -> Int`
- `> :t (+)` (+) :: Num a => a -> a -> a
- `> :t (^)` (^) :: (Integral b, Num a) => a -> b -> a

## Defining Function Type
- `student :: String -> Int -> (String, Int)` returns tuple of (String, Int)

## Simple Commands
- `> it` outputs latest returned command
- `> :info f` gets f's information
- `head [1,2,3,4,5]` 1
- `tail [1,2,3,4,5]` [2,3,4,5]
- `take 2 [1,2,3,4,5]` [1,2]
- `drop 2 [1,2,3,4,5]` [3,4,5]
- `[1..5]` [1,2,3,4,5]
- `[1..]` Infinite list!
- `[1,3..10]` [1,3,5,7,9]
- `[1,-3..(-10)]` [1,-3,-7]
- `length [1..10]` 10

## List Comprehension
- `x | x ...` *x when x ...*
- `[x | x <- [1..5]]` [1,2,3,4,5]
- `[x^2 | x <- [1..5]]` [1,4,9,16,25]
- `length [(x,y) | x <- [1..3], y <- [1..4]]` 12
- Add condition to filter using comma `[(x,y) | x <- [-100..100], y <- [-100..100], x^2 + y^2 - 5 == 125]`
- Or operator `[(x,y) | x <- [-100..100], y <- [-100..100], x^2 + y^2 - 5 == 125 || y > 95]`

## Infix/Prefix Operator
- `mod 10 3` is same as ```10 `mod` 3```
- `5 + 3` is same as `(+) 5 3`

## Lazy Evaluation
- `head [1..]` 1
- `take 5 [1..]` [1,2,3,4,5]

## Mass Assignment
- `(x,y) = (1,2)`
- `[x,y,z] = [1..3]``

## List Concatenation
- `[] = []`
- `1:[] = [1]`
- `1:2:[] = 1:[2] = [1,2]`
- `x:[] = [1]`
- `x:xs = [1,2,3,4]` xs = [2,3,4], x = 1

## Defining Function In GHCI
- Use `let`
- `let f x y = x^2 + y^2`

## Higher Order Function
- `map' f [] = []`
- `map' f (a:b) = f a : map' f b`
- `map' (\x -> x * 2) [1..5]`

## Function Composition
- `compose f g = (\x -> f(g x))` `\` creates lambda function
- `(|>) g f = f . g` copied `|>` from Elixir

## Currying
- `f = (+2)` then `f 3` equals 5
- `map' (*2) [1..5]` instead of using `\`
- See ramda.js for javascript implementation

## Reduce
- Reduces list to single item eg. `productAll :: [Int] -> Int`
- `sum = foldr (+) 0`
- `product = foldr (*) 1`

## Data Structure
- `data User = User String String String`
- `getFirstName :: User -> String` (Optional)
- `getFirstName (User firstName _ _) = firstName`
- `getLastName (User _ lastName _) = lastName`
- `getUsername (User _ _ username) = username`
- It fails in GHCI - Must append `deriving (Show)`
- `data Color = Red | Green | Blue deriving(Show)` Red, Green, Blue will have Color Type

## What is Show?
- Instead of deriving(Show) we can implement `show` ourself ...
```
instance Show Color where
    show Red = "Color Red"
    show Green = "Color Green"
    show Blue = "Color Blue"
```

## Another Way To Define User
```
data User = User {
    firstName::String,
    lastName::String,
    username::String
} deriving(Show)
```

```
user = User "Manassarn" "Manoonchai" "narze"
-- or 
user = User {firstName = "Manassarn", lastName = "Manoonchai", username = "narze"}

-- update
updatedUser = user { username = "monosor" }
```

## Binary Tree Structure
`data Tree a = Empty | Node a (Tree a) (Tree a)`
