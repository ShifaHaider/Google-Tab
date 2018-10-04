
var body = document.body;
var mainDiv = document.createElement('div');
var imgGoogle = document.createElement('img');
var inp = document.createElement('input');
var siteDiv = document.createElement('div');
var gmail = document.createElement('p');
var images = document.createElement('p');
var apps = document.createElement('img');
var bell = document.createElement('img');
var profile = document.createElement('img');

imgGoogle.setAttribute("src", "google-logo.png");
Object.assign(imgGoogle.style, {
    width: '272px',
    height: '92px',
    paddingTop: '109px',
    position: 'absolute',
    left: '500px',
});
mainDiv.appendChild(imgGoogle);

Object.assign(siteDiv.style , {
    display: 'flex',
    top: '20px',
    position: 'absolute',
    right: '39px',
    fontSize : '13px'
});

gmail.innerHTML = 'Gmail';
gmail.style.paddingLeft = '10px';
siteDiv.appendChild(gmail);

images.innerHTML = 'Images';
images.style.paddingLeft = '10px';
siteDiv.appendChild(images);

apps.setAttribute('src' , 'icon.png') ;
apps.setAttribute('width' , '20px') ;
apps.setAttribute('height' , '20px') ;
apps.style.paddingLeft = '10px';
siteDiv.appendChild(apps);

bell.setAttribute('src' , 'bell-icon.png');
bell.setAttribute('width' , '20px') ;
bell.setAttribute('height' , '20px') ;
bell.style.paddingLeft = '10px';
siteDiv.appendChild(bell);

profile.setAttribute("src" , 'photo.jpg');
profile.setAttribute('width' , '25px') ;
profile.setAttribute('height' , '25px') ;
profile.style.paddingLeft = '10px';
siteDiv.appendChild(profile);

mainDiv.appendChild(siteDiv);
Object.assign(body.style, {
    backgroundImage: "url(google-tab.jpg)",
    height: '100%',
    margin: '0',
    //backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    fontFamily: 'arial,sans-serif'
});
body.appendChild(mainDiv);
