"use strict";(self["webpackChunkcinephile"]=self["webpackChunkcinephile"]||[]).push([[456],{1456:function(e,i,a){a.r(i),a.d(i,{default:function(){return U}});var s=a(3396),n=a(7139);const l={key:0,class:"main"},m={class:"main__contentId"},t={class:"main__media"},_=["src"],c={class:"main__media-block"},d={class:"main__media-left"},o={class:"main__media-left-title"},r={class:"main__media-left-text"},v={class:"main__media-left-janr"},u={class:"main__media-date"},p={key:0},g={class:"main__media-right"},h=["src"],k={class:"main__media-actors"},w=(0,s._)("h2",{class:"main__media-title"},"В главных ролях",-1),f={class:"main__media-casts"};function y(e,i,a,y,D,b){const z=(0,s.up)("Actor");return e.movie?((0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("div",m,[(0,s._)("div",t,[(0,s._)("img",{src:e.imageFullUrl+e.movie.backdrop_path,alt:"",class:"main__media-poster"},null,8,_),(0,s._)("div",c,[(0,s._)("div",d,[(0,s._)("h1",o,(0,n.zw)(e.movie.title),1),(0,s._)("p",r,(0,n.zw)(e.movie.overview),1),(0,s._)("p",v,[(0,s._)("span",u,(0,n.zw)(new Date(e.movie.release_date).getFullYear())+", ",1),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.movie.genres,((i,a)=>((0,s.wg)(),(0,s.iD)("span",{key:i.id},[(0,s.Uk)((0,n.zw)(i.name)+" ",1),a<e.movie.genres.length-1?((0,s.wg)(),(0,s.iD)("span",p," , ")):(0,s.kq)("",!0)])))),128))])]),(0,s._)("div",g,[(0,s._)("img",{src:e.imageFullUrl+e.movie.poster_path,alt:""},null,8,h)]),(0,s._)("div",k,[w,(0,s._)("div",f,[(0,s.Wm)(z,{type:"/movie/",id:e.movie.id,count:"6"},null,8,["id"])])])])])])])):(0,s.kq)("",!0)}var D=a(65),b={computed:{...(0,D.rn)("movie",["movie"]),...(0,D.rn)(["imageFullUrl"])},methods:{...(0,D.nv)("movie",["getMovieById"])},async mounted(){this.getMovieById(this.$route.params.id)}},z=a(89);const F=(0,z.Z)(b,[["render",y]]);var U=F}}]);