/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    const adjList = {};
    const indegree = new Array(numCourses).fill(0);

    for (let i = 0; i < numCourses; i++) {
        adjList[i] = [];
    }

    for (let [course, pre] of prerequisites) {
        adjList[pre].push(course);
        indegree[course]++;
    }


    const queue = [];
    const result = [];

    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    while (queue.length) {
        const curr = queue.shift();
        result.push(curr);

        for (let neighbor of adjList[curr]) {
            indegree[neighbor]--;

            if (indegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    if (result.length === numCourses) {
        return result;
    }
    return [];
};