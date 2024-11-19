from typing import List, Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
class Solution:
    def removeDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        seen = {}
        dummy = ListNode(next=head)
        prev, curr = dummy, head
        
        while curr:
            next = curr.next
            if(curr.val in seen):
                prev.next = next
            else:
                seen[curr.val] = True
                prev = curr
            
            curr = next
                  
        return dummy.next
        
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

head = create_linked_list([1,2,3,4,5,6,4,7,8,8])
res = solution.removeDuplicates(head)
printVal(res)