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

Lazy Evaluation
---------------
- `head [1..]` # 1
- `take 5 [1..]` [1,2,3,4,5]

GHCi
----
Definding function
- Use `let`
- `let f x y = x^2 + y^2`
