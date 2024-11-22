from typing import List

# LC 39
class Solution:
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        res = []
        path = []
        seen = set()
        
        def backtrack(sum, path):
            if sum == target:
                sorted_path = tuple(sorted(path))
                if sorted_path not in seen:
                    seen.add(sorted_path)    
                    res.append(path[:])
                    
                return
            
            if sum > target: return 
            
            for i in range(len(nums)):
                path.append(nums[i])
                
                backtrack(sum + nums[i], path)
                
                path.pop()
        
        backtrack(0, path)
        return res  
        

solution = Solution()
print(solution.combinationSum([2,5,6,9], 9)) # Expected: [[2,2,5],[9]]
print(solution.combinationSum([3,4,5], 16)) # Expected: [[3,3,3,3,4],[3,3,5,5],[4,4,4,4],[3,4,4,5]]
print(solution.combinationSum([3], 5)) # Expected: [[3,3,3,3,4],[3,3,5,5],[4,4,4,4],[3,4,4,5]]

