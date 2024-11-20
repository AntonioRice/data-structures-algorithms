# LC 78
from typing import List

class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res = []
        path = []
        
        def backtrack(start):
            res.append(path[:])
            
            for i in range(start, len(nums)):
                path.append(nums[i])   
                backtrack(i + 1)
                path.pop()
        
        backtrack(0)
        return res

solution = Solution()
print(solution.subsets([1,2,3]))