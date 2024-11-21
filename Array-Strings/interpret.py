## LC 1678
# class Solution:
#     def interpret(self, command: str) -> str:
#         return command.replace("()","o").replace("(al)","al")


# Overall Time & Space O(n)
class Solution:
    def interpret(self, command: str) -> str:
        map = {"()":"o","(al)":"al"} # O(k = 2) -> O(1) fixed
        res = [] # O(n) grows
        key = "" # O(1)
        
        for i in range(len(command)): # O(n)
            if(command[i] == "(" or len(key) > 0):
                key += command[i]
                
                if(key in map): # O(1)
                    res.append(map[key])
                    key = ""
            else:
                res.append(command[i]) # O(1)
                
        return "".join(res) # O(n)
    
solution = Solution()
print(solution.interpret("G()(al)"))
print(solution.interpret("G()()()()(al)"))
print(solution.interpret("(al)G(al)()()G"))

        
        