(function(t){function e(e){for(var n,i,c=e[0],l=e[1],A=e[2],u=0,p=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);a&&a(e);while(p.length)p.shift()();return o.push.apply(o,A||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,c=1;c<r.length;c++){var l=r[c];0!==s[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},s={app:0},o=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var A=0;A<c.length;A++)e(c[A]);var a=l;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"1c28":function(t,e,r){"use strict";r("ad73")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),s=Object(n["f"])("img",{alt:"Vue logo",src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMQEhMSExITFhUWFRIVFRgWGBUWEhUSFRUWFhcWGRUYHSggGB0lGxUVITEhJykrLi8uFx8zODMtNygtLisBCgoKDg0OGhAQGzIlICUtLS0tLS8tMC0tLS0tLS0tLS0tLy8vLTAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMgAywMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQBB//EAEoQAAEDAgEGCAcNBwQDAAAAAAEAAgMEEQUGEiExQWETIjJRcXKBkTNCUpKhscEHFBUWI1NUg5OistHSJENEYmN0ghc0s8Jk4fH/xAAbAQEAAwEBAQEAAAAAAAAAAAAAAQIDBAUGB//EADoRAAIBAgEIBwcDAwUAAAAAAAABAgMRBAUSITFBUaHREzJxgZGx8AYUFUJSweEzYWKiwvEWIiOCkv/aAAwDAQACEQMRAD8A+4oiIAiIgCKAxjKRkD+BjjfPPYExssAwHUZJDxWA955lFSz4hNyp4qdvkws4R4+tk0X6GrGriKVLrPu2l405S1IuRNtJUfV47Sw+EqYGdaRgPddVN2TschvO+eoP9aV7mjoYCGjuXVT4RTx8inhb1WMHsXFLKlNdWLfDmbLCy2skX5b0A0CoDjsDGyPJ6M1pWt2W9N4sdU/q08xH4UFhzD0LB1Q0bVhPK2bril2v/BosJfbwMzllHspa0/UkeshPjk36HW/ZD9S5zVjmWJq9y5pZeit3Ev7j28Dq+OTfodb9kP1IMsmbaSuH1N/U4rkNU5Y++Hc6zftEl8t+58y3uH7naMt6YcqOqZ1qeYf9Vsiy3oHG3vlrT/O17LdJc0BRvCu51492doNiN+lV/wBSpa6fG3Mj4f8Ay4Fmocapp/BVEMnUexx7gVIL53VYRBLy4YyefNAcOhw0haosHEfgZqmHqTPzfNeSCtqXtJQfXhJdlmvNPgZywM1qafA+koqHDiGIQ6poqhvkzN4OTskj0X6WqcwbKeOd/AvY+Gexdwb7cYDWY3jRIBu07l62GyhhsS7Up3e7U/B2fhdHPUozh1kWBERdpkEREAREQBERAEREB8lp8pY6WsropmkMdVSuEoBNjoGa+2mwsLHZqVupKqOVudG9r287SHD0L5jj4tXVg/8AIk7jYjvC4m04Ds5t2O8phLHd7V87inDpp30admnhyfcejSUsxWPsS46iqINh3r57T4xWR6G1LiOaVrZPToPpXUMoqq93MpndHCMPtC4K8ZONqclfvXmvX7G8Gk/9y+5b3OJ1lYqsx5TS+NS+ZI0/iAW9mVA209SOgMd6nLynhK2tq/8A2i/7joVaHpPkT6yUCMqItsNUPqj7CsxlPF83U/YlUeFrfSyelhvJtZKD+M0XzVT9kU+M0eyCrPREfzVXhqq+VkdLHeTqKC+MRPJpKk9IY31uXnwxUHk0duvKwfhDlHutTbZdsorzkR0sfSfInkCgeHrX/RY/tJD7Avfg+d/hKya3NE1kXpFyO9V93SWmceL8k1xGe9ifrjwJirq44m50j2MHO8gD0qFZifviroTHG7ghUD5VwLc5xZJoYDpLbXudRXTSYFTsOdwYc/y5CZJO917di6ao/tNANpqQQNtmxSEnsXdk3oljKaim3fW9FtGxJvTubf75u7HEZzpSvo0etfI+iIiL9APGCIiAIiIAiIgCIiAq2VGRcNaeFDnRT2twjLHOA1B7TocB37189xrJWsoyy7WTNe8RsMTrOL3AkAsfq0NO0r7Wq9lfrof76D8Eiwq4alV665l4VZQ1M+STsfCfloZ4uvG8DzgLFYMrY3apGd4B7ivva4KvCaeTlwQuvrzmMPrC4p5Ipvqya4mix0ktKPj7DfUt7V9CmyIw9/8ACxjqF0foYQuV3ufUfimob1Zn+265Z5Dnsmu9NczRZRhtiymNW5qtJ9z6DZUVY+sB9bU+IEX0mr89n6VzvINb6o8eRb4hT3MrTFuarB8QYvpVX57P0rJuQUO2prD9YB6mqj9n67+aPHkT8Qp7mQbAto0a9HSpxmQlL4zql/Wnk9hC3x5E0A/hmu67pH+h7ipXs5UfWqJdzf3RDylDZFlXlxSCPlzRjdnNv3DSvIsWbJ4GKomP9OJ5HnOAaO9X2kwamh8HTwst5LGA99l3Lph7N0F15yfZZL7+ZlLKU/lij57hzKyrfJHHDHBwbg2R07s97XFocLRx6DocNblacDyYZTu4V73zTkZplfYZrTrbGwaGDo071jkz/ucR/uI/+CNWJenhsn4fDaaUbPfrfi/tZGc686nWYREXYZhERAEREAREQBERAFXct+LDDJ83VUjz1eGa0+hxViURlXQmoo6iJvKdG4t67RnN+8AgJNYuUNhmM8PDFK0Cz42O7SAT6brOapeQeNboXNPG043tdkdBJok0VcMzjrc7vKwJ3rmeVlshx/DJ90e2XAspcOcJnjnHeq0ip8Wf0cfwW90/lw/JZc8c470zxzhVpeWT4q/o4/gn3P8Alw/JaLr1Ve6yErh4x7yrLKq2w4/gj3R7+BZkVfZWyDxj26fWs5MbMTHPeAWsa5x2GzRcraGUqUtDTXdyM3hprUe5IC5rZPLrZrdEbY4/WxysagsiqZzKKDP5bwZn9eZxlP41OrtLBERAEREAREQBERAEREAREQFKwNnveWooj+7eZYd9PMS4W6r89vYFM5oXJlhRubwdbE0ukp87PaOVJTO8IzeRYPG9u9dFNUNlY2Rjg5jwHNI1FpFwV5eKp5s77GbQeg5pYQCsODXXUMuFytcDtXmTjZml2Y8FvTgt62LJVsLs08FvXvBb1tRLEps18FvTggtiJYXZjwYUTjsfDGGjbrqHgPtsp47PlPaAG/5KVllaxpc4hrWglxOoAaSSsMjaQyufXyNIMwDIGnWylabtNtheeMd2auzBUc+pnbF6S9bilSVkWposLDYskRe6c4REQBERAEREAREQBERAEREAVIq4Thchdb9hlffR/CSvOm4+acfNJ5ld1qljD2lrgHNcCCCLgg6CCNoVJwU45rJTsRIN+j0ELllZYqPmw+bDbmFr56PXwY409MNvB30yR/y6xsuu+irYqlmfE9r2841g8zhradxXj4jDyjofibRkmYrJeEWXq4iwXiBeqCUeWXq0VtZHAwySvaxo1lxt2DnO4LhpsPmxLltfBR6NBu2oqRzW1xRnzjuW9DDzrO0dW/Z+e4hySMaWA4pJmj/ZRu47vpUjT4NvPGDrO0i3Or2BbQFrp4GxtaxjQ1rQA1rRZoA1ABbl71KlGlHNic7d2ERFoQEREAREQBERAEREAREQBERAEREAVOypoaJj+EMj4Kl3JNNf3xJ0xNB4QdYdq6ZcWlrXOjo3ZkTSWyVRAIuNbIGnQ92sF54o3qRwzBYqe5jbd7uXI4l0zzzukOk9GpM2+srKVisYK3EXv+ViZwOySW0VQRsvExzhfpspl7C3QQQpxcmJniLgxeCp5rnHQ14MU60m7MjWtJ1C6iMoGYixw4CFhi0Zz22fUNG20Ty1pPaVasN8GO31rsUYXA081Tlpur22afMmpXabSKbktS0Ekoc6SSarbpIqwWzRn+SFwDWje0HpV5UPi+DQVbQ2aMOtpa4aJGHymPGlp6FEtxCfDiG1LnT0pNhUW+VhvqE4HKb/AFAOnnXoZtlZFYzTLci1xyBwDmkEEAgg3BB1EEa1sQuEREAREQBERAEREAREQBERAEREAVSxGV2ITPpYnFtNEc2qkbcGR/0ZjhqHlkc9l35V4g9jGQQG1RUOMcZ+baBeSY7mN09Jau3CcPZSwshjFmsFtOsnWXE7STck71KKydjop4GxtaxjQ1rQA1rRZoA1ABbURSUNblw4pq7D7F3EqPxTYNxPcsMZ+hIij+ojdh/I7fyXWuTDuT2+wLrVsP8ApR7CtXrM8WMjAQQQCCCCDpBB1ghZL1bFSrQu+CpWsJPvGV1mE6RSTOOhl9kTidHkncVcFw1tKyaN8UjQ5j2lrgdRBUTkpVPYZKKZxdJT2zHnXLTO8G/eRbNdvbvVWjeErosiIiguEREAREQBERAEREAREQBEUZlFXe9qWebayN7m9e3FHnWQEVgH7TVVNYdLWuNLT8wjiPyrh1pLi/MwKyKNydoPe9LBDtZG0O5y8i7yd5cSe1SSsZMLBxWRK1qUUkwo2v0u7PWR/wC1JKMreU7pZ7SuTHP/AIretTL0OsdGGninp9i7VH4TyXX13Ugr4V3oxfrWVrddni9Xi9XQUCruVPyDoK5v7h4ZNvpZSGvvz5pzX/4lWJc+IUjZ4pIncmRj2HocCPahaLs7neihMjap0tFA53Lazg38+fETG6++7VNqh0BERAEREAREQBERAEREAVcy441OyL52ppYzvaZml33WlWNVrLbVR/3sH4ZCok7JsFgJWBmaNoUaSvAuF457IllRW1nXPWtHOexc7sSGxp7SuWqG1aVy1MfXvZO3cT0ENp1SYg86s0dIJ9q5zI51y4i5OzVo1LFZLlniKk9EpNmihFakexSFl80kXNz0re2ueNoPYudFEa9SPVk/FkuEXrR3MxE7W9y3Nr2HXcKLRbxx9dbb9q5WM3QgyabUMOpw9S2AqBQGy6I5Ua60fB87lHhlsZnkdxffsfkVs9uiQMl9b3Kxqr5HG82If3DP+GNWhenCWdFS3q5FraAiIrAIiIAiIgCIiAIiIClYzlHNJLJBSZrBG7MlneM60gtdkce0i+knRfRYqtV1Pwc1LNNUTSOFTHd8snEa0tfezBZjRfcoqsxiWmrq3NAfGamW7CbOBuOM12rsKlYcpKWYZshzCfFmbYHtPFPevmMfiMYq7zdME9Ud38tGd4rN3HpUKVF09Ohva/tsL9G8OF2kOHOCCO8LwMAJO061So8HpnceMNb/ADQvcz8BsuhtLOzRHWVLdz82UfeF/SsI5UovQ7ru9eRLwdTZZlvstL4OZVxtTXN1TwP68RH4HBZtxWvGuOkd0OlZ7CtXjcNLRn8HyMnh6q2E0WkIVDDHKsa6SA9WY/8AZixOMVJ/g4/tx+lVdahsqLxI6Gp9JOLEsG9QXwtVfRI/th+le/C1Wf4WIdM35NWfT0frXiiVRqbidI0WWIboAOnV/wDVCGurTqipW9L5HegNCxz652uWmZ1YnuP3nKrxdBfMuP2RZUKj2E/ZHGwudA5zoCrrqGd/LrZ+iNsUY9AK1TYNTN40xL7baiVzh942WMspUE7K77FzsXWGntOano+FqqyWKoljcJWBroX8U/Jt5TdLXab61O4dlPPTSRw1uZIyQ5kdQwZhz9jZI9QJtrGhQ8eOUzBmU8ZlPk0zLtvvdoaO9QWVfvlzYZZcyNvDNDImnOIJB4z36idGoaBddWBxuKeLjGTzYSss2WvVozVbO0vTqzVtKVaNNU3bS1tR9sa4EXGkFZqKyYcTTRk8ylV9aeeEREAREQBERAEREB8LyopXQ19U2QZpfK6Vl9T432ILTt2g8xC4LA6Dq36l9tx/AYa6PMmYHW0tPjNPODrC+dYn7nNRESYJi5uwPGd6da8nFZOlUm5wevfzOuliVFJNFVbRMvcNzTztJafukLridMzkVVQ3cXB47nArGowqsiNnQX3sd7CFyurHs5cUrelpI7wuCphcV8yb8JczeNWjsduBMNxKrFrVDT14mn8JC3jGasfRndLXt9RKgm4zHtIHTcesLqjxaI+O3vC4Z4ea61Jf+EvJI2jUWyXG/mS7cbrPm6Y9DpR6wtgxms+apvPk/JR8dfEf3jO8LoZVMOp8fnBckoJa4LwfMvnP6n4nSMXrPmqbz5PyXpxKtPiUg6XTH1BYMnZ5bfOC2CqjGuRg/wAm/msmlqzFx5k3e/iZCqrT41K3oZI71kL3Mq3a6oN6kLB+IlazisDdc0XnNPqWByjpR++B6oc71BWjSrS6lL+hS84shyitcuNvudHwSX+Eqqp45s8Mb3MAWyDJ+mab8Cxx533ee95KjzlXF4kcz+hmaPvELD4wVL/BUgG97ifQ0e1dEMDlGatGMku1QXnEydWgtbXmWuJoAsAANgGgdwVXy4rGO4GBrgZBKHuA05rQ0jjcxN9AXjMMxKq0Oe5jT4sY4MecOMe9WPJ73PGxkOl5725zv516eTcgzo1lWrSWh3SWnT+70eFu9bcK+LU4uMV4lsyXFqaPoUstcMYYA0CwGgLYvpjgCIiAIiIAiIgCIiAIiIDW6MHWAekLmnwqF+uNvciICOnySpX/ALsKPm9z6kd4g7giIDkk9zOlOwdy1f6X027uXqKbg8/0vpt3cvW+5hTbu5ES7B0xe51TN2DuXbDkRSt8W6IoB3wZNUzNUYXdDQxM5LGjsREB0BoGoLJEQBERAEREAREQH//Z"},null,-1),o=Object(n["f"])("h1",null,"Reaction Timer",-1),i=["disabled"];function c(t,e,r,c,l,A){var a=Object(n["h"])("Block"),u=Object(n["h"])("Results");return Object(n["g"])(),Object(n["e"])(n["a"],null,[s,o,Object(n["f"])("button",{onClick:e[0]||(e[0]=function(){return A.start&&A.start.apply(A,arguments)}),disabled:l.isPlaying},"Play",8,i),l.isPlaying?(Object(n["g"])(),Object(n["c"])(a,{key:0,delay:l.delay,onDone:A.endGame},null,8,["delay","onDone"])):Object(n["d"])("",!0),l.showResults?(Object(n["g"])(),Object(n["c"])(u,{key:1,score:l.score},null,8,["score"])):Object(n["d"])("",!0)],64)}function l(t,e,r,s,o,i){return o.showBlock?(Object(n["g"])(),Object(n["e"])("div",{key:0,class:"block",onClick:e[0]||(e[0]=function(){return i.stopTimer&&i.stopTimer.apply(i,arguments)})}," Click Me ")):Object(n["d"])("",!0)}var A={props:["delay"],data:function(){return{showBlock:!1,timer:null,reactionTime:0}},mounted:function(){var t=this;setTimeout((function(){t.showBlock=!0,t.startTimer()}),this.delay)},methods:{startTimer:function(){var t=this;this.timer=setInterval((function(){t.reactionTime+=10}),10)},stopTimer:function(){clearInterval(this.timer),this.$emit("done",this.reactionTime)}}},a=(r("7c35"),r("d959")),u=r.n(a);const p=u()(A,[["render",l]]);var E=p,d={class:"speed"};function f(t,e,r,s,o,i){return Object(n["g"])(),Object(n["e"])(n["a"],null,[Object(n["f"])("p",null,"Reaction time - "+Object(n["i"])(r.score),1),Object(n["f"])("p",d,Object(n["i"])(o.speed),1)],64)}var R={props:["score"],data:function(){return{speed:null}},mounted:function(){this.score<250?this.speed="Very fast":this.score<400?this.speed="Relatively fast":this.speed="Not so fast"}};r("c8ce");const b=u()(R,[["render",f]]);var h=b,j={name:"App",components:{Block:E,Results:h},data:function(){return{isPlaying:!1,delay:null,score:null,showResults:!1}},methods:{start:function(){this.delay=2e3+5e3*Math.random(),this.isPlaying=!0,this.showResults=!1},endGame:function(t){this.score=t,this.isPlaying=!1,this.showResults=!0}}};r("1c28");const O=u()(j,[["render",c]]);var y=O;Object(n["b"])(y).mount("#app")},"7c35":function(t,e,r){"use strict";r("d2ef")},ad73:function(t,e,r){},ba87:function(t,e,r){},c8ce:function(t,e,r){"use strict";r("ba87")},d2ef:function(t,e,r){}});
//# sourceMappingURL=app.a98b161c.js.map