define(["./Matrix3-250b5421","./defaultValue-62d88678","./EllipseOutlineGeometry-412877c5","./Math-8eaecdeb","./Transforms-5a9909b0","./Matrix2-4356a811","./RuntimeError-fa369431","./combine-4d612480","./ComponentDatatype-fd927ced","./WebGLConstants-c08260ea","./EllipseGeometryLibrary-e16c4857","./GeometryAttribute-cb96d916","./GeometryAttributes-170fefe4","./GeometryOffsetAttribute-04332ce7","./IndexDatatype-ff0339cc"],(function(e,i,t,r,l,n,s,o,a,u,c,d,m,p,y){"use strict";function f(e){const r=(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).radius,l={center:e.center,semiMajorAxis:r,semiMinorAxis:r,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,numberOfVerticalLines:e.numberOfVerticalLines};this._ellipseGeometry=new t.EllipseOutlineGeometry(l),this._workerName="createCircleOutlineGeometry"}f.packedLength=t.EllipseOutlineGeometry.packedLength,f.pack=function(e,i,r){return t.EllipseOutlineGeometry.pack(e._ellipseGeometry,i,r)};const G=new t.EllipseOutlineGeometry({center:new e.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),_={center:new e.Cartesian3,radius:void 0,ellipsoid:e.Ellipsoid.clone(e.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,numberOfVerticalLines:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0};return f.unpack=function(r,l,n){const s=t.EllipseOutlineGeometry.unpack(r,l,G);return _.center=e.Cartesian3.clone(s._center,_.center),_.ellipsoid=e.Ellipsoid.clone(s._ellipsoid,_.ellipsoid),_.height=s._height,_.extrudedHeight=s._extrudedHeight,_.granularity=s._granularity,_.numberOfVerticalLines=s._numberOfVerticalLines,i.defined(n)?(_.semiMajorAxis=s._semiMajorAxis,_.semiMinorAxis=s._semiMinorAxis,n._ellipseGeometry=new t.EllipseOutlineGeometry(_),n):(_.radius=s._semiMajorAxis,new f(_))},f.createGeometry=function(e){return t.EllipseOutlineGeometry.createGeometry(e._ellipseGeometry)},function(t,r){return i.defined(r)&&(t=f.unpack(t,r)),t._ellipseGeometry._center=e.Cartesian3.clone(t._ellipseGeometry._center),t._ellipseGeometry._ellipsoid=e.Ellipsoid.clone(t._ellipseGeometry._ellipsoid),f.createGeometry(t)}}));
