# LC 22
#
from typing import List

# # Stack
# class Solution:
#     def generateParenthesis(self, n: int) -> List[str]:
#         res = []
#         path = []
        
#         def backtracking(openCount, closeCount):
#             if openCount == closeCount == n:
#                 res.append("".join(path))
#                 return
            
#             if openCount < n:
#                  path.append("(")
#                  backtracking(openCount + 1, closeCount)
#                  path.pop()
                
            
#             if closeCount < openCount:
#                 path.append(")")
#                 backtracking(openCount, closeCount + 1)
#                 path.pop()
        
        
#         backtracking(0,0)
#         return res
        
# # String instead of stack
class Solution:
        def generateParenthesis(self, n: int) -> List[str]:
            res = []
            
            def backtrack(openCount, closeCount, current):
                # base case
                if openCount == closeCount == n:
                    res.append(current)
                    return
                
                if openCount < n:
                    backtrack(openCount + 1, closeCount, current + "(")
                
                if closeCount < openCount:
                    backtrack(openCount, closeCount + 1, current + ")")
                                   
            
            backtrack(0,0,"")
            return res
            
solution = Solution()
print(solution.generateParenthesis(3))