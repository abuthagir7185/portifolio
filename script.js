function shownav(page) {
    document.getElementById('Home-content').style.display = page === 'Home' ? 'flex' : 'none'
    document.getElementById('About-content').style.display = page === 'About' ? 'inline' : 'none'
    document.getElementById('Skill-content').style.display = page === 'Skill' ? 'inline' : 'none'
    document.getElementById('Contact-content').style.display = page === 'Contact' ? 'inline' : 'none'
}
function showskill(talent) {
    document.getElementById('skill1').style.display = talent === 'web' ? 'grid' : 'none'
    document.getElementById('skill2').style.display = talent === 'Video' ? 'grid' : 'none'
    document.getElementById('skill3').style.display = talent === 'Logo' ? 'grid' : 'none'  
}
function contacts(cards) {
    document.getElementById('contact-card').style.display = cards === 'cardtype' ? 'flex' : 'none'
    document.getElementById('socialcontacts').style.display = cards === 'socialmedia' ? 'flex' :'none'
 }
function Alert() {
      setTimeout(function() {
         alert("Tap my skills")
       }, 2500)
      
}
