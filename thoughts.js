/* Home hero: a line-art "me" rides a bicycle left to right forever. Along
   the way she thinks, gets an idea, sings, waves at an oncoming rider, works
   a paper plane from her basket, then throws her arms open. Nothing stops;
   only the speed changes. Legs/arms are solved per frame (two-bone IK);
   props are drawn in by CSS from data-act. */
(function () {
    'use strict';

    var svg = document.querySelector('.thought-svg');
    if (!svg) return;

    var NS = 'http://www.w3.org/2000/svg';
    var GROUND = 340, SCALE = 1.1, BASE_SPEED = 50, START = -80, END = 990;
    var BB = [0, -26], HIP = [-12, -76], SHOULDER = [4, -114];
    var GRIP_F = [37, -70], GRIP_B = [35, -71];
    var RANGES = [[30, 150, 'think'], [160, 250, 'idea'], [260, 400, 'sing'], [640, 740, 'ship'], [770, 910, 'wheee']];
    var PACE = { think: 0.8, idea: 1.15, sing: 1, wave: 0.9, ship: 0.8, wheee: 1.5 };

    var BIKE =
        '<g class="wheel"><circle cx="-36" cy="-24" r="24"/><circle cx="-36" cy="-24" r="2"/>' +
        '<path class="spokes" d="M-36 -48 V0 M-60 -24 H-12 M-53 -41 L-19 -7 M-53 -7 L-19 -41"/></g>' +
        '<g class="wheel"><circle cx="40" cy="-24" r="24"/><circle cx="40" cy="-24" r="2"/>' +
        '<path class="spokes" d="M40 -48 V0 M16 -24 H64 M23 -41 L57 -7 M23 -7 L57 -41"/></g>' +
        '<path d="M-36 -24 L0 -26 L-12 -66 Z M-11 -62 L30 -64 M0 -26 L33 -56 M30 -66 L33 -56 L40 -24 M30 -66 L29 -74 q8 -2 10 5"/>' +
        '<path class="saddle" d="M-20 -68 q8 -3 16 0"/>' +
        '<circle cx="0" cy="-26" r="5"/>';
    var BASKET =
        '<path d="M33 -62 L42 -62"/>' +
        '<path d="M41 -66 h20 l-3 15 h-14 Z M46 -66 l1 15 M51 -66 v15 M56 -66 l-1 15 M42 -59 h18"/>' +
        // the paper plane waits in the basket, nose up, until she throws it
        '<path class="plane basket-plane" transform="translate(53 -68) rotate(-30) scale(1.1)" d="M7 0 L-8 -5 L-4 0 L-8 4.5 Z M7 0 L-4 0"/>';
    var PROPS =
        '<g class="prop prop-think">' +
            '<circle pathLength="1" cx="22" cy="-154" r="2"/><circle pathLength="1" cx="28" cy="-164" r="3.5"/>' +
            '<path pathLength="1" d="M24 -186 q-4 -14 10 -14 q4 -10 16 -6 q12 -6 18 4 q12 2 8 14 q4 10 -8 12 q-6 8 -18 4 q-10 6 -18 -2 q-12 0 -8 -12 Z"/>' +
            '<path pathLength="1" d="M40 -196 q5 -7 11 -1 q2 6 -5 8 v4"/>' +
            '<circle class="fill-ink" pathLength="1" cx="46" cy="-180" r="1"/></g>' +
        '<g class="prop prop-idea">' +
            '<path pathLength="1" d="M6 -169 q-8 -6 -8 -16 a14 14 0 0 1 28 0 q0 10 -8 16 Z"/>' +
            '<path pathLength="1" d="M8 -165 h8 M9 -161 h6"/>' +
            '<path class="accent" pathLength="1" d="M12 -205 v-7 M27 -197 l5 -5 M-3 -197 l-5 -5 M32 -185 h7 M-8 -185 h-7"/></g>';
    var SHIRT = 'M-23 -71 C-26 -88 -18 -108 -6 -118 C0 -123 10 -122 14 -115 C16 -104 10 -88 5 -71 Q-9 -68 -23 -71 Z';

    // limb = paper band between two open ink edges (the look of the
    // line-art-animation library, re-done without its TS build)
    function limb(cls) {
        return '<g class="limb ' + cls + '"><path class="fill-paper band"/><path class="edge"/></g>';
    }

    function Rider(g, isMe) {
        g.innerHTML =
            limb('leg-b') + '<path class="shoe shoe-b fill-ink"/>' +
            limb('arm-b') + '<circle class="hand hand-b fill-paper" r="2.6"/>' +
            '<g class="bike">' + BIKE + (isMe ? BASKET : '') + '</g>' +
            '<path class="crank crank-b"/>' +
            '<g class="upper">' +
                '<path class="fill-paper" d="' + SHIRT + '"/>' +
                (isMe ? '<path class="plaid" d="' + SHIRT + '"/>' : '') +
                '<path d="M2 -119 q5 4 10 1"/>' +
                '<path d="M8 -118 L10 -125"/>' +
                '<g class="head">' +
                    '<circle class="fill-paper" cx="12" cy="-135" r="11"/>' +
                    (isMe
                        // hair up in a bun, one loose wisp at the nape, sunglasses with a temple arm
                        ? '<path class="hair fill-ink" d="M23 -139 C20 -148 6 -150 2 -142 C0 -137 0 -130 3 -126 C6 -130 7 -136 12 -140 C16 -142 20 -141 23 -139 Z"/>' +
                          '<circle class="fill-ink" cx="5" cy="-150" r="6"/>' +
                          '<path class="bun-line" d="M1 -151 q4 -3 8 0"/>' +
                          '<path class="wisp"/>' +
                          '<path d="M7 -137 L15 -138"/>' +
                          '<path class="fill-ink" d="M15 -139 h7.5 q0 5 -3.8 5 q-3.7 0 -3.7 -5 Z"/>'
                        : '<path class="hair fill-ink" d="M1 -136 C1 -150 23 -150 23 -138 C17 -143 7 -143 1 -136 Z"/>') +
                    '<path class="smile" d="M18 -129 q2.5 1.5 4.5 -1"/>' +
                    '<ellipse class="mouth fill-ink" cx="21" cy="-128.5" rx="1.8" ry="2.4"/>' +
                '</g>' +
            '</g>' +
            limb('leg-f') + '<path class="shoe shoe-f fill-ink"/>' +
            '<path class="crank crank-f"/>' +
            limb('arm-f') + '<circle class="hand hand-f fill-paper" r="2.6"/>' +
            (isMe ? PROPS : '');
        this.g = g;
        this.isMe = isMe;
        this.q = function (s) { return g.querySelector(s); };
        this.spokes = g.querySelectorAll('.spokes');
        this.handF = GRIP_F.slice();
        this.handB = GRIP_B.slice();
        this.wheel = 0;
    }

    // quadratic curve through [root, joint, end]; joint is passed at t=0.5,
    // so knees and elbows bend softly instead of kinking
    function setLimb(g, p, w) {
        var a = p[0], j = p[1], b = p[2];
        var c = [2 * j[0] - (a[0] + b[0]) / 2, 2 * j[1] - (a[1] + b[1]) / 2];
        var L = [], R = [];
        for (var i = 0; i <= 16; i++) {
            var t = i / 16, u = 1 - t;
            var x = u * u * a[0] + 2 * u * t * c[0] + t * t * b[0];
            var y = u * u * a[1] + 2 * u * t * c[1] + t * t * b[1];
            var dx = 2 * u * (c[0] - a[0]) + 2 * t * (b[0] - c[0]);
            var dy = 2 * u * (c[1] - a[1]) + 2 * t * (b[1] - c[1]);
            var n = Math.hypot(dx, dy) || 1, nx = -dy / n * w / 2, ny = dx / n * w / 2;
            L.push(f([x + nx, y + ny]));
            R.push(f([x - nx, y - ny]));
        }
        g.firstChild.setAttribute('d', 'M' + L.join(' L') + ' L' + R.slice().reverse().join(' L') + ' Z');
        // edges stop short of the far end so the hand/foot end stays open
        g.lastChild.setAttribute('d', 'M' + L.slice(0, 15).join(' L') + ' M' + R.slice(0, 15).join(' L'));
    }

    // filled ink wedge at the ankle, toe pitched by `ang` (radians)
    function shoeD(at, ang) {
        var c = Math.cos(ang), s = Math.sin(ang);
        return 'M' + [[-3, -2.5], [8, -1.5], [10.5, 1.5], [9, 3], [-3, 3]].map(function (q) {
            return f([at[0] + q[0] * c - q[1] * s, at[1] + q[0] * s + q[1] * c]);
        }).join(' L') + ' Z';
    }

    function f(p) { return p[0].toFixed(1) + ' ' + p[1].toFixed(1); }

    // two-bone IK: joint bends to `sign` side, end reaches toward b
    function ik(a, b, l1, l2, sign) {
        var dx = b[0] - a[0], dy = b[1] - a[1];
        var d = Math.min(Math.hypot(dx, dy), l1 + l2 - 0.01);
        var base = Math.atan2(dy, dx);
        var A = Math.acos(Math.max(-1, Math.min(1, (l1 * l1 + d * d - l2 * l2) / (2 * l1 * d))));
        var j = [a[0] + l1 * Math.cos(base + sign * A), a[1] + l1 * Math.sin(base + sign * A)];
        var e = Math.atan2(b[1] - j[1], b[0] - j[0]);
        return [j, [j[0] + l2 * Math.cos(e), j[1] + l2 * Math.sin(e)]];
    }

    Rider.prototype.draw = function (x, y, scale, speed, dt, t) {
        this.wheel += speed * dt / 24;
        var crank = this.wheel / 2;
        var bob = 0.8 * Math.sin(2 * crank);
        var hip = [HIP[0], HIP[1] + bob], sh = [SHOULDER[0], SHOULDER[1] + bob];
        var self = this;

        this.g.setAttribute('transform', 'translate(' + x.toFixed(1) + ' ' + y + ') scale(' + scale + ' ' + Math.abs(scale) + ')');
        this.q('.upper').setAttribute('transform', 'translate(0 ' + bob.toFixed(2) + ')');
        var deg = (this.wheel * 180 / Math.PI).toFixed(1);
        this.spokes[0].setAttribute('transform', 'rotate(' + deg + ' -36 -24)');
        this.spokes[1].setAttribute('transform', 'rotate(' + deg + ' 40 -24)');

        [['f', 0], ['b', Math.PI]].forEach(function (s) {
            var a = crank + s[1];
            var pedal = [BB[0] + 9 * Math.cos(a), BB[1] + 9 * Math.sin(a)];
            var leg = ik(hip, pedal, 31, 31, -1);
            setLimb(self.q('.leg-' + s[0]), [hip, leg[0], leg[1]], 7);
            // toe dips a little on the down-stroke
            self.q('.shoe-' + s[0]).setAttribute('d', shoeD(leg[1], 0.15 + 0.2 * Math.sin(a)));
            self.q('.crank-' + s[0]).setAttribute('d', 'M' + f(BB) + ' L' + f(pedal) + ' m-4 0 h8');
        });

        [['f', this.handF], ['b', this.handB]].forEach(function (s) {
            var arm = ik(sh, [s[1][0], s[1][1] + bob], 28, 28, 1);
            setLimb(self.q('.arm-' + s[0]), [sh, arm[0], arm[1]], 5.2);
            var hand = self.q('.hand-' + s[0]);
            hand.setAttribute('cx', arm[1][0].toFixed(1));
            hand.setAttribute('cy', arm[1][1].toFixed(1));
        });

        if (this.isMe) {
            // the loose wisp streams back further the faster she goes
            var w = Math.min(speed / BASE_SPEED, 1.6), s = Math.sin(t * 9);
            this.q('.wisp').setAttribute('d', 'M3 -128 q' + (-4 - 2 * w).toFixed(1) + ' ' + (1 + s).toFixed(1) +
                ' ' + (-7 - 5 * w).toFixed(1) + ' ' + (2 + 2 * s).toFixed(1));
        }
    };

    Rider.prototype.reach = function (tf, tb, k) {
        this.handF[0] += (tf[0] - this.handF[0]) * k; this.handF[1] += (tf[1] - this.handF[1]) * k;
        this.handB[0] += (tb[0] - this.handB[0]) * k; this.handB[1] += (tb[1] - this.handB[1]) * k;
    };

    var me = new Rider(svg.querySelector('.rider-me'), true);
    var friend = new Rider(svg.querySelector('.rider-friend'), false);
    var particles = svg.querySelector('.particles');

    var x = START, speed = BASE_SPEED, t = 0, act = '', actT = 0, phase = '', spawnT = 0, plane = null;
    var fx = 0, fActive = false, fDone = false, lastGap = 0;

    function setAct(a) {
        if (a === act) return;
        act = a;
        actT = 0;
        me.g.setAttribute('data-act', a);
    }

    // ship act: reach into the basket, throw the plane
    function shipPhase() {
        return actT < 0.5 ? 'grab' : actT < 1.2 ? 'throw' : 'done';
    }

    // red paper plane: one loop-the-loop, then a long climbing glide off-screen
    function launchPlane(px, py) {
        var o = document.createElementNS(NS, 'g');
        o.innerHTML = '<path class="plane-trail"/><path class="plane" d="M7 0 L-8 -5 L-4 0 L-8 4.5 Z M7 0 L-4 0"/>';
        particles.appendChild(o);
        plane = { o: o, x0: px, y0: py, t: 0, pts: [], last: [px, py] };
    }

    function flyPlane(dt) {
        var p = plane, w = 5.5, R = 22;
        p.t += dt;
        var lt = Math.min(p.t, 2 * Math.PI / w);
        var px = p.x0 + 110 * p.t + R * Math.sin(w * lt);
        var py = p.y0 - R * (1 - Math.cos(w * lt)) - 14 * p.t;
        var ang = Math.atan2(py - p.last[1], px - p.last[0]) * 180 / Math.PI;
        p.last = [px, py];
        p.pts.push(f([px, py]));
        if (p.pts.length > 40) p.pts.shift();
        p.o.lastChild.setAttribute('transform', 'translate(' + f([px, py]) + ') rotate(' + ang.toFixed(1) + ') scale(1.3)');
        p.o.firstChild.setAttribute('d', 'M' + p.pts.join(' L'));
        if (px > 960 || py < -30) { p.o.remove(); plane = null; }
    }

    function handsFor(a) {
        var wave = [30 + 4 * Math.sin(t * 14), -158];
        if (a === 'idea') return [[34, -158], GRIP_B];
        if (a === 'ship') {
            if (phase === 'grab') return [[50, -73], GRIP_B];
            if (phase === 'throw') return [[62, -134], GRIP_B];
        }
        if (a === 'wave') return [wave, GRIP_B];
        if (a === 'wheee') return [[46, -148], [-26, -148]];
        return [GRIP_F, GRIP_B];
    }

    function spawn(cls, px, py, inner) {
        var o = document.createElementNS(NS, 'g');
        o.setAttribute('transform', 'translate(' + px.toFixed(1) + ' ' + py.toFixed(1) + ')');
        o.innerHTML = '<g class="' + cls + '">' + inner + '</g>';
        o.firstChild.addEventListener('animationend', function () { o.remove(); });
        particles.appendChild(o);
    }

    function update(dt) {
        t += dt;

        // the oncoming rider appears once per lap
        if (!fActive && !fDone && x >= 280) { fActive = true; fx = 980; lastGap = fx - x; }
        if (fActive) {
            fx -= 80 * dt;
            var gap = fx - x;
            if (lastGap > 0 && gap <= 0) spawn('spark', (x + fx) / 2, 150, '<circle r="4"/>');
            lastGap = gap;
            if (fx < -100) { fActive = false; fDone = true; }
        }

        var a = '';
        if (fActive && Math.abs(fx - x) < 140) a = 'wave';
        else RANGES.forEach(function (r) { if (x >= r[0] && x < r[1]) a = r[2]; });
        setAct(a);
        actT += dt;

        var ph = act === 'ship' ? shipPhase() : '';
        if (ph !== phase) {
            phase = ph;
            me.g.setAttribute('data-phase', ph);
            if (ph === 'throw' && !plane) {
                launchPlane(x + 1.1 * 56, GROUND - 1.1 * 120);
                me.g.setAttribute('data-thrown', '');
            }
        }
        if (plane) flyPlane(dt);

        var k = 1 - Math.exp(-dt * 4);
        speed += (BASE_SPEED * (PACE[act] || 1) - speed) * k;
        x += speed * dt;
        if (x > END) { x = START; fDone = false; me.g.removeAttribute('data-thrown'); }

        spawnT -= dt;
        if (act === 'sing' && spawnT <= 0) {
            spawnT = 0.38;
            spawn('note', x + 22 + Math.random() * 6, 178 + Math.random() * 8,
                '<path d="M0 0 v-11 l7 -2.5 v11"/><ellipse class="fill-ink" cx="-2" cy="0" rx="2.6" ry="2"/>' +
                '<ellipse class="fill-ink" cx="5" cy="-2.5" rx="2.6" ry="2"/>');
        } else if (act === 'wheee' && spawnT <= 0) {
            spawnT = 0.14;
            spawn('sparkle' + (Math.random() < 0.4 ? ' accent' : ''), x - 40 + Math.random() * 90,
                GROUND - 70 - Math.random() * 110, '<path d="M-3 0 h6 M0 -3 v6"/>');
        }

        var kh = 1 - Math.exp(-dt * 8);
        var h = handsFor(act);
        me.reach(h[0], h[1], kh);
        var near = fActive && Math.abs(fx - x) < 140;
        friend.reach(near ? [30 + 4 * Math.sin(t * 14 + 1), -158] : GRIP_F, GRIP_B, kh);

        me.draw(x, GROUND, SCALE, speed, dt, t);
        friend.g.style.display = fActive ? '' : 'none';
        if (fActive) friend.draw(fx, GROUND - 6, -0.92, 80, dt, t);
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        // still frame: the idea moment
        x = 205;
        setAct('idea');
        var h = handsFor('idea');
        me.reach(h[0], h[1], 1);
        me.draw(x, GROUND, SCALE, BASE_SPEED, 0, 0);
        friend.g.style.display = 'none';
        return;
    }

    var last = performance.now();
    function frame(now) {
        var dt = Math.min((now - last) / 1000, 0.05);
        last = now;
        // skip work while the Home panel is hidden
        if (svg.getClientRects().length) update(dt);
        requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
})();
