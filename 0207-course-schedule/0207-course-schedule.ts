function canFinish(numCourses: number, prerequisites: number[][]): boolean {

    const graph: number[][] = Array.from({ length: numCourses }, () => []);
    const indegree: number[] = new Array(numCourses).fill(0);

    // construct the graph and indegree
    for (const [course, prereq] of prerequisites) {
        graph[prereq].push(course);
        indegree[course]++;
    }

    const queue: number[] = [];

    // create queue from nodes with indegree 0
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    let completed = 0;

    while (queue.length > 0) {
        const course = queue.shift()!;
        completed++;

        for (const next of graph[course]) {
            indegree[next]--;

            if (indegree[next] === 0) {
                queue.push(next);
            }
        }
    }

    return completed === numCourses;
}