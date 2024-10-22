class Solution {
public:
    // Comparator function to sort the balloons based on their end points in ascending order
    static bool cmp(const std::vector<int> &a, const std::vector<int> &b) {
        return a[1] < b[1]; // Sort by end points
    }

    int findMinArrowShots(std::vector<std::vector<int>>& points) {
        // If there are no balloons, return 0
        if (points.empty()) return 0;

        
        std::sort(points.begin(), points.end(), cmp);

        int arrows = 1; // Initialize the number of arrows to 1 (at least one arrow will be needed)
        int end = points[0][1]; // Initialize the end point with the end point of the first balloon

        for (int i = 1; i < points.size(); ++i) {
            // If the start point of the current balloon is beyond the current end point,
            // a new arrow is required, update the end point to the end point of the current balloon
            if (points[i][0] > end) {
                ++arrows;
                end = points[i][1];
            }
        }

        return arrows;
    }
};