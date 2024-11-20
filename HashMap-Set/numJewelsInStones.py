# LC 771
# You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. 
# Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels. 
# Letters are case sensitive, so "a" is considered a different type of stone from "A". 

# Hashmap
# Time: O(n + m)
# Space: O(n)
class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        map = {}
        count = 0

        for char in jewels:
            map[char] = 0
        
        for char in stones:
            if char in map:
                count += 1
        
        return count
    
# Set
# Time: O(n + m)
# Space: O(n)
class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        jewelSet = set(jewels)
        # count = 0
        
        # for char in stones:
        #     if char in jewelSet:
        #         count += 1
        
        # return count
        
        return sum(char in jewelSet for char in stones)

solution = Solution()
print(solution.numJewelsInStones("aA", "aAAbbbb"))