const defaultFile = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fes%2Fimages%2Fdefault-profile-picture%2F64676383&psig=AOvVaw0AUFXem_blhEkBmt5z4Eqi&ust=1724527044598000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMD2qfnpi4gDFQAAAAAdAAAAABAJhttps://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fes%2Fimages%2Fdefault-profile-picture%2F64676383&psig=AOvVaw0AUFXem_blhEkBmt5z4Eqi&ust=1724527044598000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMD2qfnpi4gDFQAAAAAdAAAAABAJ';

const file = document.getElementById( 'foto' );
const img = document.getElementById( 'perfil' );
file.addEventListener( 'change', e => {
  if( e.target.files[0] ){
    const reader = new FileReader( );
    reader.onload = function( e ){
      img.src = e.target.result;
    }
    reader.readAsDataURL(e.target.files[0])
  }else{
    img.src = defaultFile;
  }
} );