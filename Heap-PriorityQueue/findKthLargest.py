import heapq
from typing import List;

# LC 215 
 
# Using a maxHeap isn't the most efficient solution, due to repeatedly popping -> O(n log n)
# class Solution:
#     def findKthLargest(self, nums: List[int], k: int) -> int:
#         maxHeap = []
        
#         for i in range(len(nums)):
#             heapq.heappush(maxHeap, nums[i] * -1)
            
#         while k > 1:
#            heapq.heappop(maxHeap)
#            k -= 1
           
#         return -1 * maxHeap[0]

# Using minHeap is more efficient: 
# Time: O(n log k)
# Space: O(k) as minHeap only stores k elements
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        minHeap = []

        for num in nums:
            heapq.heappush(minHeap, num)
    
            if len(minHeap) > k:
                heapq.heappop(minHeap)
        
        return minHeap[0]
        

solution = Solution()
print(solution.findKthLargest([3,2,1,5,6,4], 2))
