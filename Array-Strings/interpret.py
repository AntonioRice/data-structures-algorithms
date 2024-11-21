# LC 1678
class Solution:
    def interpret(self, command: str) -> str:
        return command.replace("()","o").replace("(al)","al")
    
solution = Solution()
print(solution.interpret("G()(al)"))
print(solution.interpret("G()()()()(al)"))
print(solution.interpret("(al)G(al)()()G"))

        
        