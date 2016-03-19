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

xx:xs = [1,2,3,4] -- xx = 1, xs = [2,3,4]

x1:xs1 = xs -- x1 = 2, xs1 = [3,4]

-- Count list
len [] = 0
len (a:b) = 1 + len b

sumAll [] = 0
sumAll (a:b) = a + sumAll b

doubleAll :: [Int] -> [Int]
doubleAll [] = []
doubleAll (a:b) = a * 2 : doubleAll b

sqAll [] = []
sqAll (a:b) = a ^ 2 : sqAll b

-- Higher Order Function
map' f [] = []
map' f (a:b) = f a : map' f b

double x = x * 2
square x = x ^ 2

dx x = map' double x
sx x = map' square x

-- Function composition
compose :: (b -> c) -> (a -> b) -> (a -> c)
compose f g = (\x -> f(g x))
-- is not the same as...
-- compose f g x = f(g x)
sqdb = compose square double
sqdb2 = square . double
pipe g f = f . g
dps = double `pipe` square
