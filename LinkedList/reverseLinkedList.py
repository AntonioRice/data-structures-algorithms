from typing import List, Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
class Solution:
    def reverse(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev , curr = None, head
        
        while curr:
            next = curr.next
            curr.next = prev
            prev , curr = curr, next
        
        return prev
    
    def deleteNote(self, head: Optional[ListNode], target: int) -> Optional[ListNode]:
        if not head: return None
        curr = head
        
        while curr.next:
            if(curr.next.val == target):
                curr.next = curr.next.next
                return head
            curr = curr.next
            
        return head
        
solution = Solution()
def printVal(head):
    list = []
    curr = head
    while curr:
        list.append(curr.val)
        curr = curr.next
    print(list)

def create_linked_list(values):
    if not values:
        return None
    head = ListNode(values[0])
    curr = head
    for val in values[1:]:
        curr.next = ListNode(val)
        curr = curr.next
    return head

list = create_linked_list([1,2,3,4,5,6,7,8])
# res = solution.reverse(list)
# printVal(res)

res = solution.deleteNote(list, 4)
printVal(res)