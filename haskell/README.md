Haskell
=======

Setup Haskell Stack
-------------------
1. `brew install haskell-stack`
2. `stack setup`

Running GHCi
------------
- Launch GHC interpreter `stack ghci`

Hello World
-----------
- `cd hello_world`
- `vim Main.hs`
- `stack ghc -- -o hello Main.hs`
- `./hello`
- Run in GHCi `:load hello_world/Main.hs`
- `*Main> main` # Hello world
- Add `f x = 2*x + 1`
- `*Main> :reload`
- `*Main> f 3` # 7

Type Check
----------
- `> :t function_name`
- `> :t f` # f :: Num a => a -> a
- Try add type to f `f :: Int - Int`
- `:t (+)` # (+) :: Num a => a -> a -> a
- `:t (^)` # (^) :: (Integral b, Num a) => a -> b -> a

Code
----
- `student :: String -> Int -> (String, Int)` returns tuple of (string, integer)


Simple Commands
---------------
- `it` outputs latest returned command
- `head [1,2,3,4,5]` # 1
- `tail [1,2,3,4,5]` # [2,3,4,5]
- `take 2 [1,2,3,4,5]` # [1,2]
- `drop 2 [1,2,3,4,5]` # [3,4,5]
- `[1..5]` # [1,2,3,4,5]
- `[1..]` # Infinite list
- `[1,3..10]` # [1,3,5,7,9]
- `[1,-3..(-10)]` # [1,-3,-7]
- `length [1..10]` # 10

List Comprehension
------------------
- `|` = "When"
- `[x | x <- [1..5]]` # [1,2,3,4,5]
- `[x^2 | x <- [1..5]]` # [1,4,9,16,25]
- `[(x,y) | x <- [1..3], y <- [1..4]]` #
[(1,1),(1,2),(1,3),(1,4),(2,1),(2,2),(2,3),(2,4),(3,1),(3,2),(3,3),(3,4)]
- Add condition to filter `[(x,y) | x <- [-100..100], y <- [-100..100], x^2 + y^2 - 5 == 125]`
- Or operator ` [(x,y) | x <- [-100..100], y <- [-100..100], x^2 + y^2 - 5 == 125 || y > 95]`

Infix/Prefix Operator
---------------------
- `mod 10 3` -> `10 `mod` 3`
- `5 + 3` -> `(+) 5 3`

Lazy Evaluation
---------------
- `head [1..]` # 1
- `take 5 [1..]` [1,2,3,4,5]

Mass Assignment?
----------------
- `(x,y) = (1,2)`
- `[x,y,z] = [1..3]``

List Concatenation
------------------
- `[] = []`
- `1:[] = [1]`
- `1:2:[] = 1:[2] = [1,2]`
- `x:[] = [1]`
- `x:xs = [1,2,3,4]` # xs = [2,3,4], x = 1

GHCi
----
Definding function
- Use `let`
- `let f x y = x^2 + y^2`
