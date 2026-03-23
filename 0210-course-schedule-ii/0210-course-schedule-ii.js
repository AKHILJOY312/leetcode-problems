class Graph {
    constructor(numCourses) {
        this.adList = {};
        this.indegree = new Array(numCourses).fill(0);

        for (let i = 0; i < numCourses; i++) {
            this.adList[i] = [];
        }
    }

    addVertex(v) {
        if (!this.adList[v]) {
            this.adList[v] = [];
        }
    }

    addEdge(pre, course) {
        this.addVertex(pre);
        this.addVertex(course);

        this.adList[pre].push(course);
        this.indegree[course]++;
    }

    bfs(numCourses) {
        const queue = [];
        const result = [];

        // push indegree 0
        for (let i = 0; i < numCourses; i++) {
            if (this.indegree[i] === 0) {
                queue.push(i);
            }
        }

        while (queue.length) {
            const curr = queue.shift();
            result.push(curr);

            for (let neighbor of this.adList[curr]) {
                this.indegree[neighbor]--;

                if (this.indegree[neighbor] === 0) {
                    queue.push(neighbor);
                }
            }
        }

        return result.length === numCourses ? result : [];
    }
}



var findOrder = function(numCourses, prerequisites) {

    const graph = new Graph(numCourses);

    for (let [course, pre] of prerequisites) {
        graph.addEdge(pre, course);
    }

    return graph.bfs(numCourses);
};