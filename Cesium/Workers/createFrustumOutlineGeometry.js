define(["./defaultValue-62d88678","./Transforms-5a9909b0","./Matrix3-250b5421","./ComponentDatatype-fd927ced","./FrustumGeometry-f05aa458","./GeometryAttribute-cb96d916","./GeometryAttributes-170fefe4","./Math-8eaecdeb","./Matrix2-4356a811","./RuntimeError-fa369431","./combine-4d612480","./WebGLConstants-c08260ea","./Plane-fc9ed1e8","./VertexFormat-e840a335"],(function(e,t,r,n,a,u,i,o,s,c,p,m,d,f){"use strict";const h=0,g=1;function l(n){const u=n.frustum,i=n.orientation,o=n.origin,s=e.defaultValue(n._drawNearPlane,!0);let c,p;u instanceof a.PerspectiveFrustum?(c=h,p=a.PerspectiveFrustum.packedLength):u instanceof a.OrthographicFrustum&&(c=g,p=a.OrthographicFrustum.packedLength),this._frustumType=c,this._frustum=u.clone(),this._origin=r.Cartesian3.clone(o),this._orientation=t.Quaternion.clone(i),this._drawNearPlane=s,this._workerName="createFrustumOutlineGeometry",this.packedLength=2+p+r.Cartesian3.packedLength+t.Quaternion.packedLength}l.pack=function(n,u,i){i=e.defaultValue(i,0);const o=n._frustumType,s=n._frustum;return u[i++]=o,o===h?(a.PerspectiveFrustum.pack(s,u,i),i+=a.PerspectiveFrustum.packedLength):(a.OrthographicFrustum.pack(s,u,i),i+=a.OrthographicFrustum.packedLength),r.Cartesian3.pack(n._origin,u,i),i+=r.Cartesian3.packedLength,t.Quaternion.pack(n._orientation,u,i),u[i+=t.Quaternion.packedLength]=n._drawNearPlane?1:0,u};const _=new a.PerspectiveFrustum,k=new a.OrthographicFrustum,y=new t.Quaternion,F=new r.Cartesian3;return l.unpack=function(n,u,i){u=e.defaultValue(u,0);const o=n[u++];let s;o===h?(s=a.PerspectiveFrustum.unpack(n,u,_),u+=a.PerspectiveFrustum.packedLength):(s=a.OrthographicFrustum.unpack(n,u,k),u+=a.OrthographicFrustum.packedLength);const c=r.Cartesian3.unpack(n,u,F);u+=r.Cartesian3.packedLength;const p=t.Quaternion.unpack(n,u,y),m=1===n[u+=t.Quaternion.packedLength];if(!e.defined(i))return new l({frustum:s,origin:c,orientation:p,_drawNearPlane:m});const d=o===i._frustumType?i._frustum:void 0;return i._frustum=s.clone(d),i._frustumType=o,i._origin=r.Cartesian3.clone(c,i._origin),i._orientation=t.Quaternion.clone(p,i._orientation),i._drawNearPlane=m,i},l.createGeometry=function(e){const r=e._frustumType,o=e._frustum,s=e._origin,c=e._orientation,p=e._drawNearPlane,m=new Float64Array(24);a.FrustumGeometry._computeNearFarPlanes(s,c,r,o,m);const d=new i.GeometryAttributes({position:new u.GeometryAttribute({componentDatatype:n.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:m})});let f,h;const g=p?2:1,l=new Uint16Array(8*(g+1));let _=p?0:1;for(;_<2;++_)f=p?8*_:0,h=4*_,l[f]=h,l[f+1]=h+1,l[f+2]=h+1,l[f+3]=h+2,l[f+4]=h+2,l[f+5]=h+3,l[f+6]=h+3,l[f+7]=h;for(_=0;_<2;++_)f=8*(g+_),h=4*_,l[f]=h,l[f+1]=h+4,l[f+2]=h+1,l[f+3]=h+5,l[f+4]=h+2,l[f+5]=h+6,l[f+6]=h+3,l[f+7]=h+7;return new u.Geometry({attributes:d,indices:l,primitiveType:u.PrimitiveType.LINES,boundingSphere:t.BoundingSphere.fromVertices(m)})},function(t,r){return e.defined(r)&&(t=l.unpack(t,r)),l.createGeometry(t)}}));
