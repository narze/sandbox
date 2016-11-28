defmodule TH do
  def count_chars(string) do
    Regex.replace(~r/[^\w\dก-๛-]/u, string, "")
    |> String.codepoints
    |> Enum.reduce(%{}, fn(char, result) ->
      Map.update(result, char, 1, &(&1 + 1))
    end)
  end

  def sort(map) do
    Enum.sort map, fn({_,num1}, {_,num2}) ->
      num1 > num2
    end
  end

  def count_in_file(filename) do
    File.read!(filename)
    |> count_chars
    |> sort
  end
end
