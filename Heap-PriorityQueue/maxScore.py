
import heapq
from typing import List
# LC 2542
# Time: O(n log n)
# Space: O(k) because at most k of number is stored in heap
class Solution:
    def maxScore(self, nums1: List[int], nums2: List[int], k: int) -> int:
        pairs = sorted(zip(nums1, nums2), key=lambda x: -x[1])
        
        total = res = 0
        heap = []
        
        for pair in pairs:
            num1, num2 = pair
            heapq.heappush(heap, num1)
            total += num1
            
            if len(heap) > k:
                total -= heapq.heappop(heap)
                
            if len(heap) == k:
                res = max(res, total * num2)
        
        return res

solution = Solution()
nums1 = [1,3,3,2] 
nums2 = [2,1,3,4]
k = 3
print(solution.maxScore(nums1, nums2, k))