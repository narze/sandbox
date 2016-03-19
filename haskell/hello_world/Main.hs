module Main where

main :: IO ()
main = do
  putStrLn "Hello World"

f :: Int -> Int
f x = 2*x + 1

student :: String -> Int -> (String, Int)
student name age = (name, age)

factorial 0 = 1
factorial x = x * factorial(x - 1)

sum' :: Int -> Int
sum' 1 = 1
sum' x = x + sum'(x - 1)

