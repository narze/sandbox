defmodule THTest do
  use ExUnit.Case
  doctest TH

  test "count characters from words" do
    assert TH.count_chars("word") == %{ "w" => 1, "o" => 1, "r" => 1, "d" => 1 }
  end

  test "excepts newline & space characters" do
    assert TH.count_chars("wo rd\n") == %{ "w" => 1, "o" => 1, "r" => 1, "d" => 1 }
  end

  test "supports thai characters" do
    assert TH.count_chars("สวัสดี") == %{"ส" => 2, "ว" => 1, "ั" => 1, "ด" => 1, "ี" => 1 }
  end

  test "sort by count" do
    map = %{"ด" => 1, "ท" => 1, "ภ" => 1, "ย" => 4, "ว" => 1, "ษ" => 1,
  "ส" => 2, "ั" => 1, "า" => 2, "ี" => 1, "ไ" => 1}
    expected = [{"ย", 4}, {"า", 2}, {"ส", 2}, {"ไ", 1}, {"ี", 1}, {"ั", 1},
 {"ษ", 1}, {"ว", 1}, {"ภ", 1}, {"ท", 1}, {"ด", 1}]

    assert TH.sort(map) == expected
  end

  test "count in file" do
    assert TH.count_in_file('test/words.txt') == [
      {"ส", 2},
      {"ี", 1},
      {"ั", 1},
      {"ว", 1},
      {"ด", 1},
    ]
  end
end
