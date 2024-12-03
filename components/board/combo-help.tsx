export const ComboHelp = () => {
  return (
    <div className="space-y-4">
      <div className="border border-black/15 shadow-sm bg-black/10 p-4 flex justify-between rounded-lg">
        <div className="space-y-1.5 flex flex-col ">
          <div>
            <p className="font-medium ">Straight Flush</p>
            <p className="text-sm">5 cards in sequence with the same suit</p>
          </div>
          <div className="flex gap-2 bg-white/50 border border-black/15 shadow-sm p-2 rounded-lg w-fit">
            <div className="flex items-center gap-1.5">
              1
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              2
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              3
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              4
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              5
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>
          </div>
        </div>

        <div className=" font-medium">
          <span className="text-[#01de5b]">100</span> /{" "}
          <span className="text-purple-600">8</span>
        </div>
      </div>

      <div className="space-y-2 border border-black/15 shadow-sm bg-black/10 p-4 flex justify-between rounded-lg">
        <div className="space-y-1.5 flex flex-col">
          <div>
            <p className="font-medium ">Four of a Kind</p>
            <p className="text-sm">4 cards of the same rank</p>
          </div>
          <div className="flex gap-2">
            <div className="flex gap-2 bg-white/50 border border-black/15 shadow-sm p-2 rounded-lg">
              <div className="flex items-center gap-1.5">
                1
                <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  あ
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                1
                <p className="bg-[#01de5b] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  う
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                1
                <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  あ
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                1
                <p className="bg-[#fc96df] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  え
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              5
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>
          </div>
        </div>

        <div className=" font-medium">
          <span className="text-[#01de5b]">60</span> /{" "}
          <span className="text-purple-600">5</span>
        </div>
      </div>

      <div className="space-y-2 border border-black/15 shadow-sm bg-black/10 p-4 flex justify-between rounded-lg">
        <div className="space-y-1.5 flex flex-col">
          <div>
            <p className="font-medium ">Full House</p>
            <p className="text-sm">
              3 cards of the same rank and 2 cards of another rank
            </p>
          </div>
          <div className="flex gap-2">
            <div className="flex gap-2 bg-white/50 border border-black/15 shadow-sm p-2 rounded-lg">
              <div className="flex items-center gap-1.5">
                1
                <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  あ
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                1
                <p className="bg-[#01de5b] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  う
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                1
                <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  あ
                </p>
              </div>
            </div>
            <div className="flex gap-2 bg-white/50 border border-black/15 shadow-sm p-2 rounded-lg">
              <div className="flex items-center gap-1.5">
                5
                <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  あ
                </p>
              </div>

              <div className="flex items-center gap-1.5">
                5
                <p className="bg-[#fc96df] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  え
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" font-medium">
          <span className="text-[#01de5b]">40</span> /{" "}
          <span className="text-purple-600">4</span>
        </div>
      </div>

      <div className="space-y-2 border border-black/15 shadow-sm bg-black/10 p-4 flex justify-between rounded-lg">
        <div className="space-y-1.5 flex flex-col">
          <div>
            <p className="font-medium ">Flush</p>
            <p className="text-sm">5 cards of the same suit</p>
          </div>
          <div className="flex gap-2 bg-white/50 border border-black/15 shadow-sm p-2 rounded-lg w-fit">
            <div className="flex items-center gap-1.5">
              1
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              3
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              5
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              6
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              8
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>
          </div>
        </div>

        <div className=" font-medium">
          <span className="text-[#01de5b]">40</span> /{" "}
          <span className="text-purple-600">3</span>
        </div>
      </div>

      <div className="space-y-2 border border-black/15 shadow-sm bg-black/10 p-4 flex justify-between rounded-lg">
        <div className="space-y-1.5 flex flex-col">
          <div>
            <p className="font-medium ">Straight</p>
            <p className="text-sm">5 cards in sequence</p>
          </div>
          <div className="flex gap-2 bg-white/50 border border-black/15 shadow-sm p-2 rounded-lg w-fit">
            <div className="flex items-center gap-1.5">
              1
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              2
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              3
              <p className="bg-[#fc96df] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                え
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              4
              <p className="bg-[#fc96df] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                え
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              5
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>
          </div>
        </div>

        <div className=" font-medium">
          <span className="text-[#01de5b]">30</span> /{" "}
          <span className="text-purple-600">3</span>
        </div>
      </div>

      <div className="space-y-2 border border-black/15 shadow-sm bg-black/10 p-4 flex justify-between rounded-lg">
        <div className="space-y-1.5 flex flex-col">
          <div>
            <p className="font-medium ">Three of a Kind</p>
            <p className="text-sm">3 cards of the same rank</p>
          </div>
          <div className="flex gap-2">
            <div className="flex gap-2 bg-white/50 border border-black/15 shadow-sm p-2 rounded-lg">
              <div className="flex items-center gap-1.5">
                1
                <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  あ
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                1
                <p className="bg-[#01de5b] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  う
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                1
                <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  あ
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              2
              <p className="bg-[#fc96df] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                え
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              5
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>
          </div>
        </div>

        <div className=" font-medium">
          <span className="text-[#01de5b]">20</span> /{" "}
          <span className="text-purple-600">3</span>
        </div>
      </div>

      <div className="space-y-2 border border-black/15 shadow-sm bg-black/10 p-4 flex justify-between rounded-lg">
        <div className="space-y-1.5 flex flex-col">
          <div>
            <p className="font-medium ">Two Pair</p>
            <p className="text-sm">
              2 cards of the same rank and 2 cards of another rank
            </p>
          </div>
          <div className="flex gap-2">
            <div className="flex gap-2 bg-white/50 border border-black/15 shadow-sm p-2 rounded-lg">
              <div className="flex items-center gap-1.5">
                1
                <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  あ
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                1
                <p className="bg-[#01de5b] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  う
                </p>
              </div>
            </div>
            <div className="flex gap-2 bg-white/50 border border-black/15 shadow-sm p-2 rounded-lg">
              <div className="flex items-center gap-1.5">
                5
                <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  あ
                </p>
              </div>

              <div className="flex items-center gap-1.5">
                5
                <p className="bg-[#fc96df] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  え
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              6
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>
          </div>
        </div>

        <div className=" font-medium">
          <span className="text-[#01de5b]">20</span> /{" "}
          <span className="text-purple-600">2</span>
        </div>
      </div>

      <div className="space-y-2 border border-black/15 shadow-sm bg-black/10 p-4 flex justify-between rounded-lg">
        <div className="space-y-1.5 flex flex-col">
          <div>
            <p className="font-medium ">Pair</p>
            <p className="text-sm">2 cards of the same rank</p>
          </div>
          <div className="flex gap-2">
            <div className="flex gap-2 bg-white/50 border border-black/15 shadow-sm p-2 rounded-lg">
              <div className="flex items-center gap-1.5">
                1
                <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  あ
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                1
                <p className="bg-[#01de5b] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  う
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              2
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              3
              <p className="bg-[#fc96df] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                え
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              5
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>
          </div>
        </div>
        <div className=" font-medium">
          <span className="text-[#01de5b]">10</span> /{" "}
          <span className="text-purple-600">2</span>
        </div>
      </div>

      <div className="space-y-2 border border-black/15 shadow-sm bg-black/10 p-4 flex justify-between rounded-lg">
        <div className="space-y-1.5 flex flex-col">
          <div>
            <p className="font-medium ">High Card</p>
            <p className="text-sm">No hand combination</p>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-1.5">
              5
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              7
              <p className="bg-[#fc96df] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                え
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              8
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              10
              <p className="bg-[#ff915a] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                あ
              </p>
            </div>

            <div className="flex gap-2 bg-white/50 border border-black/15 shadow-sm p-2 rounded-lg">
              <div className="flex items-center gap-1.5">
                13
                <p className="bg-[#01de5b] h-8 w-8 flex justify-center items-center  rounded-lg aspect-square">
                  う
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" font-medium">
          <span className="text-[#01de5b]">5</span> /{" "}
          <span className="text-purple-600">1</span>
        </div>
      </div>
    </div>
  );
};
