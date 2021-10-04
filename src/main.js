function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    // Daun sebelah kiri (depan atas) 
    const daun1 = {
        // warna batang pada gambar kiri
        colorBatang : [0.431, 0.790, 0.300],
        // warna daun pada gambar kiri
        colorDaun : [0.0315, 0.630, 0.261],

        // titik-titik penyusun gambar kiri
        A : [-0.55, 0.60],
        B : [-0.45, 0.60],
        C : [-0.54, 0.37],
        D : [-0.46, 0.37],
        E : [-0.71, 0.26],
        F : [-0.53, 0.26],
        G : [-0.47, 0.26],
        H : [-0.29, 0.26],
        I : [-0.77, 0.19],
        J : [-0.53, 0.19],
        K : [-0.47, 0.19],
        L : [-0.25, 0.19],
        M : [-0.52, -0.11],
        N : [-0.48, -0.11],
        O : [-0.52, -0.15],
        P : [-0.48, -0.15],
        Q : [-0.77, -0.37],
        R : [-0.53, -0.37],
        S : [-0.45, -0.37],
        T : [-0.25, -0.37],
        U : [-0.53, -0.40],
        V : [-0.45, -0.40],
        W : [-0.65, -0.56],
        X : [-0.35, -0.56],
        Y : [-0.50, -0.76]
    }

    // Daun sebelah kanan (kiri atas) 
    const daun2 = {
        // warna batang pada gambar kanan
        colorBatang : [0.431, 0.790, 0.300],
        // warna daun pada gambar kanan
        colorDaun : [0.0315, 0.630, 0.261],

        // titik-titik penyusun gambar kanan
        A : [0.06, -0.08],
        B : [0.06, 0.08],
        C : [0.21, -0.07],
        D : [0.21, 0.07],
        E : [0.29, -0.31],
        F : [0.29, -0.06],
        G : [0.29, 0.06],
        H : [0.29, 0.31],
        I : [0.34, -0.39],
        J : [0.34, -0.06],
        K : [0.34, 0.06],
        L : [0.34, 0.39],
        M : [0.53, -0.05],
        N : [0.53, 0.05],
        O : [0.56, -0.05],
        P : [0.56, 0.05],
        Q : [0.71, -0.39],
        R : [0.71, -0.04],
        S : [0.71, 0.04],
        T : [0.71, 0.39],
        U : [0.73, -0.04],
        V : [0.73, 0.04],
        W : [0.83, -0.24],
        X : [0.83, 0.24],
        Y : [0.97, 0.00]
    }

    // kumpulan vertex pada gambar kiri dan kanan
    const vertices = [
        // objek batang pada gambar kiri
        ...daun1.A, ...daun1.colorBatang,
        ...daun1.B, ...daun1.colorBatang,
        ...daun1.D, ...daun1.colorBatang,
        ...daun1.A, ...daun1.colorBatang,
        ...daun1.C, ...daun1.colorBatang,
        ...daun1.D, ...daun1.colorBatang, // 30
        
        ...daun1.C, ...daun1.colorBatang,
        ...daun1.D, ...daun1.colorBatang,
        ...daun1.G, ...daun1.colorBatang,
        ...daun1.C, ...daun1.colorBatang,
        ...daun1.F, ...daun1.colorBatang,
        ...daun1.G, ...daun1.colorBatang, // 60
        
        ...daun1.F, ...daun1.colorBatang,
        ...daun1.G, ...daun1.colorBatang,
        ...daun1.K, ...daun1.colorBatang,
        ...daun1.F, ...daun1.colorBatang,
        ...daun1.J, ...daun1.colorBatang,
        ...daun1.K, ...daun1.colorBatang, // 90
        
        ...daun1.F, ...daun1.colorBatang,
        ...daun1.J, ...daun1.colorBatang,
        ...daun1.Q, ...daun1.colorBatang,
        ...daun1.J, ...daun1.colorBatang,
        ...daun1.M, ...daun1.colorBatang,
        ...daun1.N, ...daun1.colorBatang, // 120

        ...daun1.J, ...daun1.colorBatang,
        ...daun1.K, ...daun1.colorBatang,
        ...daun1.N, ...daun1.colorBatang,
        ...daun1.M, ...daun1.colorBatang,
        ...daun1.O, ...daun1.colorBatang,
        ...daun1.P, ...daun1.colorBatang, // 150

        ...daun1.M, ...daun1.colorBatang,
        ...daun1.N, ...daun1.colorBatang,
        ...daun1.P, ...daun1.colorBatang,
        ...daun1.N, ...daun1.colorBatang,
        ...daun1.P, ...daun1.colorBatang,
        ...daun1.T, ...daun1.colorBatang, // 180

        ...daun1.O, ...daun1.colorBatang,
        ...daun1.R, ...daun1.colorBatang,
        ...daun1.S, ...daun1.colorBatang,
        ...daun1.O, ...daun1.colorBatang,
        ...daun1.P, ...daun1.colorBatang,
        ...daun1.S, ...daun1.colorBatang, // 210

        ...daun1.R, ...daun1.colorBatang,
        ...daun1.W, ...daun1.colorBatang,
        ...daun1.U, ...daun1.colorBatang,
        ...daun1.R, ...daun1.colorBatang,
        ...daun1.U, ...daun1.colorBatang,
        ...daun1.V, ...daun1.colorBatang, // 240

        ...daun1.R, ...daun1.colorBatang,
        ...daun1.S, ...daun1.colorBatang,
        ...daun1.V, ...daun1.colorBatang,
        ...daun1.U, ...daun1.colorBatang,
        ...daun1.V, ...daun1.colorBatang,
        ...daun1.Y, ...daun1.colorBatang, // 270
        
        // objek daun pada gambar kiri
        ...daun1.E, ...daun1.colorDaun,
        ...daun1.F, ...daun1.colorDaun,
        ...daun1.I, ...daun1.colorDaun,
        ...daun1.C, ...daun1.colorDaun,
        ...daun1.E, ...daun1.colorDaun,
        ...daun1.F, ...daun1.colorDaun, // 300
        
        ...daun1.D, ...daun1.colorDaun,
        ...daun1.G, ...daun1.colorDaun,
        ...daun1.H, ...daun1.colorDaun,
        ...daun1.G, ...daun1.colorDaun,
        ...daun1.H, ...daun1.colorDaun,
        ...daun1.L, ...daun1.colorDaun, // 330

        ...daun1.F, ...daun1.colorDaun,
        ...daun1.I, ...daun1.colorDaun,
        ...daun1.Q, ...daun1.colorDaun,
        ...daun1.J, ...daun1.colorDaun,
        ...daun1.M, ...daun1.colorDaun,
        ...daun1.Q, ...daun1.colorDaun, // 360
        
        ...daun1.Q, ...daun1.colorDaun,
        ...daun1.M, ...daun1.colorDaun,
        ...daun1.O, ...daun1.colorDaun,
        ...daun1.K, ...daun1.colorDaun,
        ...daun1.T, ...daun1.colorDaun,
        ...daun1.N, ...daun1.colorDaun, // 390

        ...daun1.G, ...daun1.colorDaun,
        ...daun1.T, ...daun1.colorDaun,
        ...daun1.K, ...daun1.colorDaun,
        ...daun1.G, ...daun1.colorDaun,
        ...daun1.L, ...daun1.colorDaun,
        ...daun1.T, ...daun1.colorDaun, // 420

        ...daun1.Q, ...daun1.colorDaun,
        ...daun1.O, ...daun1.colorDaun,
        ...daun1.R, ...daun1.colorDaun,
        ...daun1.P, ...daun1.colorDaun,
        ...daun1.S, ...daun1.colorDaun,
        ...daun1.T, ...daun1.colorDaun, // 450

        ...daun1.Q, ...daun1.colorDaun,
        ...daun1.R, ...daun1.colorDaun,
        ...daun1.W, ...daun1.colorDaun,
        ...daun1.U, ...daun1.colorDaun,
        ...daun1.W, ...daun1.colorDaun,
        ...daun1.Y, ...daun1.colorDaun, // 480

        ...daun1.V, ...daun1.colorDaun,
        ...daun1.X, ...daun1.colorDaun,
        ...daun1.Y, ...daun1.colorDaun,
        ...daun1.S, ...daun1.colorDaun,
        ...daun1.X, ...daun1.colorDaun,
        ...daun1.V, ...daun1.colorDaun, // 510

        ...daun1.S, ...daun1.colorDaun,
        ...daun1.T, ...daun1.colorDaun,
        ...daun1.X, ...daun1.colorDaun, // 525
        
        // objek batang pada gambar kanan
        ...daun2.A, ...daun2.colorBatang,
        ...daun2.B, ...daun2.colorBatang,
        ...daun2.D, ...daun2.colorBatang,
        ...daun2.A, ...daun2.colorBatang,
        ...daun2.C, ...daun2.colorBatang,
        ...daun2.D, ...daun2.colorBatang, // 555
        
        ...daun2.C, ...daun2.colorBatang,
        ...daun2.D, ...daun2.colorBatang,
        ...daun2.G, ...daun2.colorBatang,
        ...daun2.C, ...daun2.colorBatang,
        ...daun2.F, ...daun2.colorBatang,
        ...daun2.G, ...daun2.colorBatang, // 585
        
        ...daun2.F, ...daun2.colorBatang,
        ...daun2.G, ...daun2.colorBatang,
        ...daun2.K, ...daun2.colorBatang,
        ...daun2.F, ...daun2.colorBatang,
        ...daun2.J, ...daun2.colorBatang,
        ...daun2.K, ...daun2.colorBatang, // 615
        
        ...daun2.F, ...daun2.colorBatang,
        ...daun2.J, ...daun2.colorBatang,
        ...daun2.Q, ...daun2.colorBatang,
        ...daun2.J, ...daun2.colorBatang,
        ...daun2.M, ...daun2.colorBatang,
        ...daun2.N, ...daun2.colorBatang, // 645

        ...daun2.J, ...daun2.colorBatang,
        ...daun2.K, ...daun2.colorBatang,
        ...daun2.N, ...daun2.colorBatang,
        ...daun2.M, ...daun2.colorBatang,
        ...daun2.O, ...daun2.colorBatang,
        ...daun2.P, ...daun2.colorBatang, // 675

        ...daun2.M, ...daun2.colorBatang,
        ...daun2.N, ...daun2.colorBatang,
        ...daun2.P, ...daun2.colorBatang,
        ...daun2.N, ...daun2.colorBatang,
        ...daun2.P, ...daun2.colorBatang,
        ...daun2.T, ...daun2.colorBatang, // 705

        ...daun2.O, ...daun2.colorBatang,
        ...daun2.R, ...daun2.colorBatang,
        ...daun2.S, ...daun2.colorBatang,
        ...daun2.O, ...daun2.colorBatang,
        ...daun2.P, ...daun2.colorBatang,
        ...daun2.S, ...daun2.colorBatang, // 735

        ...daun2.R, ...daun2.colorBatang,
        ...daun2.W, ...daun2.colorBatang,
        ...daun2.U, ...daun2.colorBatang,
        ...daun2.R, ...daun2.colorBatang,
        ...daun2.U, ...daun2.colorBatang,
        ...daun2.V, ...daun2.colorBatang, // 765

        ...daun2.R, ...daun2.colorBatang,
        ...daun2.S, ...daun2.colorBatang,
        ...daun2.V, ...daun2.colorBatang,
        ...daun2.U, ...daun2.colorBatang,
        ...daun2.V, ...daun2.colorBatang,
        ...daun2.Y, ...daun2.colorBatang, // 795
        
        // objek daun pada gambar kiri
        ...daun2.E, ...daun2.colorDaun,
        ...daun2.F, ...daun2.colorDaun,
        ...daun2.I, ...daun2.colorDaun,
        ...daun2.C, ...daun2.colorDaun,
        ...daun2.E, ...daun2.colorDaun,
        ...daun2.F, ...daun2.colorDaun, // 825
        
        ...daun2.D, ...daun2.colorDaun,
        ...daun2.G, ...daun2.colorDaun,
        ...daun2.H, ...daun2.colorDaun,
        ...daun2.G, ...daun2.colorDaun,
        ...daun2.H, ...daun2.colorDaun,
        ...daun2.L, ...daun2.colorDaun, // 855

        ...daun2.F, ...daun2.colorDaun,
        ...daun2.I, ...daun2.colorDaun,
        ...daun2.Q, ...daun2.colorDaun,
        ...daun2.J, ...daun2.colorDaun,
        ...daun2.M, ...daun2.colorDaun,
        ...daun2.Q, ...daun2.colorDaun, // 885
        
        ...daun2.Q, ...daun2.colorDaun,
        ...daun2.M, ...daun2.colorDaun,
        ...daun2.O, ...daun2.colorDaun,
        ...daun2.K, ...daun2.colorDaun,
        ...daun2.T, ...daun2.colorDaun,
        ...daun2.N, ...daun2.colorDaun, // 915

        ...daun2.G, ...daun2.colorDaun,
        ...daun2.T, ...daun2.colorDaun,
        ...daun2.K, ...daun2.colorDaun,
        ...daun2.G, ...daun2.colorDaun,
        ...daun2.L, ...daun2.colorDaun,
        ...daun2.T, ...daun2.colorDaun, // 945

        ...daun2.Q, ...daun2.colorDaun,
        ...daun2.O, ...daun2.colorDaun,
        ...daun2.R, ...daun2.colorDaun,
        ...daun2.P, ...daun2.colorDaun,
        ...daun2.S, ...daun2.colorDaun,
        ...daun2.T, ...daun2.colorDaun, // 975

        ...daun2.Q, ...daun2.colorDaun,
        ...daun2.R, ...daun2.colorDaun,
        ...daun2.W, ...daun2.colorDaun,
        ...daun2.U, ...daun2.colorDaun,
        ...daun2.W, ...daun2.colorDaun,
        ...daun2.Y, ...daun2.colorDaun, // 1005

        ...daun2.V, ...daun2.colorDaun,
        ...daun2.X, ...daun2.colorDaun,
        ...daun2.Y, ...daun2.colorDaun,
        ...daun2.S, ...daun2.colorDaun,
        ...daun2.X, ...daun2.colorDaun,
        ...daun2.V, ...daun2.colorDaun, // 1035

        ...daun2.S, ...daun2.colorDaun,
        ...daun2.T, ...daun2.colorDaun,
        ...daun2.X, ...daun2.colorDaun, // 1050
        
    ]
    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    var vertexShaderCode = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);


    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);


    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);


    var shaderProgram = gl.createProgram();


    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);


    gl.linkProgram(shaderProgram);


    gl.useProgram(shaderProgram);


    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition,
        2,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        0
    );
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor,
        3,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        2 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(aColor);

    var freeze = false;
    // Interactive graphics with mouse
    function onMouseClick(event) {
        freeze = !freeze;
    }
    document.addEventListener("click", onMouseClick);
    // Interactive graphics with keyboard
    function onKeydown(event) {
        if (event.keyCode == 32) freeze = true;
    }

    function onKeyup(event) {
        if (event.keyCode == 32) freeze = false;
    }
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("keyup", onKeyup);

    // kecepatan sesuai nrp (0134)
    var speed = 0.0134;
    var change = 0;
    var uChange = gl.getUniformLocation(shaderProgram, "uChange");

    function moveVertices() {
        if (vertices[626] < -1.0 || vertices[701] > 1.0) {
            speed = speed * -1;
        }

        for (let i = 526; i < vertices.length; i += 5) {
            vertices[i] = vertices[i] + speed;
        }
    }


    function render() {
        moveVertices();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        change = change + speed;
        gl.uniform1f(uChange, change);

        gl.clearColor(0.730, 0.451, 0.131, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        var primitive = gl.TRIANGLES;
        var offset = 0;
        var nVertex = 210;
        gl.drawArrays(primitive, offset, nVertex);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}
