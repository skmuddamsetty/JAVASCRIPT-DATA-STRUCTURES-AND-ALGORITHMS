Table point holds the x coordinate of some points on x-axis in a plane, which are all integers.

 
Write a query to find the shortest distance between two points in these points.

 

| x   |
|-----|
| -1  |
| 0   |
| 2   |

 
The shortest distance is '1' obviously, which is from point '-1' to '0'. So the output is as below:

 

| shortest|
|---------|
| 1       |

 
Note: Every point is unique, which means there is no duplicates in table point.

 
Follow-up: What if all these points have an id and are arranged from the left most to the right most of x axis? 

Approach: Using ABS() and MIN() functions [Accepted]

Intuition

Calculate the distances between each two points first, and then display the minimum one.

Algorithm

To get the distances of each two points, we need to join this table with itself and use ABS() function since the distance is nonnegative. One trick here is to add the condition in the join to avoid calculating the distance between a point with itself.

SELECT
    p1.x, p2.x, ABS(p1.x - p2.x) AS distance
FROM
    point p1
        JOIN
    point p2 ON p1.x != p2.x
;

    Note: The columns p1.x, p2.x are only for demonstrating purpose, so they are not actually needed in the end.

Taking the sample data for example, the output would be as below.

| x  | x  | distance |
|----|----|----------|
| 0  | -1 | 1        |
| 2  | -1 | 3        |
| -1 | 0  | 1        |
| 2  | 0  | 2        |
| -1 | 2  | 3        |
| 0  | 2  | 2        |

At last, use MIN() to select the smallest value in the distance column.

MySQL

SELECT
    MIN(ABS(p1.x - p2.x)) AS shortest
FROM
    point p1
        JOIN
    point p2 ON p1.x != p2.x
;
