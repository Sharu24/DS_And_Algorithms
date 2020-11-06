# Data Structures

- Stack
- Queuee
- Hash Table
- Trees
- Graphs
- Linked Lists

## Why DS

- Mongo DB cant store more than 16 MB document
- Oracle can store much larger data set

## Stacks

Application of a Stack Data Structures

1. LIFO (Last IN First Out or First In Last Out
2. Examples
   1. Undo Operations
      1. In a MS Paint app or any editor, You can Undo Changes
      2. CTL-Z will pop last pushed element(character or operation)
   2. In any arithmetic operation,
      1. Compiler checks the precedence of operators
      2. BODMAS Rule ( 2\*2+5/1 )
   3. Browser History
      1. When User wants to go back to the the last screen visited
      2. He/She just have to click the back button and last viewed page is served
3. In all the above Examples A Stack Data Structure is used

## Linked List

-      CreateNode =>
-          Create a New Node (newNode)
-              if Linked List is Empty
-                  head = newNode
-                  tail = newNode
-                  newNode.prev = null
-                  newNode.next = null
-              if you want to append new node as Head
-                  head = newNode
-                  newNode.prev = null
-                  newNode.next = currentHead
-                  currentHead.prev = newNode
-              if you want to append new node as Tail
-                  tail = newNode
-                  newNode.prev = currentTail
-                  newNode.next = null
-                  currentTail.next = newNode
