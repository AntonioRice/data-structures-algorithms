from typing import List

# LC 217
# HashMap
# class Solution:
#     def containsDuplicate(self, nums: List[int]) -> bool:
#         map = {}
        
#         for num in nums:
#             if num in map:
#                 return True
#             else:
#                 map[num] = num             
#         return False    

# Set 
# Time: O(n)
# Space: O(n)
#
# class Solution:
#     def containsDuplicate(self, nums: List[int]) -> bool:
#         seen = set()
        
#         for num in nums:
#             if num in seen:
#                 return True
#             seen.add(num)        
#         return False         

# Set (one-liner)
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        return len(nums) != len(set(nums))        
        
solution = Solution()
print(solution.containsDuplicate([1,1,2,6,3]))
print(solution.containsDuplicate([1,2,5,6,3]))