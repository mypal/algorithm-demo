module.exports = (paramMap) => {
    let map = paramMap,
        n = map.length,
        m = 1 << n,
        f = new Array(n);
    for (let i = 0; i < n; i++) {
        f[i] = new Array(m);
    }
    f[0][1] = 0;
    for (let j = 2; j < m; j++) {
        for (let i = 1; i < n; i++) {
            if (j & (1 << i)) {
                let jj = j - (1 << i);
                for (let ii = 0; ii < n; ii++) {
                    if (jj & (1 << ii) && f[ii][jj] !== undefined &&
                        (f[i][j] === undefined || f[i][j] > f[ii][jj] + map[ii][i])) {
                        f[i][j] = f[ii][jj] + map[ii][i];
                    }
                }
            }
        }
    }
    let ans = Infinity;
    m--;
    for (let i = 1; i < n; i++) {
        if (ans > f[i][m] + map[i][0]) {
            ans = f[i][m] + map[i][0];
        }
    }
    return ans;
}
