module Main where

main :: IO ()
main = do
  putStrLn "Hello World"

f :: Int -> Int
f x = 2*x + 1

student :: String -> Int -> (String, Int)
student name age = (name, age)

