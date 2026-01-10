class Solution {
    public int orangesRotting(int[][] grid) {

        if (grid == null || grid.length == 0)
            return 0;

        int fresh = 0;
        Queue<int[]> queue = new LinkedList<>();

        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {
                if (grid[i][j] == 1)
                    fresh++;
                else if (grid[i][j] == 2)
                    queue.offer(new int[] { i, j });
            }
        }

        if (fresh == 0)
            return 0;

        int mins = 0;
        int dirs[][] = { { 0, 1 }, { -1, 0 }, { 0, -1 }, { 1, 0 } };
        while (!queue.isEmpty()) {

            mins++;
            //System.out.println(mins);
            int size = queue.size();

            for (int i = 0; i < size; i++) {
                int point[] = queue.poll();
                for (int dir[] : dirs) {
                    int x = point[0] + dir[0];
                    int y = point[1] + dir[1];

                    //checking for out of bounds
                    //checking if orange is not already rotten or for empty cell
                    if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] == 0 || grid[x][y] == 2)
                        continue;

                    grid[x][y] = 2;
                    queue.offer(new int[] { x, y });
                    fresh--;
                }
            }
        }
        return fresh == 0 ? mins-1 : -1;
    }
}
