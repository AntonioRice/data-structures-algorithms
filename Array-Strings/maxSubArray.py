# LC 53
# Given an integer array nums, find the subarray with the largest sum, and return its sum.

from typing import List

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        res = nums[0]
        curr_sum = 0
        
        for n in nums:
            curr_sum = max(curr_sum, 0) 
            curr_sum += n 
            res = max(res, curr_sum) 
        
        return res

solution = Solution()
print(solution.maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
print(solution.maxSubArray([1]))
print(solution.maxSubArray([5,4,-1,7,8]))