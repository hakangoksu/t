for(a=process.argv.slice(2),l='',s=a[0]||'',i=0;s[i];i++)for(j=i;++j<=s.length;)a.every(x=>x.includes(t=s.slice(i,j)))&j>i+l.length?l=t:0;console.log(l)
