/**
 * fix_starter_code.js
 * Fixes the startCode for 15 problems (from insert_more_problems.js)
 * that accidentally contained full solutions instead of empty function stubs.
 * Also adds missing C++ and Java starter code where only JavaScript existed.
 *
 * Run: node fix_starter_code.js
 */

const main = require('./config/db');
const Problem = require('./model/problem');

// Each entry: { title, startCode: [ {language, initialCode}, ... ] }
const fixes = [
  // ==========================================
  // LINKED LIST (5)
  // ==========================================
  {
    title: "Reverse a Linked List",
    startCode: [
      { language: "cpp", initialCode: `#include <iostream>
#include <vector>
#include <sstream>
using namespace std;

// Write your code inside this function
vector<int> reverseList(vector<int>& nums) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    string line;
    if (getline(cin, line)) {
        stringstream ss(line);
        vector<int> nums;
        int val;
        while (ss >> val) nums.push_back(val);
        vector<int> result = reverseList(nums);
        for (size_t i = 0; i < result.size(); ++i) {
            cout << result[i] << (i + 1 == result.size() ? "" : " ");
        }
    }
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    public static List<String> reverseList(String[] parts) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextLine()) {
            String[] parts = sc.nextLine().trim().split("\\\\s+");
            List<String> result = reverseList(parts);
            System.out.println(String.join(" ", result));
        }
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
function reverseList(arr) {
  
}

// --- IO Boilerplate - Do not modify ---
const input = fs.readFileSync(0, 'utf-8').trim();
if (input) {
    const arr = input.split(/\\\\s+/);
    const result = reverseList(arr);
    console.log(result.join(' '));
}` }
    ]
  },
  {
    title: "Middle of the Linked List",
    startCode: [
      { language: "cpp", initialCode: `#include <iostream>
#include <vector>
#include <sstream>
using namespace std;

// Write your code inside this function
string findMiddle(vector<string>& arr) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    string line;
    if (getline(cin, line)) {
        stringstream ss(line);
        vector<string> arr;
        string val;
        while (ss >> val) arr.push_back(val);
        cout << findMiddle(arr) << "\\n";
    }
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    public static String findMiddle(String[] parts) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextLine()) {
            String[] parts = sc.nextLine().trim().split("\\\\s+");
            System.out.println(findMiddle(parts));
        }
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
function findMiddle(arr) {
  
}

// --- IO Boilerplate - Do not modify ---
const input = fs.readFileSync(0, 'utf-8').trim();
if (input) {
    const arr = input.split(/\\\\s+/);
    console.log(findMiddle(arr));
}` }
    ]
  },
  {
    title: "Merge Two Sorted Lists",
    startCode: [
      { language: "cpp", initialCode: `#include <iostream>
#include <vector>
#include <sstream>
using namespace std;

// Write your code inside this function
vector<int> mergeSorted(vector<int>& arr1, vector<int>& arr2) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    string l1, l2;
    getline(cin, l1);
    getline(cin, l2);
    stringstream ss1(l1), ss2(l2);
    vector<int> arr1, arr2;
    int val;
    while (ss1 >> val) arr1.push_back(val);
    while (ss2 >> val) arr2.push_back(val);
    vector<int> result = mergeSorted(arr1, arr2);
    for (size_t i = 0; i < result.size(); ++i) {
        cout << result[i] << (i + 1 == result.size() ? "" : " ");
    }
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    public static List<Integer> mergeSorted(int[] arr1, int[] arr2) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<Integer> a1 = new ArrayList<>(), a2 = new ArrayList<>();
        if (sc.hasNextLine()) {
            for (String s : sc.nextLine().trim().split("\\\\s+"))
                if (!s.isEmpty()) a1.add(Integer.parseInt(s));
        }
        if (sc.hasNextLine()) {
            for (String s : sc.nextLine().trim().split("\\\\s+"))
                if (!s.isEmpty()) a2.add(Integer.parseInt(s));
        }
        List<Integer> result = mergeSorted(
            a1.stream().mapToInt(i->i).toArray(),
            a2.stream().mapToInt(i->i).toArray()
        );
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < result.size(); i++) {
            sb.append(result.get(i));
            if (i + 1 < result.size()) sb.append(" ");
        }
        System.out.println(sb.toString());
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
function mergeSorted(arr1, arr2) {
  
}

// --- IO Boilerplate - Do not modify ---
const lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');
const arr1 = lines[0] ? lines[0].trim().split(/\\\\s+/).map(Number) : [];
const arr2 = lines[1] ? lines[1].trim().split(/\\\\s+/).map(Number) : [];
const result = mergeSorted(arr1, arr2);
console.log(result.join(' '));` }
    ]
  },
  {
    title: "Detect Cycle in Linked List",
    startCode: [
      { language: "cpp", initialCode: `#include <iostream>
#include <string>
using namespace std;

// Write your code inside this function
// nodes = linked list values, pos = cycle position (-1 = no cycle)
bool hasCycle(int pos) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    string line1, line2;
    getline(cin, line1);
    if (getline(cin, line2)) {
        int pos = stoi(line2);
        cout << (hasCycle(pos) ? "true" : "false") << "\\n";
    }
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    // pos = cycle position (-1 means no cycle)
    public static boolean hasCycle(int pos) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextLine()) sc.nextLine(); // read node values
        if (sc.hasNextInt()) {
            int pos = sc.nextInt();
            System.out.println(hasCycle(pos) ? "true" : "false");
        }
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
// pos = cycle position (-1 means no cycle)
function hasCycle(pos) {
  
}

// --- IO Boilerplate - Do not modify ---
const lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');
const pos = Number(lines[1]);
console.log(hasCycle(pos) ? "true" : "false");` }
    ]
  },
  {
    title: "Remove Nth Node From End of List",
    startCode: [
      { language: "cpp", initialCode: `#include <iostream>
#include <vector>
#include <sstream>
using namespace std;

// Write your code inside this function
vector<string> removeNthFromEnd(vector<string>& arr, int n) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    string line1, line2;
    getline(cin, line1);
    getline(cin, line2);
    stringstream ss(line1);
    vector<string> arr;
    string val;
    while (ss >> val) arr.push_back(val);
    int n = stoi(line2);
    vector<string> result = removeNthFromEnd(arr, n);
    for (size_t i = 0; i < result.size(); ++i) {
        cout << result[i] << (i + 1 == result.size() ? "" : " ");
    }
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    public static List<String> removeNthFromEnd(List<String> list, int n) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] parts = sc.nextLine().trim().split("\\\\s+");
        int n = Integer.parseInt(sc.nextLine().trim());
        List<String> list = new ArrayList<>(Arrays.asList(parts));
        List<String> result = removeNthFromEnd(list, n);
        System.out.println(String.join(" ", result));
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
function removeNthFromEnd(arr, n) {
  
}

// --- IO Boilerplate - Do not modify ---
const lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');
const arr = lines[0].trim().split(/\\\\s+/);
const n = Number(lines[1]);
const result = removeNthFromEnd(arr, n);
console.log(result.join(' '));` }
    ]
  },

  // ==========================================
  // GRAPH (5)
  // ==========================================
  {
    title: "Breadth First Search (BFS) Traversal",
    startCode: [
      { language: "cpp", initialCode: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

// Write your code inside this function
// adj = adjacency list, v = number of vertices
vector<int> bfs(vector<vector<int>>& adj, int v) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    int v, e;
    if (!(cin >> v >> e)) return 0;
    vector<vector<int>> adj(v);
    for (int i = 0; i < e; ++i) {
        int u, w; cin >> u >> w;
        adj[u].push_back(w);
    }
    vector<int> result = bfs(adj, v);
    for (size_t i = 0; i < result.size(); ++i) {
        cout << result[i] << (i + 1 == result.size() ? "" : " ");
    }
    cout << "\\n";
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    // adj = adjacency list, v = number of vertices
    public static List<Integer> bfs(List<List<Integer>> adj, int v) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int v = sc.nextInt(), e = sc.nextInt();
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < v; i++) adj.add(new ArrayList<>());
        for (int i = 0; i < e; i++) adj.get(sc.nextInt()).add(sc.nextInt());
        List<Integer> result = bfs(adj, v);
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < result.size(); i++) {
            sb.append(result.get(i));
            if (i + 1 < result.size()) sb.append(" ");
        }
        System.out.println(sb.toString());
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
// adj = adjacency list, v = number of vertices
function bfs(adj, v) {
  
}

// --- IO Boilerplate - Do not modify ---
const lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');
const [v, e] = lines[0].split(' ').map(Number);
const adj = Array.from({length: v}, () => []);
for(let i = 1; i <= e; i++){
  const [u, w] = lines[i].split(' ').map(Number);
  adj[u].push(w);
}
const result = bfs(adj, v);
console.log(result.join(' '));` }
    ]
  },
  {
    title: "Depth First Search (DFS) Traversal",
    startCode: [
      { language: "cpp", initialCode: `#include <iostream>
#include <vector>
using namespace std;

// Write your code inside this function
// adj = adjacency list, v = number of vertices
vector<int> dfs(vector<vector<int>>& adj, int v) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    int v, e;
    if (!(cin >> v >> e)) return 0;
    vector<vector<int>> adj(v);
    for (int i = 0; i < e; ++i) {
        int u, w; cin >> u >> w;
        adj[u].push_back(w);
    }
    vector<int> result = dfs(adj, v);
    for (size_t i = 0; i < result.size(); ++i) {
        cout << result[i] << (i + 1 == result.size() ? "" : " ");
    }
    cout << "\\n";
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    // adj = adjacency list, v = number of vertices
    public static List<Integer> dfs(List<List<Integer>> adj, int v) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int v = sc.nextInt(), e = sc.nextInt();
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < v; i++) adj.add(new ArrayList<>());
        for (int i = 0; i < e; i++) adj.get(sc.nextInt()).add(sc.nextInt());
        List<Integer> result = dfs(adj, v);
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < result.size(); i++) {
            sb.append(result.get(i));
            if (i + 1 < result.size()) sb.append(" ");
        }
        System.out.println(sb.toString());
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
// adj = adjacency list, v = number of vertices
function dfs(adj, v) {
  
}

// --- IO Boilerplate - Do not modify ---
const lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');
const [v, e] = lines[0].split(' ').map(Number);
const adj = Array.from({length: v}, () => []);
for(let i = 1; i <= e; i++){
  const [u, w] = lines[i].split(' ').map(Number);
  adj[u].push(w);
}
const result = dfs(adj, v);
console.log(result.join(' '));` }
    ]
  },
  {
    title: "Detect Cycle in an Undirected Graph",
    startCode: [
      { language: "cpp", initialCode: `#include <iostream>
#include <vector>
using namespace std;

// Write your code inside this function
// edges = list of {u, v} pairs, v = num vertices, e = num edges
bool hasCycle(int v, int e, vector<pair<int,int>>& edges) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    int v, e;
    if (!(cin >> v >> e)) return 0;
    vector<pair<int,int>> edges(e);
    for (int i = 0; i < e; ++i) {
        cin >> edges[i].first >> edges[i].second;
    }
    cout << (hasCycle(v, e, edges) ? "true" : "false") << "\\n";
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    // v = vertices, e = edges count, edges = int[e][2]
    public static boolean hasCycle(int v, int e, int[][] edges) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int v = sc.nextInt(), e = sc.nextInt();
        int[][] edges = new int[e][2];
        for (int i = 0; i < e; i++) {
            edges[i][0] = sc.nextInt();
            edges[i][1] = sc.nextInt();
        }
        System.out.println(hasCycle(v, e, edges) ? "true" : "false");
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
// v = vertices, e = edges count, edges = [[u,w], ...]
function hasCycle(v, e, edges) {
  
}

// --- IO Boilerplate - Do not modify ---
const lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');
const [v, numE] = lines[0].split(' ').map(Number);
const edges = [];
for(let i = 1; i <= numE; i++){
  edges.push(lines[i].split(' ').map(Number));
}
console.log(hasCycle(v, numE, edges) ? "true" : "false");` }
    ]
  },
  {
    title: "Find Center of Star Graph",
    startCode: [
      { language: "cpp", initialCode: `#include <iostream>
using namespace std;

// Write your code inside this function
// Given first two edges {u1,v1} and {u2,v2}, find the center node
int findCenter(int u1, int v1, int u2, int v2) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    int n;
    if (!(cin >> n)) return 0;
    int u1, v1, u2, v2;
    cin >> u1 >> v1 >> u2 >> v2;
    cout << findCenter(u1, v1, u2, v2) << "\\n";
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    // Given first two edges, find the center node
    public static int findCenter(int u1, int v1, int u2, int v2) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int n = sc.nextInt();
        int u1 = sc.nextInt(), v1 = sc.nextInt();
        int u2 = sc.nextInt(), v2 = sc.nextInt();
        System.out.println(findCenter(u1, v1, u2, v2));
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
// Given first two edges, find the center node
function findCenter(u1, v1, u2, v2) {
  
}

// --- IO Boilerplate - Do not modify ---
const lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');
const [u1, v1] = lines[1].split(' ').map(Number);
const [u2, v2] = lines[2].split(' ').map(Number);
console.log(findCenter(u1, v1, u2, v2));` }
    ]
  },
  {
    title: "Shortest Path in Unweighted Graph",
    startCode: [
      { language: "cpp", initialCode: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

// Write your code inside this function
// adj = adjacency list, v = num vertices
// Return shortest distance from vertex 0 to vertex v-1
int shortestPath(vector<vector<int>>& adj, int v) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    int v, e;
    if (!(cin >> v >> e)) return 0;
    vector<vector<int>> adj(v);
    for (int i = 0; i < e; ++i) {
        int u, w; cin >> u >> w;
        adj[u].push_back(w); adj[w].push_back(u);
    }
    cout << shortestPath(adj, v) << "\\n";
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    // adj = adjacency list, v = num vertices
    // Return shortest distance from vertex 0 to vertex v-1
    public static int shortestPath(List<List<Integer>> adj, int v) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int v = sc.nextInt(), e = sc.nextInt();
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < v; i++) adj.add(new ArrayList<>());
        for (int i = 0; i < e; i++) {
            int u = sc.nextInt(), w = sc.nextInt();
            adj.get(u).add(w); adj.get(w).add(u);
        }
        System.out.println(shortestPath(adj, v));
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
// adj = adjacency list, v = num vertices
// Return shortest distance from vertex 0 to vertex v-1
function shortestPath(adj, v) {
  
}

// --- IO Boilerplate - Do not modify ---
const lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');
const [v, e] = lines[0].split(' ').map(Number);
const adj = Array.from({length: v}, () => []);
for(let i = 1; i <= e; i++){
  const [u, w] = lines[i].split(' ').map(Number);
  adj[u].push(w); adj[w].push(u);
}
console.log(shortestPath(adj, v));` }
    ]
  },

  // ==========================================
  // DYNAMIC PROGRAMMING (5)
  // ==========================================
  {
    title: "Climbing Stairs",
    startCode: [
      { language: "cpp", initialCode: `#include <iostream>
using namespace std;

// Write your code inside this function
int climbStairs(int n) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    int n;
    if (cin >> n) {
        cout << climbStairs(n) << "\\n";
    }
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    public static long climbStairs(int n) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            System.out.println(climbStairs(sc.nextInt()));
        }
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
function climbStairs(n) {
  
}

// --- IO Boilerplate - Do not modify ---
const n = Number(fs.readFileSync(0, 'utf-8').trim());
console.log(climbStairs(n));` }
    ]
  },
  {
    title: "0/1 Knapsack Problem",
    startCode: [
      { language: "cpp", initialCode: `#include <iostream>
#include <vector>
#include <sstream>
using namespace std;

// Write your code inside this function
int knapsack(int n, int w, vector<int>& val, vector<int>& wt) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    int n, w;
    if (!(cin >> n >> w)) return 0;
    vector<int> val(n), wt(n);
    for (int i = 0; i < n; ++i) cin >> val[i];
    for (int i = 0; i < n; ++i) cin >> wt[i];
    cout << knapsack(n, w, val, wt) << "\\n";
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    public static int knapsack(int n, int w, int[] val, int[] wt) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextInt()) return;
        int n = sc.nextInt(), w = sc.nextInt();
        int[] val = new int[n], wt = new int[n];
        for (int i = 0; i < n; i++) val[i] = sc.nextInt();
        for (int i = 0; i < n; i++) wt[i] = sc.nextInt();
        System.out.println(knapsack(n, w, val, wt));
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
function knapsack(n, w, val, wt) {
  
}

// --- IO Boilerplate - Do not modify ---
const lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');
const [n, w] = lines[0].split(' ').map(Number);
const val = lines[1].split(' ').map(Number);
const wt = lines[2].split(' ').map(Number);
console.log(knapsack(n, w, val, wt));` }
    ]
  },
  {
    title: "Longest Common Subsequence",
    startCode: [
      { language: "cpp", initialCode: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

// Write your code inside this function
int longestCommonSubsequence(string s1, string s2) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    string s1, s2;
    if (cin >> s1 >> s2) {
        cout << longestCommonSubsequence(s1, s2) << "\\n";
    }
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    public static int longestCommonSubsequence(String s1, String s2) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNext()) return;
        String s1 = sc.next(), s2 = sc.next();
        System.out.println(longestCommonSubsequence(s1, s2));
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
function longestCommonSubsequence(s1, s2) {
  
}

// --- IO Boilerplate - Do not modify ---
const [s1, s2] = fs.readFileSync(0, 'utf-8').trim().split(' ');
console.log(longestCommonSubsequence(s1, s2));` }
    ]
  },
  {
    title: "Coin Change Problem",
    startCode: [
      { language: "cpp", initialCode: `#include <iostream>
#include <vector>
#include <sstream>
using namespace std;

// Write your code inside this function
int coinChange(vector<int>& coins, int amount) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    string line1, line2;
    if (!getline(cin, line1)) return 0;
    getline(cin, line2);
    stringstream ss(line1);
    vector<int> coins;
    int c;
    while (ss >> c) coins.push_back(c);
    int amount = stoi(line2);
    cout << coinChange(coins, amount) << "\\n";
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    public static int coinChange(int[] coins, int amount) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextLine()) return;
        String[] parts = sc.nextLine().trim().split("\\\\s+");
        int amount = Integer.parseInt(sc.nextLine().trim());
        int[] coins = new int[parts.length];
        for (int i = 0; i < parts.length; i++) coins[i] = Integer.parseInt(parts[i]);
        System.out.println(coinChange(coins, amount));
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
function coinChange(coins, amount) {
  
}

// --- IO Boilerplate - Do not modify ---
const lines = fs.readFileSync(0, 'utf-8').trim().split('\\n');
const coins = lines[0].split(' ').map(Number);
const amount = Number(lines[1]);
console.log(coinChange(coins, amount));` }
    ]
  },
  {
    title: "House Robber",
    startCode: [
      { language: "cpp", initialCode: `#include <iostream>
#include <vector>
#include <sstream>
using namespace std;

// Write your code inside this function
int rob(vector<int>& nums) {
    
}

// --- IO Boilerplate - Do not modify ---
int main() {
    string line;
    if (getline(cin, line)) {
        stringstream ss(line);
        vector<int> nums;
        int val;
        while (ss >> val) nums.push_back(val);
        cout << rob(nums) << "\\n";
    }
    return 0;
}` },
      { language: "java", initialCode: `import java.util.*;

public class Main {
    // Write your code inside this function
    public static int rob(int[] nums) {
        
    }

    // --- IO Boilerplate - Do not modify ---
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextLine()) {
            String[] parts = sc.nextLine().trim().split("\\\\s+");
            int[] nums = new int[parts.length];
            for (int i = 0; i < parts.length; i++) {
                if (!parts[i].isEmpty()) nums[i] = Integer.parseInt(parts[i]);
            }
            System.out.println(rob(nums));
        }
    }
}` },
      { language: "javascript", initialCode: `const fs = require('fs');

// Write your code inside this function
function rob(nums) {
  
}

// --- IO Boilerplate - Do not modify ---
const nums = fs.readFileSync(0, 'utf-8').trim().split(/\\\\s+/).map(Number);
console.log(rob(nums));` }
    ]
  }
];

async function run() {
  try {
    await main();
    console.log("Connected to MongoDB.");

    let updated = 0, notFound = 0;
    for (const fix of fixes) {
      const result = await Problem.findOneAndUpdate(
        { title: fix.title },
        { startCode: fix.startCode },
        { new: true }
      );
      if (result) {
        console.log(`✅ Fixed starter code: "${fix.title}" (${fix.startCode.length} languages)`);
        updated++;
      } else {
        console.log(`⚠️  Not found in DB: "${fix.title}"`);
        notFound++;
      }
    }

    console.log(`\nDone! Updated: ${updated}, Not found: ${notFound}`);
    process.exit(0);
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  }
}

run();
