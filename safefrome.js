var Base64={_keyStr:&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=&quot;,encode:function(input){var output=&quot;&quot;;var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=Base64._utf8_encode(input);while(i&lt;input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1&gt;&gt;2;enc2=((chr1&amp;3)&lt;&lt;4)|(chr2&gt;&gt;4);enc3=((chr2&amp;15)&lt;&lt;2)|(chr3&gt;&gt;6);enc4=chr3&amp;63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}
output=output+ this._keyStr.charAt(enc1)+ this._keyStr.charAt(enc2)+ this._keyStr.charAt(enc3)+ this._keyStr.charAt(enc4);}
return output;},decode:function(input){var output=&quot;&quot;;var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9+/=]/g,&quot;&quot;);while(i&lt;input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1&lt;&lt;2)|(enc2&gt;&gt;4);chr2=((enc2&amp;15)&lt;&lt;4)|(enc3&gt;&gt;2);chr3=((enc3&amp;3)&lt;&lt;6)|enc4;output=output+ String.fromCharCode(chr1);if(enc3!=64){output=output+ String.fromCharCode(chr2);}
if(enc4!=64){output=output+ String.fromCharCode(chr3);}}
output=Base64._utf8_decode(output);return output;},_utf8_encode:function(string){string=string.replace(/rn/g,&quot;n&quot;);var utftext=&quot;&quot;;for(var n=0;n&lt;string.length;n++){var c=string.charCodeAt(n);if(c&lt;128){utftext+=String.fromCharCode(c);}
else if((c&gt;127)&amp;&amp;(c&lt;2048)){utftext+=String.fromCharCode((c&gt;&gt;6)|192);utftext+=String.fromCharCode((c&amp;63)|128);}
else{utftext+=String.fromCharCode((c&gt;&gt;12)|224);utftext+=String.fromCharCode(((c&gt;&gt;6)&amp;63)|128);utftext+=String.fromCharCode((c&amp;63)|128);}}
return utftext;},_utf8_decode:function(utftext){var string=&quot;&quot;;var i=0;var c=c1=c2=0;while(i&lt;utftext.length){c=utftext.charCodeAt(i);if(c&lt;128){string+=String.fromCharCode(c);i++;}
else if((c&gt;191)&amp;&amp;(c&lt;224)){c2=utftext.charCodeAt(i+ 1);string+=String.fromCharCode(((c&amp;31)&lt;&lt;6)|(c2&amp;63));i+=2;}
else{c2=utftext.charCodeAt(i+ 1);c3=utftext.charCodeAt(i+ 2);string+=String.fromCharCode(((c&amp;15)&lt;&lt;12)|((c2&amp;63)&lt;&lt;6)|(c3&amp;63));i+=3;}}
return string;}}
var encode=document.getElementById(&#039;encode&#039;),decode=document.getElementById(&#039;decode&#039;),output=document.getElementById(&#039;output&#039;),input=document.getElementById(&#039;input&#039;);var User_ID=&quot;&quot;;var protected_links=&quot;&quot;;var a_to_va=0;var a_to_vb=0;var a_to_vc=&quot;&quot;;function auto_safelink(){auto_safeconvert();}
function auto_safeconvert(){var a_to_vd=window.location.hostname;if(protected_links!=&quot;&quot;&amp;&amp;!protected_links.match(a_to_vd)){protected_links+=&quot;, &quot;+ a_to_vd;}else if(protected_links==&quot;&quot;)
{protected_links=a_to_vd;}
var a_to_ve=&quot;&quot;;var a_to_vf=new Array();var a_to_vg=0;a_to_ve=document.getElementsByTagName(&quot;a&quot;);a_to_va=a_to_ve.length;a_to_vf=a_to_fa();a_to_vg=a_to_vf.length;var a_to_vh=false;var j=0;var a_to_vi=&quot;&quot;;for(var i=0;i&lt;a_to_va;i++)
{a_to_vh=false;j=0;while(a_to_vh==false&amp;&amp;j&lt;a_to_vg)
{a_to_vi=a_to_ve[i].href;if(a_to_vi.match(a_to_vf[j])||!a_to_vi||!a_to_vi.match(&quot;http&quot;))
{a_to_vh=true;}
j++;}
if(a_to_vh==false)
{var encryptedUrl=Base64.encode(a_to_vi);a_to_ve[i].href=&quot;http://lewatinaj.ga/?site=&quot;+ encryptedUrl+&quot;&amp;c=0&amp;user=&quot;+ User_ID;a_to_ve[i].rel=&quot;nofollow&quot;;a_to_vb++;a_to_vc+=i+&quot;:::&quot;+ a_to_ve[i].href+&quot;n&quot;;}}
var a_to_vj=document.getElementById(&quot;anonyminized&quot;);var a_to_vk=document.getElementById(&quot;found_links&quot;);if(a_to_vj)
{a_to_vj.innerHTML+=a_to_vb;}
if(a_to_vk)
{a_to_vk.innerHTML+=a_to_va;}}
function a_to_fa()
{var a_to_vf=new Array();protected_links=protected_links.replace(&quot; &quot;,&quot;&quot;);a_to_vf=protected_links.split(&quot;,&quot;);return a_to_vf;}