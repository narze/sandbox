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
- `> main`
