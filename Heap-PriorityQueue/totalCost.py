# LC 2462
import heapq
from typing import List

# Time O(n log n)
# Space O(n)
class Solution:
    def totalCost(self, costs: List[int], k: int, candidates: int) -> int:
        heap = []
        N = len(costs)
        left = candidates
        right = N - candidates
        
        for i in range(left):
            heapq.heappush(heap, (costs[i], i, 1)) 
        
        for i in range(max(right,left ), N):
            heapq.heappush(heap, (costs[i], i, -1))
            
        right += -1
        total = 0
        for _ in range(k):
            min_cost, index,  direction = heapq.heappop(heap)
            total += min_cost
            
            if left <= right:
                if direction == 1:
                    heapq.heappush(heap, (costs[left], left, 1))
                    left += 1
                else:
                    heapq.heappush(heap, (costs[right], right, -1))
                    right -= 1
        
        return total
    
solution = Solution()

costs = [10,1,11,10]
k = 2
candidates = 1

print(solution.totalCost(costs, k, candidates))

        