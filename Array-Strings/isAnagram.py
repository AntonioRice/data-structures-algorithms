# LC 242
# Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 
# Sorting
# Time: Overall O(n log n). Sorting takes O(n Log n) and comparing 2 lists take O(n)
# Space: O(n) because sorting creates new lists
#
# class Solution:
#     def isAnagram(self, s: str, t: str) -> bool:
#         if len(s) != len(t):
#             return False
        
#         return sorted(s) == sorted(t)

# Frequency Counter
# Time: Overall O(n)
# Space O(1)
#
from collections import Counter
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:        
        return Counter(s) == Counter(t)
    
solution = Solution()
print(solution.isAnagram("anagram","nagaram"))
print(solution.isAnagram("rat", "car"))
print(solution.isAnagram("a", "car"))
print(solution.isAnagram("aacc", "ccac"))