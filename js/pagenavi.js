if(document.location.hostname!='http://www.pragata.my.id/'){window.location.href='https://www.pragata.my.id/'};function results(c){for(var b=0;b<c.feed.entry.length;b++){var d=c.feed.entry[b];Titles[TitlesNum]=d.title.$t;for(var a=0;a<d.link.length;a++){if(d.link[a].rel=="alternate"){Urls[TitlesNum]=d.link[a].href;TitlesNum++;break}}}};function duplicates(){var b=new Array(0);var c=new Array(0);for(var a=0;a<Urls.length;a++){if(!contains(b,Urls[a])){b.length+=1;b[b.length-1]=Urls[a];c.length+=1;c[c.length-1]=Titles[a]}};Titles=c;Urls=b};function contains(b,d){for(var c=0;c<b.length;c++){if(b[c]==d){return!0}};return!1};function print(a){for(var b=0;b<Urls.length;b++){if(Urls[b]==a){Urls.splice(b,1);Titles.splice(b,1)}};var c=Math.floor((Titles.length-1)*Math.random());var b=0;document.write("<ul>");while(b<Titles.length&&b<20&&b<5){document.write('<li><a title="'+Titles[c]+'" href="'+Urls[c]+'">'+Titles[c]+"</a></li>");if(c<Titles.length-1){c++}else{c=0};b++};document.write("</ul>");Urls.splice(0,Urls.length);Titles.splice(0,Titles.length)}
