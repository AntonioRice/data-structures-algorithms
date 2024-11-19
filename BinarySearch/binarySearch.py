from typing import List

class Solution:
    def binarySearch(self, list: List, target: int) -> int:
        left = 0
        right = len(list)-1

        
        while(left < right):
            mid = (left + (right - left)) // 2
            
            if list[mid] == target: return mid
            
            if mid < target:
                left = mid + 1
            else:
                right = mid - 1
        
        return -1


        
solution = Solution()
print(solution.binarySearch([1, 3, 5, 8, 19, 30], 5))