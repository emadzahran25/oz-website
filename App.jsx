
import React, { useState } from 'react';

const IMAGES = {
  lobby1: '/images/LOBBY_01.jpg',
  lobby4: '/images/LOBBY_04.jpg',
  lobby5: '/images/LOBBY_05.jpg',
  cafe1: '/images/CAFE_FINAL_01.jpg',
  cafe3: '/images/CAFE_FINAL_03.jpg',
  auditorium3: '/images/AUDITORIUM_FINAL_03.jpg',
  auditorium5: '/images/AUDITORIUM_FINAL_05.jpg',
  fitness2: '/images/CO-FITNESS_02.jpg',
  fitness3: '/images/CO-FITNESS_03.jpg',
  fitness4: '/images/CO-FITNESS_04.jpg',
};

const GALLERY = [
  { src: IMAGES.lobby1, alt: 'OZ Lobby – central reception with library wall' },
  { src: IMAGES.lobby4, alt: 'OZ Lobby – side perspective' },
  { src: IMAGES.lobby5, alt: 'OZ Lobby – wide angle' },
  { src: IMAGES.cafe1, alt: 'OZ Café – communal tables and booths' },
  { src: IMAGES.cafe3, alt: 'OZ Café – daylight seating' },
  { src: IMAGES.auditorium3, alt: 'OZ Auditorium – stepped seating and library niches' },
  { src: IMAGES.auditorium5, alt: 'OZ Auditorium – feature wall detail' },
  { src: IMAGES.fitness2, alt: 'OZ Co‑Fitness – indoor/outdoor studio' },
  { src: IMAGES.fitness3, alt: 'OZ Co‑Fitness – barre and equipment' },
  { src: IMAGES.fitness4, alt: 'OZ Co‑Fitness – flexible studio space' },
];

export default function App(){
  const [active, setActive] = useState('home');
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      <header style={{position:'sticky',top:0,background:'#fff',borderBottom:'1px solid #eee',zIndex:10}}>
        <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <div style={{width:40,height:40,display:'grid',placeItems:'center',background:'#111',color:'#fff',borderRadius:8,fontWeight:700}}>OZ</div>
            <strong>OZ Co‑Working Park</strong>
          </div>
          <nav style={{display:'flex',gap:16}}>
            {['home','spaces','amenities','memberships','gallery','contact'].map(key => (
              <button key={key} onClick={()=>{setActive(key);scrollTo(key);}} style={{border:'none',background:'none',cursor:'pointer',fontWeight: active===key?700:500}}>
                {key[0].toUpperCase()+key.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <section id="home" style={{padding:'64px 0', background:'linear-gradient(135deg,#f6f7ff 0%, #f1fff6 100%)'}}>
        <div className="container" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:32}}>
          <div>
            <h1 style={{fontSize:40,margin:'0 0 12px'}}>Work. Connect. Thrive.</h1>
            <p style={{fontSize:18,opacity:.75,margin:'0 0 24px'}}>Premium coworking spaces designed for productivity, collaboration, and wellness.</p>
            <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
              <a onClick={()=>scrollTo('memberships')} style={{padding:'12px 20px',background:'#111',color:'#fff',borderRadius:8,cursor:'pointer'}}>Explore Memberships</a>
              <a onClick={()=>scrollTo('contact')} style={{padding:'12px 20px',border:'1px solid #111',borderRadius:8,cursor:'pointer'}}>Schedule a Tour</a>
            </div>
          </div>
          <img src={IMAGES.lobby1} alt="OZ Lobby" style={{borderRadius:14,boxShadow:'0 10px 30px rgba(0,0,0,.12)'}}/>
        </div>
      </section>

      <section id="spaces" className="container" style={{padding:'64px 24px'}}>
        <h2 style={{fontSize:28,marginBottom:8,textAlign:'center'}}>Our Spaces</h2>
        <p style={{textAlign:'center',opacity:.7,marginBottom:24}}>Choose from a variety of workspaces.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:16}}>
          {[{img:IMAGES.lobby5,title:'Private Offices',txt:'Fully furnished private offices for teams.'},
            {img:IMAGES.auditorium3,title:'Meeting Rooms',txt:'Professional spaces with the latest tech.'},
            {img:IMAGES.cafe1,title:'Café & Collaboration',txt:'Open zones for casual meetings and deep work.'}
          ].map((c,i)=>(
            <div key={i} style={{border:'1px solid #eee',borderRadius:14,overflow:'hidden',background:'#fff',boxShadow:'0 4px 18px rgba(0,0,0,.06)'}}>
              <img src={c.img} alt={c.title} style={{height:180,objectFit:'cover',width:'100%'}}/>
              <div style={{padding:16}}>
                <h3 style={{margin:'0 0 6px'}}>{c.title}</h3>
                <p style={{margin:0,opacity:.7}}>{c.txt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="amenities" style={{padding:'64px 0',background:'#fafafa'}}>
        <div className="container">
          <h2 style={{fontSize:28,marginBottom:8,textAlign:'center'}}>Premium Amenities</h2>
          <p style={{textAlign:'center',opacity:.7,marginBottom:24}}>Facilities that support productivity and well‑being.</p>
          <ul style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:12,listStyle:'none',padding:0,margin:0}}>
            {['Multi‑Purpose Auditorium','Restaurant & Café','High‑Speed Internet','Fitness Studio','Support Staff','Event Programming'].map((x,i)=>(
              <li key={i} style={{background:'#fff',border:'1px solid #eee',borderRadius:12,padding:16}}>{x}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="memberships" className="container" style={{padding:'64px 24px'}}>
        <h2 style={{fontSize:28,marginBottom:8,textAlign:'center'}}>Membership Plans</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:16}}>
          {[
            {title:'Flex Desk', price:'$199/mo', perks:['Shared workspace','Fast Wi‑Fi','Coffee & tea','4h meeting credits','Community events']},
            {title:'Dedicated Desk', price:'$399/mo', perks:['Your own desk','24/7 access','Fast Wi‑Fi','8h meeting credits','Printing','All amenities']},
            {title:'Private Office', price:'$799/mo', perks:['Private suite','24/7 access','Custom layout','16h meeting credits','Printing','Priority event booking']},
          ].map((p,i)=>(
            <div key={i} style={{background:'#fff',border:'1px solid #111',borderRadius:14,padding:20}}>
              <h3 style={{margin:'0 0 6px'}}>{p.title}</h3>
              <div style={{fontSize:24,marginBottom:10}}>{p.price}</div>
              <ul style={{margin:0,paddingLeft:18}}>{p.perks.map((k,j)=><li key={j}>{k}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" style={{padding:'64px 0', background:'#f6f6ff'}}>
        <div className="container">
          <h2 style={{fontSize:28,marginBottom:12,textAlign:'center'}}>Photo Gallery</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:12}}>
            {GALLERY.map((g,i)=>(
              <figure key={i} style={{margin:0,background:'#fff',border:'1px solid #eee',borderRadius:12,overflow:'hidden'}}>
                <img src={g.src} alt={g.alt} style={{height:200,objectFit:'cover',width:'100%'}}/>
                <figcaption style={{padding:10,opacity:.7,fontSize:14}}>{g.alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" style={{padding:'40px 0',background:'#111',color:'#fff'}}>
        <div className="container" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:16}}>
          <div><strong>OZ Co‑Working Park</strong><p style={{opacity:.7}}>Sheikh Zayed, Giza</p></div>
          <div><strong>Contact</strong><p style={{opacity:.7}}>info@ozcoworking.com<br/>+20 (xxx) xxx‑xxxx</p></div>
          <div><strong>Hours</strong><p style={{opacity:.7}}>Mon–Fri 7–21 • Sat 8–18 • Sun 9–16</p></div>
        </div>
      </footer>
    </div>
  );
}
