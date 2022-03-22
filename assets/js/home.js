
function g(e, t, n) {
    var r = null == e ? "number" == typeof t ? [] : {} : e;
    if (r[t] === n)
        return r;
    var i = u(r);
    return i[t] = n,
    i
}   
    function m() {
        return s
    }
    function M(e) {
        if (!Object(r.default)(e))
            throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
        if (void 0 === e.type)
            throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
        if (f)
            throw new Error("Reducers may not dispatch actions.");
        try {
            f = !0,
            s = u(s, e)
        } finally {
            f = !1
        }
        for (var t = l = d, n = 0; n < t.length; n++)
            t[n]();
        return e
    }
    var c, u = Object.keys(n);
    try {
        !function(e) {
            Object.keys(e).forEach(function(t) {
                var n = e[t];
                if (void 0 === n(void 0, {
                    type: r.ActionTypes.INIT
                }))
                    throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                if (void 0 === n(void 0, {
                    type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
                }))
                    throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + r.ActionTypes.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')
            })
        }(n)
    } catch (e) {
        c = e
    };
t.ixSession = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M
      , t = arguments.length > 1 ? arguments[1] : void 0;
    switch (t.type) {
    case a:
        var n = t.payload
          , r = n.hasBoundaryNodes
          , o = n.reducedMotion;
        return (0,
        i.merge)(e, {
            hasBoundaryNodes: r,
            reducedMotion: o
        });
    case c:
        return (0,
        i.set)(e, "active", !0);
    case u:
        var A = t.payload.step
          , b = void 0 === A ? 20 : A;
        return (0,
        i.set)(e, "tick", e.tick + b);
    case s:
        return M;
    case f:
        var g = t.payload.now;
        return (0,
        i.set)(e, "tick", g);
    case l:
        var E = (0,
        i.addLast)(e.eventListeners, t.payload);
        return (0,
        i.set)(e, "eventListeners", E);
    case d:
        var v = t.payload
          , _ = v.stateKey
          , y = v.newState;
        return (0,
        i.setIn)(e, ["eventState", _], y);
    case p:
        var T = t.payload
          , O = T.actionListId
          , N = T.isPlaying;
        return (0,
        i.setIn)(e, ["playbackState", O], N);
    case m:
        for (var S = t.payload, R = S.width, C = S.mediaQueries, I = C.length, L = null, w = 0; w < I; w++) {
            var D = C[w]
              , z = D.key
              , P = D.min
              , q = D.max;
            if (R >= P && R <= q) {
                L = z;
                break
            }
        }
        return (0,
        i.merge)(e, {
            viewportWidth: R,
            mediaQueryKey: L
        });
    case h:
        return (0,
        i.set)(e, "hasDefinedMediaQueries", !0);
    default:
        return e
    }
},
  
t.ixElements = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g
      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    switch (t.type) {
    case M:
        return g;
    case A:
        var n = t.payload
          , i = n.elementId
          , o = n.element
          , a = n.origin
          , c = n.actionItem
          , u = n.refType
          , s = c.actionTypeId
          , l = e;
        return (0,
        r.getIn)(l, [i, o]) !== o && (l = v(l, o, u, i, c)),
        _(l, i, s, a, c);
    case b:
        var d = t.payload;
        return _(e, d.elementId, d.actionTypeId, d.current, d.actionItem);
    default:
        return e
    }
};    ;
t.ixInstances = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({})
      , t = arguments.length > 1 ? arguments[1] : void 0;
    switch (t.type) {
    case c:
        return t.payload.ixInstances || Object.freeze({});
    case u:
        return Object.freeze({});
    case s:
        var n = t.payload
          , r = n.instanceId
          , i = n.elementId
          , a = n.actionItem
          , p = n.eventId
          , m = n.eventTarget
          , h = n.eventStateKey
          , A = n.actionListId
          , b = n.groupIndex
          , g = n.isCarrier
          , T = n.origin
          , O = n.destination
          , N = n.immediate
          , S = n.verbose
          , R = n.continuous
          , C = n.parameterId
          , I = n.actionGroups
          , L = n.smoothing
          , w = n.restingValue
          , D = n.pluginInstance
          , z = n.pluginDuration
          , P = n.instanceDelay
          , q = n.skipMotion
          , k = n.skipToValue
          , x = a.actionTypeId
          , B = E(x)
          , W = v(B, x)
          , F = Object.keys(O).filter(function(e) {
            return null != O[e]
        })
          , U = a.config.easing;
        return (0,
        o.set)(e, r, {
            id: r,
            elementId: i,
            active: !1,
            position: 0,
            start: 0,
            origin: T,
            destination: O,
            destinationKeys: F,
            immediate: N,
            verbose: S,
            current: null,
            actionItem: a,
            actionTypeId: x,
            eventId: p,
            eventTarget: m,
            eventStateKey: h,
            actionListId: A,
            groupIndex: b,
            renderType: B,
            isCarrier: g,
            styleProp: W,
            continuous: R,
            parameterId: C,
            actionGroups: I,
            smoothing: L,
            restingValue: w,
            pluginInstance: D,
            pluginDuration: z,
            instanceDelay: P,
            skipMotion: q,
            skipToValue: k,
            customEasingFn: Array.isArray(U) && 4 === U.length ? M(U) : void 0
        });
    case l:
        var X = t.payload
          , j = X.instanceId
          , G = X.time;
        return (0,
        o.mergeIn)(e, [j], {
            active: !0,
            complete: !1,
            start: G
        });
    case d:
        var K = t.payload.instanceId;
        if (!e[K])
            return e;
        for (var H = {}, Y = Object.keys(e), V = Y.length, Q = 0; Q < V; Q++) {
            var J = Y[Q];
            J !== K && (H[J] = e[J])
        }
        return H;
    case f:
        for (var Z = e, $ = Object.keys(e), ee = $.length, te = 0; te < ee; te++) {
            var ne = $[te]
              , re = e[ne]
              , ie = re.continuous ? _ : y;
            Z = (0,
            o.set)(Z, ne, ie(re, t))
        }
        return Z;
    default:
        return e
    }
}

, function(e, t, n) {
"use strict";
Object.defineProperty(t, "__esModule", {
    value: !0
}),
t.ixParameters = void 0;
var r = n(24).IX2EngineActionTypes
  , i = r.IX2_RAW_DATA_IMPORTED
  , o = r.IX2_SESSION_STOPPED
  , a = r.IX2_PARAMETER_CHANGED;
t.ixParameters = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
      , t = arguments.length > 1 ? arguments[1] : void 0;
    switch (t.type) {
    case i:
        return t.payload.ixParameters || {};
    case o:
        return {};
    case a:
        var n = t.payload
          , r = n.key
          , c = n.value;
        return e[r] = c,
        e;
    default:
        return e
    }
}
}

