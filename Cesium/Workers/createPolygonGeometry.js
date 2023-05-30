define(["./defaultValue-62d88678","./Matrix3-250b5421","./ArcType-52a96162","./BoundingRectangle-1b67787f","./Transforms-5a9909b0","./Matrix2-4356a811","./ComponentDatatype-fd927ced","./EllipsoidGeodesic-a694e7ae","./EllipsoidTangentPlane-53c1dcbc","./GeometryAttribute-cb96d916","./GeometryInstance-ee1acc74","./GeometryOffsetAttribute-04332ce7","./GeometryPipeline-f3ed816e","./IndexDatatype-ff0339cc","./Math-8eaecdeb","./PolygonGeometryLibrary-d4ebe42b","./PolygonPipeline-48c3e089","./VertexFormat-e840a335","./combine-4d612480","./RuntimeError-fa369431","./WebGLConstants-c08260ea","./AxisAlignedBoundingBox-fe665e06","./IntersectionTests-6bf5be87","./Plane-fc9ed1e8","./AttributeCompression-078365fc","./EncodedCartesian3-0ed42a46","./arrayRemoveDuplicates-bf8e145b","./EllipsoidRhumbLine-81e0d228","./GeometryAttributes-170fefe4"],(function(e,t,o,i,r,n,a,s,l,c,u,d,p,y,m,g,h,f,b,_,P,C,x,w,T,I,A,v,E){"use strict";const G=new t.Cartographic,O=new t.Cartographic;function L(e,t,o,i){const r=i.cartesianToCartographic(e,G).height,n=i.cartesianToCartographic(t,O);n.height=r,i.cartographicToCartesian(n,t);const a=i.cartesianToCartographic(o,O);a.height=r-100,i.cartographicToCartesian(a,o)}const V=new i.BoundingRectangle,H=new t.Cartesian3,D=new t.Cartesian3,N=new t.Cartesian3,F=new t.Cartesian3,R=new t.Cartesian3,M=new t.Cartesian3;let S=new t.Cartesian3,B=new t.Cartesian3,k=new t.Cartesian3;const z=new n.Cartesian2,W=new n.Cartesian2,Y=new t.Cartesian3,U=new r.Quaternion,j=new t.Matrix3,Q=new t.Matrix3;function q(o){const i=o.vertexFormat,s=o.geometry,l=o.shadowVolume,u=s.attributes.position.values,p=e.defined(s.attributes.st)?s.attributes.st.values:void 0;let y=u.length;const g=o.wall,h=o.top||g,f=o.bottom||g;if(i.st||i.normal||i.tangent||i.bitangent||l){const d=o.boundingRectangle,b=o.tangentPlane,_=o.ellipsoid,P=o.stRotation,C=o.perPositionHeight,x=z;x.x=d.x,x.y=d.y;const w=i.st?new Float32Array(y/3*2):void 0;let T;i.normal&&(T=C&&h&&!g?s.attributes.normal.values:new Float32Array(y));const I=i.tangent?new Float32Array(y):void 0,A=i.bitangent?new Float32Array(y):void 0,v=l?new Float32Array(y):void 0;let E=0,G=0,O=D,V=N,q=F,K=!0,Z=j,J=Q;if(0!==P){let e=r.Quaternion.fromAxisAngle(b._plane.normal,P,U);Z=t.Matrix3.fromQuaternion(e,Z),e=r.Quaternion.fromAxisAngle(b._plane.normal,-P,U),J=t.Matrix3.fromQuaternion(e,J)}else Z=t.Matrix3.clone(t.Matrix3.IDENTITY,Z),J=t.Matrix3.clone(t.Matrix3.IDENTITY,J);let X=0,$=0;h&&f&&(X=y/2,$=y/3,y/=2);for(let r=0;r<y;r+=3){const a=t.Cartesian3.fromArray(u,r,Y);if(i.st&&!e.defined(p)){let e=t.Matrix3.multiplyByVector(Z,a,H);e=_.scaleToGeodeticSurface(e,e);const o=b.projectPointOntoPlane(e,W);n.Cartesian2.subtract(o,x,o);const i=m.CesiumMath.clamp(o.x/d.width,0,1),r=m.CesiumMath.clamp(o.y/d.height,0,1);f&&(w[E+$]=i,w[E+1+$]=r),h&&(w[E]=i,w[E+1]=r),E+=2}if(i.normal||i.tangent||i.bitangent||l){const e=G+1,n=G+2;if(g){if(r+3<y){const e=t.Cartesian3.fromArray(u,r+3,R);if(K){const o=t.Cartesian3.fromArray(u,r+y,M);C&&L(a,e,o,_),t.Cartesian3.subtract(e,a,e),t.Cartesian3.subtract(o,a,o),O=t.Cartesian3.normalize(t.Cartesian3.cross(o,e,O),O),K=!1}t.Cartesian3.equalsEpsilon(e,a,m.CesiumMath.EPSILON10)&&(K=!0)}(i.tangent||i.bitangent)&&(q=_.geodeticSurfaceNormal(a,q),i.tangent&&(V=t.Cartesian3.normalize(t.Cartesian3.cross(q,O,V),V)))}else O=_.geodeticSurfaceNormal(a,O),(i.tangent||i.bitangent)&&(C&&(S=t.Cartesian3.fromArray(T,G,S),B=t.Cartesian3.cross(t.Cartesian3.UNIT_Z,S,B),B=t.Cartesian3.normalize(t.Matrix3.multiplyByVector(J,B,B),B),i.bitangent&&(k=t.Cartesian3.normalize(t.Cartesian3.cross(S,B,k),k))),V=t.Cartesian3.cross(t.Cartesian3.UNIT_Z,O,V),V=t.Cartesian3.normalize(t.Matrix3.multiplyByVector(J,V,V),V),i.bitangent&&(q=t.Cartesian3.normalize(t.Cartesian3.cross(O,V,q),q)));i.normal&&(o.wall?(T[G+X]=O.x,T[e+X]=O.y,T[n+X]=O.z):f&&(T[G+X]=-O.x,T[e+X]=-O.y,T[n+X]=-O.z),(h&&!C||g)&&(T[G]=O.x,T[e]=O.y,T[n]=O.z)),l&&(g&&(O=_.geodeticSurfaceNormal(a,O)),v[G+X]=-O.x,v[e+X]=-O.y,v[n+X]=-O.z),i.tangent&&(o.wall?(I[G+X]=V.x,I[e+X]=V.y,I[n+X]=V.z):f&&(I[G+X]=-V.x,I[e+X]=-V.y,I[n+X]=-V.z),h&&(C?(I[G]=B.x,I[e]=B.y,I[n]=B.z):(I[G]=V.x,I[e]=V.y,I[n]=V.z))),i.bitangent&&(f&&(A[G+X]=q.x,A[e+X]=q.y,A[n+X]=q.z),h&&(C?(A[G]=k.x,A[e]=k.y,A[n]=k.z):(A[G]=q.x,A[e]=q.y,A[n]=q.z))),G+=3}}i.st&&!e.defined(p)&&(s.attributes.st=new c.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:w})),i.normal&&(s.attributes.normal=new c.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:T})),i.tangent&&(s.attributes.tangent=new c.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:I})),i.bitangent&&(s.attributes.bitangent=new c.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:A})),l&&(s.attributes.extrudeDirection=new c.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:v}))}if(o.extrude&&e.defined(o.offsetAttribute)){const e=u.length/3;let t=new Uint8Array(e);if(o.offsetAttribute===d.GeometryOffsetAttribute.TOP)h&&f||g?t=t.fill(1,0,e/2):h&&(t=t.fill(1));else{const e=o.offsetAttribute===d.GeometryOffsetAttribute.NONE?0:1;t=t.fill(e)}s.attributes.applyOffset=new c.GeometryAttribute({componentDatatype:a.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:t})}return s}const K=new t.Cartographic,Z=new t.Cartographic,J={westOverIDL:0,eastOverIDL:0};let X=new s.EllipsoidGeodesic;function $(t,i,r,a,l){if(l=e.defaultValue(l,new n.Rectangle),!e.defined(t)||t.length<3)return l.west=0,l.north=0,l.south=0,l.east=0,l;if(r===o.ArcType.RHUMB)return n.Rectangle.fromCartesianArray(t,i,l);X.ellipsoid.equals(i)||(X=new s.EllipsoidGeodesic(void 0,void 0,i)),l.west=Number.POSITIVE_INFINITY,l.east=Number.NEGATIVE_INFINITY,l.south=Number.POSITIVE_INFINITY,l.north=Number.NEGATIVE_INFINITY,J.westOverIDL=Number.POSITIVE_INFINITY,J.eastOverIDL=Number.NEGATIVE_INFINITY;const c=1/m.CesiumMath.chordLength(a,i.maximumRadius),u=t.length;let d,p=i.cartesianToCartographic(t[0],Z),y=K;for(let e=1;e<u;e++)d=y,y=p,p=i.cartesianToCartographic(t[e],d),X.setEndPoints(y,p),te(X,c,l,J);return d=y,y=p,p=i.cartesianToCartographic(t[0],d),X.setEndPoints(y,p),te(X,c,l,J),l.east-l.west>J.eastOverIDL-J.westOverIDL&&(l.west=J.westOverIDL,l.east=J.eastOverIDL,l.east>m.CesiumMath.PI&&(l.east=l.east-m.CesiumMath.TWO_PI),l.west>m.CesiumMath.PI&&(l.west=l.west-m.CesiumMath.TWO_PI)),l}const ee=new t.Cartographic;function te(e,t,o,i){const r=e.surfaceDistance,n=Math.ceil(r*t),a=n>0?r/(n-1):Number.POSITIVE_INFINITY;let s=0;for(let t=0;t<n;t++){const t=e.interpolateUsingSurfaceDistance(s,ee);s+=a;const r=t.longitude,n=t.latitude;o.west=Math.min(o.west,r),o.east=Math.max(o.east,r),o.south=Math.min(o.south,n),o.north=Math.max(o.north,n);const l=r>=0?r:r+m.CesiumMath.TWO_PI;i.westOverIDL=Math.min(i.westOverIDL,l),i.eastOverIDL=Math.max(i.eastOverIDL,l)}}const oe=[];function ie(t,o,i,r,n,a,s,c,d,p){const m={walls:[]};let f;if(s||c){const n=g.PolygonGeometryLibrary.createGeometryFromPositions(t,o,i,r,a,d,p),l=n.attributes.position.values,h=n.indices;let b,_;if(s&&c){const t=l.concat(l);b=t.length/3,_=y.IndexDatatype.createTypedArray(b,2*h.length),_.set(h);const o=h.length,r=b/2;for(f=0;f<o;f+=3){const e=_[f]+r,t=_[f+1]+r,i=_[f+2]+r;_[f+o]=i,_[f+1+o]=t,_[f+2+o]=e}if(n.attributes.position.values=t,a&&d.normal){const e=n.attributes.normal.values;n.attributes.normal.values=new Float32Array(t.length),n.attributes.normal.values.set(e)}if(d.st&&e.defined(i)){const e=n.attributes.st.values;n.attributes.st.values=new Float32Array(2*b),n.attributes.st.values=e.concat(e)}n.indices=_}else if(c){for(b=l.length/3,_=y.IndexDatatype.createTypedArray(b,h.length),f=0;f<h.length;f+=3)_[f]=h[f+2],_[f+1]=h[f+1],_[f+2]=h[f];n.indices=_}m.topAndBottom=new u.GeometryInstance({geometry:n})}let b=n.outerRing,_=l.EllipsoidTangentPlane.fromPoints(b,t),P=_.projectPointsOntoPlane(b,oe),C=h.PolygonPipeline.computeWindingOrder2D(P);C===h.WindingOrder.CLOCKWISE&&(b=b.slice().reverse());let x=g.PolygonGeometryLibrary.computeWallGeometry(b,i,t,r,a,p);m.walls.push(new u.GeometryInstance({geometry:x}));const w=n.holes;for(f=0;f<w.length;f++){let e=w[f];_=l.EllipsoidTangentPlane.fromPoints(e,t),P=_.projectPointsOntoPlane(e,oe),C=h.PolygonPipeline.computeWindingOrder2D(P),C===h.WindingOrder.COUNTER_CLOCKWISE&&(e=e.slice().reverse()),x=g.PolygonGeometryLibrary.computeWallGeometry(e,i,t,r,a,p),m.walls.push(new u.GeometryInstance({geometry:x}))}return m}function re(i){const r=i.polygonHierarchy,a=e.defaultValue(i.vertexFormat,f.VertexFormat.DEFAULT),s=e.defaultValue(i.ellipsoid,t.Ellipsoid.WGS84),l=e.defaultValue(i.granularity,m.CesiumMath.RADIANS_PER_DEGREE),c=e.defaultValue(i.stRotation,0),u=i.textureCoordinates,d=e.defaultValue(i.perPositionHeight,!1),p=d&&e.defined(i.extrudedHeight);let y=e.defaultValue(i.height,0),h=e.defaultValue(i.extrudedHeight,y);if(!p){const e=Math.max(y,h);h=Math.min(y,h),y=e}this._vertexFormat=f.VertexFormat.clone(a),this._ellipsoid=t.Ellipsoid.clone(s),this._granularity=l,this._stRotation=c,this._height=y,this._extrudedHeight=h,this._closeTop=e.defaultValue(i.closeTop,!0),this._closeBottom=e.defaultValue(i.closeBottom,!0),this._polygonHierarchy=r,this._perPositionHeight=d,this._perPositionHeightExtrude=p,this._shadowVolume=e.defaultValue(i.shadowVolume,!1),this._workerName="createPolygonGeometry",this._offsetAttribute=i.offsetAttribute,this._arcType=e.defaultValue(i.arcType,o.ArcType.GEODESIC),this._rectangle=void 0,this._textureCoordinateRotationPoints=void 0,this._textureCoordinates=u,this.packedLength=g.PolygonGeometryLibrary.computeHierarchyPackedLength(r,t.Cartesian3)+t.Ellipsoid.packedLength+f.VertexFormat.packedLength+(u?g.PolygonGeometryLibrary.computeHierarchyPackedLength(u,n.Cartesian2):1)+12}re.fromPositions=function(t){return new re({polygonHierarchy:{positions:(t=e.defaultValue(t,e.defaultValue.EMPTY_OBJECT)).positions},height:t.height,extrudedHeight:t.extrudedHeight,vertexFormat:t.vertexFormat,stRotation:t.stRotation,ellipsoid:t.ellipsoid,granularity:t.granularity,perPositionHeight:t.perPositionHeight,closeTop:t.closeTop,closeBottom:t.closeBottom,offsetAttribute:t.offsetAttribute,arcType:t.arcType,textureCoordinates:t.textureCoordinates})},re.pack=function(o,i,r){return r=e.defaultValue(r,0),r=g.PolygonGeometryLibrary.packPolygonHierarchy(o._polygonHierarchy,i,r,t.Cartesian3),t.Ellipsoid.pack(o._ellipsoid,i,r),r+=t.Ellipsoid.packedLength,f.VertexFormat.pack(o._vertexFormat,i,r),r+=f.VertexFormat.packedLength,i[r++]=o._height,i[r++]=o._extrudedHeight,i[r++]=o._granularity,i[r++]=o._stRotation,i[r++]=o._perPositionHeightExtrude?1:0,i[r++]=o._perPositionHeight?1:0,i[r++]=o._closeTop?1:0,i[r++]=o._closeBottom?1:0,i[r++]=o._shadowVolume?1:0,i[r++]=e.defaultValue(o._offsetAttribute,-1),i[r++]=o._arcType,e.defined(o._textureCoordinates)?r=g.PolygonGeometryLibrary.packPolygonHierarchy(o._textureCoordinates,i,r,n.Cartesian2):i[r++]=-1,i[r++]=o.packedLength,i};const ne=t.Ellipsoid.clone(t.Ellipsoid.UNIT_SPHERE),ae=new f.VertexFormat,se={polygonHierarchy:{}};return re.unpack=function(o,i,r){i=e.defaultValue(i,0);const a=g.PolygonGeometryLibrary.unpackPolygonHierarchy(o,i,t.Cartesian3);i=a.startingIndex,delete a.startingIndex;const s=t.Ellipsoid.unpack(o,i,ne);i+=t.Ellipsoid.packedLength;const l=f.VertexFormat.unpack(o,i,ae);i+=f.VertexFormat.packedLength;const c=o[i++],u=o[i++],d=o[i++],p=o[i++],y=1===o[i++],m=1===o[i++],h=1===o[i++],b=1===o[i++],_=1===o[i++],P=o[i++],C=o[i++],x=-1===o[i]?void 0:g.PolygonGeometryLibrary.unpackPolygonHierarchy(o,i,n.Cartesian2);e.defined(x)?(i=x.startingIndex,delete x.startingIndex):i++;const w=o[i++];return e.defined(r)||(r=new re(se)),r._polygonHierarchy=a,r._ellipsoid=t.Ellipsoid.clone(s,r._ellipsoid),r._vertexFormat=f.VertexFormat.clone(l,r._vertexFormat),r._height=c,r._extrudedHeight=u,r._granularity=d,r._stRotation=p,r._perPositionHeightExtrude=y,r._perPositionHeight=m,r._closeTop=h,r._closeBottom=b,r._shadowVolume=_,r._offsetAttribute=-1===P?void 0:P,r._arcType=C,r._textureCoordinates=x,r.packedLength=w,r},re.computeRectangle=function(i,r){const n=e.defaultValue(i.granularity,m.CesiumMath.RADIANS_PER_DEGREE),a=e.defaultValue(i.arcType,o.ArcType.GEODESIC),s=i.polygonHierarchy,l=e.defaultValue(i.ellipsoid,t.Ellipsoid.WGS84);return $(s.positions,l,a,n,r)},re.createGeometry=function(t){const o=t._vertexFormat,i=t._ellipsoid,n=t._granularity,s=t._stRotation,f=t._polygonHierarchy,b=t._perPositionHeight,_=t._closeTop,P=t._closeBottom,C=t._arcType,x=t._textureCoordinates,w=e.defined(x);let T=f.positions;if(T.length<3)return;const I=l.EllipsoidTangentPlane.fromPoints(T,i),A=g.PolygonGeometryLibrary.polygonsFromHierarchy(f,w,I.projectPointsOntoPlane.bind(I),!b,i),v=A.hierarchy,E=A.polygons,G=w?g.PolygonGeometryLibrary.polygonsFromHierarchy(x,!0,(function(e){return e}),!1).polygons:void 0;if(0===v.length)return;T=v[0].outerRing;const O=g.PolygonGeometryLibrary.computeBoundingRectangle(I.plane.normal,I.projectPointOntoPlane.bind(I),T,s,V),L=[],H=t._height,D=t._extrudedHeight,N={perPositionHeight:b,vertexFormat:o,geometry:void 0,tangentPlane:I,boundingRectangle:O,ellipsoid:i,stRotation:s,textureCoordinates:void 0,bottom:!1,top:!0,wall:!1,extrude:!1,arcType:C};let F;if(t._perPositionHeightExtrude||!m.CesiumMath.equalsEpsilon(H,D,0,m.CesiumMath.EPSILON2))for(N.extrude=!0,N.top=_,N.bottom=P,N.shadowVolume=t._shadowVolume,N.offsetAttribute=t._offsetAttribute,F=0;F<E.length;F++){const e=ie(i,E[F],w?G[F]:void 0,n,v[F],b,_,P,o,C);let t;_&&P?(t=e.topAndBottom,N.geometry=g.PolygonGeometryLibrary.scaleToGeodeticHeightExtruded(t.geometry,H,D,i,b)):_?(t=e.topAndBottom,t.geometry.attributes.position.values=h.PolygonPipeline.scaleToGeodeticHeight(t.geometry.attributes.position.values,H,i,!b),N.geometry=t.geometry):P&&(t=e.topAndBottom,t.geometry.attributes.position.values=h.PolygonPipeline.scaleToGeodeticHeight(t.geometry.attributes.position.values,D,i,!0),N.geometry=t.geometry),(_||P)&&(N.wall=!1,t.geometry=q(N),L.push(t));const r=e.walls;N.wall=!0;for(let e=0;e<r.length;e++){const t=r[e];N.geometry=g.PolygonGeometryLibrary.scaleToGeodeticHeightExtruded(t.geometry,H,D,i,b),t.geometry=q(N),L.push(t)}}else for(F=0;F<E.length;F++){const r=new u.GeometryInstance({geometry:g.PolygonGeometryLibrary.createGeometryFromPositions(i,E[F],w?G[F]:void 0,n,b,o,C)});if(r.geometry.attributes.position.values=h.PolygonPipeline.scaleToGeodeticHeight(r.geometry.attributes.position.values,H,i,!b),N.geometry=r.geometry,r.geometry=q(N),e.defined(t._offsetAttribute)){const e=r.geometry.attributes.position.values.length,o=t._offsetAttribute===d.GeometryOffsetAttribute.NONE?0:1,i=new Uint8Array(e/3).fill(o);r.geometry.attributes.applyOffset=new c.GeometryAttribute({componentDatatype:a.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:i})}L.push(r)}const R=p.GeometryPipeline.combineInstances(L)[0];R.attributes.position.values=new Float64Array(R.attributes.position.values),R.indices=y.IndexDatatype.createTypedArray(R.attributes.position.values.length/3,R.indices);const M=R.attributes,S=r.BoundingSphere.fromVertices(M.position.values);return o.position||delete M.position,new c.Geometry({attributes:M,indices:R.indices,primitiveType:R.primitiveType,boundingSphere:S,offsetAttribute:t._offsetAttribute})},re.createShadowVolume=function(e,t,o){const i=e._granularity,r=e._ellipsoid,n=t(i,r),a=o(i,r);return new re({polygonHierarchy:e._polygonHierarchy,ellipsoid:r,stRotation:e._stRotation,granularity:i,perPositionHeight:!1,extrudedHeight:n,height:a,vertexFormat:f.VertexFormat.POSITION_ONLY,shadowVolume:!0,arcType:e._arcType})},Object.defineProperties(re.prototype,{rectangle:{get:function(){if(!e.defined(this._rectangle)){const e=this._polygonHierarchy.positions;this._rectangle=$(e,this._ellipsoid,this._arcType,this._granularity)}return this._rectangle}},textureCoordinateRotationPoints:{get:function(){return e.defined(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=function(e){const t=-e._stRotation;if(0===t)return[0,0,0,1,1,0];const o=e._ellipsoid,i=e._polygonHierarchy.positions,r=e.rectangle;return c.Geometry._textureCoordinateRotationPoints(i,t,o,r)}(this)),this._textureCoordinateRotationPoints}}}),function(o,i){return e.defined(i)&&(o=re.unpack(o,i)),o._ellipsoid=t.Ellipsoid.clone(o._ellipsoid),re.createGeometry(o)}}));
