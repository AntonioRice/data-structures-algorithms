# LC 347 
# Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

from typing import List
import heapq

# Time: O(n + m log k)
# Space: Overall O(n + m) for freqMap and minHeap
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # O(m) space
        freqMap = {}
        # O(k) space
        minHeap = []
             
        # O(n) time where n is len of nums
        for n in nums:
            if n in freqMap:
                freqMap[n] += 1
            else:
                freqMap[n] = 1
                
        # O(m) time where m represents m unique elements    
        for num, freq in freqMap.items():
            heapq.heappush(minHeap, (freq, num)) # O(log k)
            if len(minHeap) > k:
                heapq.heappop(minHeap)  # O(log k)
                
        return [num for freq, num in minHeap] # O(k)
    
solution = Solution()
print(solution.topKFrequent([1,1,1,2,2,3] , 2))
print(solution.topKFrequent([1],1))