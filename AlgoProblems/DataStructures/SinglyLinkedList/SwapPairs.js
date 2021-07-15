
/* 
Your previous Plain Text content is preserved below:

Write a function that takes a singly linked list and swaps all pairs of elements.

Example:

Input:  (1) -> (2) -> (3) -> (4) -> (5)
Output: (2) -> (1) -> (4) -> (3) -> (5)

Requirements:
- In place
- Swap order of elements, not data
- No built-ins
 */

// interface LinkedListNode {
//     data: number;
//     next?: LinkedListNode
//   }
  
  const first = { data: 1, next: undefined }
  let current = first;
  
  for (let i = 2; i <= 5; i++){
    const next = { data: i, next: undefined };
    current.next = next;
    current = next;
  }
  
  const second = first.next;
  
  current = first;
  
  while (current !== undefined) {
    console.log(current.data);
    current = current.next;
  }
  
  let left = first; // (1)
  let right = first.next; // (2)
  
  let temp = left // (1)
  right.next = left // (2) -> (1)
  left = right // (1) -> (2)
  right = temp // (2)
  
  // first = current.next.next
  // second = current.next.next
  
  current = second;
  while (current !== undefined) {
    console.log(current.data);
    current = current.next;
  }