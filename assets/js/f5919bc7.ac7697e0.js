"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1194],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),h=a,d=m["".concat(l,".").concat(h)]||m[h]||p[h]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3232:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o={id:"string",title:"String"},s=void 0,l={unversionedId:"algorithms/string",id:"algorithms/string",isDocsHomePage:!1,title:"String",description:"Tips",source:"@site/../contents/algorithms/string.md",sourceDirName:"algorithms",slug:"/algorithms/string",permalink:"/algorithms/string",editUrl:"https://github.com/yangshun/tech-interview-handbook/edit/master/contents/../contents/algorithms/string.md",tags:[],version:"current",lastUpdatedBy:"Yangshun Tay",lastUpdatedAt:1569463535,formattedLastUpdatedAt:"9/26/2019",frontMatter:{id:"string",title:"String"},sidebar:"docs",previous:{title:"Stack",permalink:"/algorithms/stack"},next:{title:"Tree",permalink:"/algorithms/tree"}},c=[{value:"Tips",id:"tips",children:[]},{value:"Strings are sequences",id:"strings-are-sequences",children:[]},{value:"Common question topics",id:"common-question-topics",children:[{value:"Non-repeating Characters",id:"non-repeating-characters",children:[]},{value:"Anagram",id:"anagram",children:[]},{value:"Palindrome",id:"palindrome",children:[]}]},{value:"Corner cases",id:"corner-cases",children:[]},{value:"Recommended LeetCode questions",id:"recommended-leetcode-questions",children:[]}],u={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("p",null,"Ask about input character set and case sensitivity. Usually the characters are limited to lowercase Latin characters, for example a to z."),(0,i.kt)("p",null,"When you need to compare strings where the order isn\u2019t important (like anagram), you may consider using a HashMap as a counter. If your language has a built-in Counter class like Python, ask to use that instead."),(0,i.kt)("p",null,"If you need to keep a counter of characters, a common mistake is to say that the space complexity required for the counter is O(n). The space required for a counter is O(1) not O(n). This is because the upper bound is the range of characters, which is usually a fixed constant of 26. The input set is just lowercase Latin characters."),(0,i.kt)("p",null,"Common data structures for looking up strings efficiently are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Trie"},"Trie/Prefix Tree")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Suffix_tree"},"Suffix Tree"))),(0,i.kt)("p",null,"Common string algorithms are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm"},"Rabin Karp")," for efficient searching of substring using a rolling hash"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm"},"KMP")," for efficient searching of substring")),(0,i.kt)("h2",{id:"strings-are-sequences"},"Strings are sequences"),(0,i.kt)("p",null,"A string is a sequence of characters. Many tips that apply to arrays also apply to strings."),(0,i.kt)("p",null,"Are there duplicate characters in the string, would it affect the answer?"),(0,i.kt)("p",null,"When using an index to iterate through characters, be careful not to go out of bounds."),(0,i.kt)("p",null,"Be mindful about slicing or concatenating strings in your code. Typically, slicing and concatenating strings require O(n) time. Use start and end indices to demarcate a substring where possible."),(0,i.kt)("p",null,"Sometimes you can traverse the string from the right rather than from the left."),(0,i.kt)("p",null,"Master the ",(0,i.kt)("a",{parentName:"p",href:"https://discuss.leetcode.com/topic/30941/here-is-a-10-line-template-that-can-solve-most-substring-problems"},"sliding window technique")," that applies to many substring problems."),(0,i.kt)("p",null,"When you are given two strings to process, it is common to have one index per string (pointer) to traverse/compare the both of them. For example, we use the same approach to merge two sorted arrays."),(0,i.kt)("h2",{id:"common-question-topics"},"Common question topics"),(0,i.kt)("p",null,"Many string questions fall into one of these buckets."),(0,i.kt)("h3",{id:"non-repeating-characters"},"Non-repeating Characters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use a 26-bit bitmask to indicate which lower case latin characters are inside the string.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"mask = 0\nfor c in set(word):\n  mask |= (1 << (ord(c) - ord('a')))\n")),(0,i.kt)("p",null,"To determine if two strings have common characters, perform & on the two bitmasks. If the result is non-zero, ",(0,i.kt)("inlineCode",{parentName:"p"},"mask_a & mask_b > 0"),", then the two strings have common characters."),(0,i.kt)("h3",{id:"anagram"},"Anagram"),(0,i.kt)("p",null,"An anagram is word switch or word play. It is the result of re-arranging the letters of a word or phrase to produce a new word or phrase, while using all the original letters only once. In interviews, usually we are only bothered with words without spaces in them."),(0,i.kt)("p",null,"To determine if two strings are anagrams, there are a few plausible approaches:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sorting both strings should produce the same resulting string. This takes O(nlgn) time and O(lgn) space."),(0,i.kt)("li",{parentName:"ul"},"If we map each character to a prime number and we multiply each mapped number together, anagrams should have the same multiple (prime factor decomposition). This takes O(n) time and O(1) space."),(0,i.kt)("li",{parentName:"ul"},"Frequency counting of characters will help to determine if two strings are anagrams. This also takes O(n) time and O(1) space.")),(0,i.kt)("h3",{id:"palindrome"},"Palindrome"),(0,i.kt)("p",null,"A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward, such as ",(0,i.kt)("em",{parentName:"p"},"madam")," or ",(0,i.kt)("em",{parentName:"p"},"racecar"),"."),(0,i.kt)("p",null,"Here are ways to determine if a string is a palindrome:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Reverse the string and it should be equal to itself."),(0,i.kt)("li",{parentName:"ul"},"Have two pointers at the start and end of the string. Move the pointers inward till they meet. At any point in time, the characters at both pointers should match.")),(0,i.kt)("p",null,"The order of characters within the string matters, so HashMaps are usually not helpful."),(0,i.kt)("p",null,"When a question is about counting the number of palindromes, a common trick is to have two pointers that move outward, away from the middle. Note that palindromes can be even or odd length. For each middle pivot position, you need to check it twice: Once that includes the character and once without the character."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For substrings, you can terminate early once there is no match."),(0,i.kt)("li",{parentName:"ul"},"For subsequences, use dynamic programming as there are overlapping subproblems. Check out ",(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/longest-palindromic-subsequence/"},"this question"),".")),(0,i.kt)("h2",{id:"corner-cases"},"Corner cases"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Empty string"),(0,i.kt)("li",{parentName:"ul"},"String with 1 or 2 characters"),(0,i.kt)("li",{parentName:"ul"},"String with repeated characters"),(0,i.kt)("li",{parentName:"ul"},"Strings with only one distinct character")),(0,i.kt)("h2",{id:"recommended-leetcode-questions"},"Recommended LeetCode questions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/longest-substring-without-repeating-characters/"},"Longest Substring Without Repeating Characters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/longest-repeating-character-replacement/"},"Longest Repeating Character Replacement")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/minimum-window-substring/description/"},"Minimum Window Substring")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/valid-anagram"},"Valid Anagram")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/group-anagrams/"},"Group Anagrams")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/valid-parentheses"},"Valid Parentheses")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/valid-palindrome/"},"Valid Palindrome")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/longest-palindromic-substring/"},"Longest Palindromic Substring")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/palindromic-substrings/"},"Palindromic Substrings")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/encode-and-decode-strings/"},"Encode and Decode Strings (LeetCode Premium)"))))}p.isMDXComponent=!0},7462:function(e,t,r){function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},3366:function(e,t,r){function n(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,{Z:function(){return n}})}}]);