module Main where

main :: IO ()
main = do
  putStrLn "Hello World"

f :: Int -> Int
f x = 2*x + 1

student :: String -> Int -> (String, Int)
student name age = (name, age)

factorial 0 = 1
factorial x = x * factorial (x - 1)

sum' :: Int -> Int
sum' 0 = 0
sum' x = x + sum' (x - 1)

fibo 0 = 0
fibo 1 = 1
fibo x = fibo (x - 1) + fibo (x - 2)

[x,y,z] = [1,2,3]

xx:xs = [1,2,3,4]


