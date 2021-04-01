//===============================================================================
//Given two words source and target, and a list of words words, find the length of the shortest series of edits that transforms source to target. Each edit must change exactly one letter at a time, and each intermediate word (and the final target word) must exist in words. If the task is impossible, return -1.
//===============================================================================

//Constraints
// [time limit] 5000ms
// [input] string source
// 1 ≤ source.length ≤ 20
// [input] string target
// 1 ≤ target.length ≤ 20
// [input] array.string words
// 1 ≤ words.length ≤ 20
// [output] array.integer

//Two Strategies
// One strategy is, for every word2 in the given words, check that word and word2 differ by 1.

// Another strategy is, for every index i from 0 .. word.length - 1 and for every lowercase letter c, clone word into word2, replace word2[i] with c, and check whether the resulting word2 is in words.


//Steps
//1. Using Breadth First Search (BFS) - our solution to find the shortest path
//2. BFS explores all nodes distance 0 from the source, then all nodes distance 1, then all nodes distance 2, and so on. This ensures that if we find the target word, we found it at the least possible distance.
//3. 

// function shortestWordEditPath(source, target, words) {
//     alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     wordset = new HashSet(words)
//     queue = Queue()
//     queue.add((source, 0))
//     seen = new HashSet([source])

//     while queue {
//         word, depth = queue.popfront()
//         if word == target { return depth }
//         for i from 0 to word.length {
//             // # First Strategy:
//             // # for word2 in words:
//             // #     if word2.length == word.length:
//             // #         diff = 0
//             // #         for j from 0 to word.length:
//             // #             if word[j] != word2[j]:
//             // #                 diff += 1
//             // #                 if diff == 2: break
//             // #         if diff == 1 and word2 not in seen:
//             // #             queue.append((word2, depth+1))
//             // #             seen.add(word2)

//             // # Second Strategy:
//             for c in alphabet {
//                 word2 = word.clone()
//                 word2[i] = c
//                 if word2 in wordset and word2 not in seen:
//                 queue.append((word2, depth + 1))
//                 seen.add(word2)
//             }
//         }
//     }
//     return -1
// }
