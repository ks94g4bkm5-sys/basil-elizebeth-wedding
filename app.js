(() => {
  'use strict';
  const c = window.WEDDING;
  const $ = id => document.getElementById(id);
  const https = value => { try { const u = new URL(value); return u.protocol === 'https:' ? u.href : ''; } catch { return ''; } };
  const notice = text => { $('status').textContent = text; clearTimeout(notice.timer); notice.timer = setTimeout(() => $('status').textContent = '', 7000); };
  function connect(id, pending, url) { const valid = https(url); if (valid) { $(id).href = valid; $(id).hidden = false; if (pending) $(pending).hidden = true; } }
  connect('upload-link', 'upload-pending', c.photoUploadUrl);
  connect('album-link', null, c.albumUrl);
  $('upload-note').textContent = c.photoUploadNote;
  $('map-link').href = https(c.mapUrl);
  $('ceremony-time').textContent = c.timeLabel;
  $('timezone-note').textContent = c.timezoneConfirmed ? '' : 'Time zone provisional: India Standard Time (UTC+5:30). Awaiting confirmation.';
  function image(src, alt) { const img = new Image(); img.alt = alt; img.loading = 'lazy'; img.src = src; return img; }
  if (c.portrait) { const img = image(c.portrait, c.portraitAlt); img.onload = () => { const caption=document.createElement('span');caption.className='portrait-caption';caption.textContent='B & E';$('portrait').replaceChildren(img,caption); }; img.onerror = () => notice('The couple’s photograph could not be loaded.'); }
  c.gallery.forEach(p => { const img = image(p.src,p.alt); img.onerror = () => img.remove(); $('gallery').append(img); });
  const start = new Date(c.start);
  function countdown() {
    const difference = start - Date.now();
    if (!Number.isFinite(difference)) { $('countdown').textContent = 'Wedding date awaiting configuration'; return; }
    if (difference <= 0) { $('countdown').textContent = 'Celebrating our forever · 23 November 2026'; return; }
    const seconds = Math.floor(difference / 1000);
    const units = [[Math.floor(seconds/86400),'days'],[Math.floor(seconds/3600)%24,'hours'],[Math.floor(seconds/60)%60,'minutes'],[seconds%60,'seconds']];
    $('countdown').replaceChildren(...units.map(([value,label]) => { const div = document.createElement('div'); const strong = document.createElement('strong'); strong.textContent=String(value).padStart(2,'0'); const small=document.createElement('small'); small.textContent=label; div.append(strong,small); return div; }));
  }
  countdown(); setInterval(countdown,1000);
  const utc = date => date.toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');
  const title = 'Wedding of Basil Kadalangal & Elizebeth Jenefer';
  const location = 'St. George Horeb Jacobite Church, Vadakkumbhagam';
  const description = 'Ceremony starts at 9:00 am. End time to be confirmed.' + (c.timezoneConfirmed ? '' : ' India Standard Time is provisional; confirm with the couple.') + ' Directions: ' + c.mapUrl;
  const google = new URL('https://calendar.google.com/calendar/render');
  google.search = new URLSearchParams({action:'TEMPLATE',text:title,dates:utc(start)+'/'+utc(start),location,details:description}).toString();
  $('google-calendar').href = google.href;
  const escapeICS = s => s.replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/,/g,'\\,').replace(/;/g,'\\;');
  function foldICS(line) { let rows=[],row='',bytes=0; for (const char of line) { const size = new TextEncoder().encode(char).length; if (bytes+size>75) {rows.push(row);row=' ';bytes=1;} row+=char;bytes+=size; } return [...rows,row].join('\r\n'); }
  $('calendar').addEventListener('click', () => {
    const lines = ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Basil and Elizebeth//Wedding Invitation//EN','CALSCALE:GREGORIAN','BEGIN:VEVENT','UID:basil-elizebeth-20261123@wedding-invitation','DTSTAMP:'+utc(new Date()),'DTSTART:'+utc(start),'DURATION:PT0S','SUMMARY:'+escapeICS(title),'LOCATION:'+escapeICS(location),'DESCRIPTION:'+escapeICS(description),'END:VEVENT','END:VCALENDAR'];
    const url = URL.createObjectURL(new Blob([lines.map(foldICS).join('\r\n')+'\r\n'],{type:'text/calendar;charset=utf-8'}));
    const a=document.createElement('a'); a.href=url;a.download='basil-elizebeth-wedding.ics';a.click();setTimeout(()=>URL.revokeObjectURL(url),10000);
    notice('Calendar downloaded. Open the file to save the ceremony start.');
  });
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = reduced.matches;
  for(let i=0;i<24;i++) { const p=document.createElement('i');p.className='petal';p.style.left=(i*100/24)+'%';p.style.animationDuration=(13+(i%7)*2)+'s';p.style.animationDelay=(-i*1.9)+'s';p.style.opacity=.3+(i%4)*.13;$('petals').append(p); }
  function motion() { document.body.classList.toggle('paused',paused);$('motion').textContent=paused?'Petals off':'Petals on';$('motion').setAttribute('aria-pressed',String(paused));$('motion').setAttribute('aria-label',paused?'Resume falling petals':'Pause falling petals'); }
  motion(); $('motion').onclick=()=>{paused=!paused;motion();}; reduced.addEventListener('change',e=>{paused=e.matches;motion();});
  const audio=$('audio'), music=$('music');
  audio.loop=true;
  let startOnInteraction=Boolean(c.music);
  let resumeOnVisible=false;
  audio.addEventListener('timeupdate',()=>{
    if(audio.currentTime>=50) audio.currentTime=0;
  });
  document.addEventListener('visibilitychange',async()=>{
    if(document.hidden){resumeOnVisible=!audio.paused;audio.pause();}
    else if(resumeOnVisible){resumeOnVisible=false;try{await audio.play();}catch{notice('Tap the music button to resume.');}}
  });
  if (c.music) { audio.src=c.music;audio.preload='auto';music.textContent='♫ Starting music'; } else { music.setAttribute('aria-disabled','true'); }
  const syncMusic=()=>{music.textContent=audio.paused?'♫ Music off':'♫ Music on';music.setAttribute('aria-pressed',String(!audio.paused));};
  audio.addEventListener('play',syncMusic);audio.addEventListener('pause',syncMusic);
  music.onclick=async()=>{startOnInteraction=false;if(!c.music){notice('Our music track is still to be added.');return;}if(!audio.paused){audio.pause();return;}try{await audio.play();}catch{notice('Music could not play. Please check the audio file and try again.');}};
  async function startMusic(){
    if(!startOnInteraction || document.hidden)return;
    startOnInteraction=false;
    try{await audio.play();}
    catch{startOnInteraction=true;music.textContent='♫ Tap for music';music.setAttribute('aria-pressed','false');}
  }
  document.addEventListener('pointerdown',event=>{if(!event.target.closest('#music'))startMusic();});
  document.addEventListener('click',event=>{if(!event.target.closest('#music'))startMusic();});
  document.addEventListener('keydown',event=>{if(!event.repeat && !event.target.closest('#music'))startMusic();});
  if(c.music)startMusic();
})();
