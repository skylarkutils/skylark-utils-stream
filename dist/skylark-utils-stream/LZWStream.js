/**
 * skylark-utils-stream - The stream features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0-beta
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","./streams","./DecodeStream"],function(e,t,r,i){var n=i.inherit({klassName:"LZWStream",init:function(e,t){this.str=e,this.dict=e.dict,this.cachedData=0,this.bitsCached=0;for(var r=4096,i={earlyChange:t,codeLength:9,nextCode:258,dictionaryValues:new Uint8Array(r),dictionaryLengths:new Uint16Array(r),dictionaryPrevCodes:new Uint16Array(r),currentSequence:new Uint8Array(r),currentSequenceLength:0},n=0;n<256;++n)i.dictionaryValues[n]=n,i.dictionaryLengths[n]=1;this.lzwState=i,this.overrided()},readBits:function(e){for(var t=this.bitsCached,r=this.cachedData;t<e;){var i=this.str.getByte();if(null==i)return this.eof=!0,null;r=r<<8|i,t+=8}return this.bitsCached=t-=e,this.cachedData=r,this.lastCode=null,r>>>t&(1<<e)-1},readBlock:function(){var e,t,r,i=512,n=2*i,a=i,s=this.lzwState;if(s){var h=s.earlyChange,c=s.nextCode,d=s.dictionaryValues,o=s.dictionaryLengths,u=s.dictionaryPrevCodes,f=s.codeLength,l=s.prevCode,g=s.currentSequence,y=s.currentSequenceLength,L=0,C=this.bufferLength,v=this.ensureBuffer(this.bufferLength+n);for(e=0;e<i;e++){var S=this.readBits(f),k=y>0;if(S<256)g[0]=S,y=1;else{if(!(S>=258)){if(256==S){f=9,c=258,y=0;continue}this.eof=!0,delete this.lzwState;break}if(S<c)for(y=o[S],t=y-1,r=S;t>=0;t--)g[t]=d[r],r=u[r];else g[y++]=g[0]}if(k&&(u[c]=l,o[c]=o[l]+1,d[c]=g[0],c++,f=c+h&c+h-1?f:0|Math.min(Math.log(c+h)/.6931471805599453+1,12)),l=S,L+=y,n<L){do n+=a;while(n<L);v=this.ensureBuffer(this.bufferLength+n)}for(t=0;t<y;t++)v[C++]=g[t]}s.nextCode=c,s.codeLength=f,s.prevCode=l,s.currentSequenceLength=y,this.bufferLength=C}}});return r.LZWStream=n});
//# sourceMappingURL=sourcemaps/LZWStream.js.map