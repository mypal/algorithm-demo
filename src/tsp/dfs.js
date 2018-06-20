module.exports = (paramMap) => {
    let map = paramMap,
        n = map.length,
        a = [0],
        v = new Array(n),
        cur = 0,
        ans = Infinity;

    let dfs = (i) => {
        if (a.length === n) {
            if (ans > cur+map[i][0]) {
            	ans = cur+map[i][0];
            }
            return;
        }
        for (let j = 1; j < n; j++) {
        	if (!v[j]) {
        		v[j] = 1;
        		a.push(j);
        		cur += map[i][j];
        		dfs(j);
        		cur -= map[i][j];
        		a.pop();
        		v[j] = 0;
        	}
        }
    }
    dfs(0);
    return ans;
}
