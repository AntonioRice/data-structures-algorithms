# LC 49
# Given an array of strings strs, group the anagrams together. You can return the answer in any order.
from collections import defaultdict
from typing import List

# Time: O(n * k)
# Space: O(n * k)
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        map = defaultdict(list)
        # O(n)
        for str in strs:
            freqStr = self.getFreqStr(str)
            map[freqStr].append(str)          
        
        return list(map.values())

    def getFreqStr(self, s: str):
        freqStr = [0] * 26
        
        # O(k)
        for char in s:
            freqStr[ord(char) - ord('a')] += 1
        
        return tuple(freqStr)
        
    
solution = Solution()
print(solution.groupAnagrams(["eat","tea","tan","ate","nat","bat"]))