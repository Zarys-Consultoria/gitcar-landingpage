(function(){
 const tabs=[...document.querySelectorAll('[role="tab"]')];
 function select(t,focus){
  tabs.forEach(x=>{const on=x===t;x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;document.getElementById(x.getAttribute('aria-controls')).hidden=!on});
  if(focus)t.focus();
  t.scrollIntoView({block:'nearest',inline:'center',behavior:'smooth'});
 }
 tabs.forEach((t,i)=>{
  t.addEventListener('click',()=>select(t));
  t.addEventListener('keydown',e=>{
   let j=null;
   if(e.key==='ArrowRight')j=(i+1)%tabs.length;
   else if(e.key==='ArrowLeft')j=(i-1+tabs.length)%tabs.length;
   else if(e.key==='Home')j=0;else if(e.key==='End')j=tabs.length-1;
   if(j!==null){e.preventDefault();select(tabs[j],true)}
  });
 });
})();

/* ===== Fale conosco ===== */
(function(){
 // TODO: coloque aqui o endereço que vai receber os contatos (ex.: Formspree, webhook do CRM, API da Zarys).
 // Enquanto estiver vazio, o formulário NÃO envia nada: só mostra a confirmação, para demonstração.
 const FORM_ENDPOINT = "";

 const form=document.getElementById('contactForm'), done=document.getElementById('formDone'), errBox=document.getElementById('formError');
 const tel=form.telefone;
 tel.addEventListener('input',()=>{
  let d=tel.value.replace(/\D/g,'').slice(0,11);
  if(d.length>10) d='('+d.slice(0,2)+') '+d.slice(2,7)+'-'+d.slice(7);
  else if(d.length>6) d='('+d.slice(0,2)+') '+d.slice(2,6)+'-'+d.slice(6);
  else if(d.length>2) d='('+d.slice(0,2)+') '+d.slice(2);
  else if(d.length) d='('+d;
  tel.value=d;
 });
 function mark(el,bad){el.closest('.field').classList.toggle('err',bad);return !bad}
 function check(){
  let ok=true;
  ok=mark(form.nome,!form.nome.value.trim())&&ok;
  ok=mark(tel,tel.value.replace(/\D/g,'').length<10)&&ok;
  const em=form.email.value.trim();
  ok=mark(form.email,em!==''&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em))&&ok;
  ok=mark(form.revenda,!form.revenda.value.trim())&&ok;
  ok=mark(form.estoque,!form.estoque.value)&&ok;
  const needEmail=form.canal.value==='E-mail'&&!em;
  document.getElementById('canal-msg').closest('.field').classList.toggle('err',needEmail);
  return ok&&!needEmail;
 }
 form.addEventListener('input',e=>{if(e.target.closest('.field.err'))check()});
 form.addEventListener('submit',async e=>{
  e.preventDefault(); errBox.classList.remove('on');
  if(!check()){const f=form.querySelector('.field.err input,.field.err select');if(f)f.focus();return}
  if(form.site.value) return; // robô
  const data=Object.fromEntries(new FormData(form)); delete data.site;
  data.origem='Site GitCar'; data.enviado_em=new Date().toISOString();
  const btn=form.querySelector('button[type=submit]'); btn.disabled=true;
  try{
   if(FORM_ENDPOINT){
    const r=await fetch(FORM_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(data)});
    if(!r.ok) throw new Error(r.status);
   }else{
    console.warn('[GitCar] FORM_ENDPOINT não configurado. Dados do formulário (não enviados):',data);
   }
   const first=data.nome.trim().split(/\s+/)[0];
   document.getElementById('doneText').textContent='Obrigado, '+first+'! Nosso time vai falar com você pelo '+(data.canal==='Ligação'?'telefone':data.canal)+' em breve.';
   form.hidden=true; done.hidden=false;
  }catch(err){errBox.classList.add('on')}
  finally{btn.disabled=false}
 });
})();
