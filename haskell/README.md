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

- `student :: String -> Int -> (String, Int)` returns tuple of (string, integer)
