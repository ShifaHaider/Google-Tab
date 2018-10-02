var body = document.body;
var mainDiv = document.createElement('div');
var imgGoogle = document.createElement('img');
var inp = document.createElement('input');
var inpDiv = document.createElement('div');
var mic = document.createElement('img');
var siteDiv = document.createElement('div');
var div1 = document.createElement('a');
var div2 = document.createElement('a');
var apps = document.createElement('img');
var bell = document.createElement('img');
var img = document.createElement('img');
var iconsDiv = document.createElement('div');
var icon1 = document.createElement('div');
var icon2 = document.createElement('div');
var icon3 = document.createElement('div');
var icon4 = document.createElement('div');
var icon5 = document.createElement('div');
var icon6 = document.createElement('div');
var icon7 = document.createElement('div');
var icon8 = document.createElement('div');
var img1 = document.createElement('img');
var img2 = document.createElement('img');
var img3 = document.createElement('img');
var img4 = document.createElement('img');
var img5 = document.createElement('img');
var img6 = document.createElement('img');
var img7 = document.createElement('img');
var img8 = document.createElement('img');
var button1 = document.createElement('button');
var button2 = document.createElement('button');
var button3 = document.createElement('button');
var button4 = document.createElement('button');
var button5 = document.createElement('button');
var button6 = document.createElement('button');
var button7 = document.createElement('button');
var button8 = document.createElement('button');
var settingD = document.createElement('div');
var settingI = document.createElement('img');
var bellDiv = document.createElement('div');
var secIconD = document.createElement('div');
var brD = document.createElement('div');
var br = document.createElement('br');
var styleObj = {
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'column nowrap',
    height: '100%',
    position: 'relative',
    width: '100%',
    //zIndex: '-1'
};

Object.assign(iconsDiv.style, {
    display: 'inline-flex',
    //position: 'absolute',
    //left: '380px',
    textAlign: 'center',
    marginTop: '40px',
    top: '317px'
});
Object.assign(secIconD.style, {
    display: 'inline-flex',
    //position: 'absolute',
    //left: '380px',
    textAlign: 'center',
    marginTop: '40px',
    top: '317px'
});
Object.assign(icon1.style, styleObj);
img1.setAttribute('src', 'download.png');
button1.innerHTML = 'ShifaHaider';
icon1.appendChild(img1);
icon1.appendChild(button1);
Object.assign(icon2.style, styleObj);
img2.setAttribute('src', 'download (1).png');
button2.innerHTML = 'Material-ui';
icon2.appendChild(img2);
icon2.appendChild(button2);
Object.assign(icon3.style, styleObj);
img3.setAttribute('src', 'download (2).png');
button3.innerHTML = 'Google';
icon3.appendChild(img3);
icon3.appendChild(button3);
Object.assign(icon4.style, styleObj);
img4.setAttribute('src', 'map.0407227,16z');
button4.innerHTML = 'Google Maps';
icon4.appendChild(img4);
icon4.appendChild(button4);
//icon3.appendChild(button3);
iconsDiv.appendChild(icon1);
iconsDiv.appendChild(icon2);
iconsDiv.appendChild(icon3);
iconsDiv.appendChild(icon4);
//brD.appendChild(br);
iconsDiv.appendChild(br);

Object.assign(icon5.style, styleObj);
img5.setAttribute('src', 'download.png');
button5.innerHTML = 'ShifaHaider';
icon5.appendChild(img5);
icon5.appendChild(button5);
Object.assign(icon6.style, styleObj);
img6.setAttribute('src', 'download (1).png');
button6.innerHTML = 'Material-ui';
icon6.appendChild(img6);
icon6.appendChild(button6);
Object.assign(icon7.style, styleObj);
img7.setAttribute('src', 'download (2).png');
button7.innerHTML = 'Google';
icon7.appendChild(img7);
icon7.appendChild(button7);
Object.assign(icon8.style, styleObj);
img8.setAttribute('src', 'map.0407227,16z');
button8.innerHTML = 'Google Maps';
icon8.appendChild(img8);
icon8.appendChild(button8);
//icon7.appendChild(button7);
iconsDiv.appendChild(icon5);
iconsDiv.appendChild(icon6);
iconsDiv.appendChild(icon7);
iconsDiv.appendChild(icon8);
console.log(br);
//secIconD.appendChild(icon5);
//secIconD.appendChild(icon6);
//secIconD.appendChild(icon7);
//secIconD.appendChild(icon8);


//iconsDiv.appendChild(icon4);

Object.assign(siteDiv.style, {
    display: 'inline-block'
});

imgGoogle.setAttribute("src", "google-logo.png");
Object.assign(imgGoogle.style, {
    width: '272px',
    height: '92px',
    paddingTop: '109px',
    //position: 'absolute',
    //left: '469px',
    textAlign: '-webkit-center'
});
mainDiv.appendChild(imgGoogle);

inp.setAttribute('type', 'text');
inp.setAttribute('placeholder', 'Search Google or type a URL');
Object.assign(inp.style, {
    border: 'none',
    //paddingTop: '3px',
    width: '500px',
    outline: 'none'
    //paddingLeft: '12px'

//height: '35px',
    //width: '500px',
    //borderRadius: '30px',
    //paddingLeft: '20px',
    //position: 'absolute',
    //top: '235px',
    //left: '378px',
    //paddingTop: '4px',
});

mic.setAttribute('src', 'download (3).png');

Object.assign(mic.style, {
    width: '23px',
    height: '23px',
    paddingRight: '6px',
    paddingTop: '7px',

});
inpDiv.appendChild(inp);
inpDiv.appendChild(mic);
Object.assign(inpDiv.style, {
    height: '40px',
    width: '500px',
    borderRadius: '30px',
    paddingLeft: '20px',
    //position: 'absolute',
    top: '235px',
    //left: '351px',
    //paddingTop: '2px',
    paddingRight: '10px',
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    textAlign: 'center',
    marginTop: '20px'
    //alignItems: "center"
});

mainDiv.appendChild(inpDiv);

div1.innerHTML = 'Gmail';
div1.setAttribute('onmouseover' , 'mouseOver(this)');
div1.setAttribute('onmouseout' , 'mouseOut(this)');
Object.assign(div1.style, {
    top: '20px',
    position: 'absolute',
    right: '222px',
    fontSize: '13px',
    cursor: 'pointer',
    color: 'rgba(0,0,0,0.87)'
});
siteDiv.appendChild(div1);

div2.innerHTML = 'Images';
div2.setAttribute('onmouseover' , 'mouseOver(this)');
div2.setAttribute('onmouseout' , 'mouseOut(this)');
Object.assign(div2.style, {
    top: '20px',
    position: 'absolute',
    right: '155px',
    fontSize: '13px',
    cursor: 'pointer',
    color: 'rgba(0,0,0,0.87)'
});
siteDiv.appendChild(div2);

apps.setAttribute('src', 'icon.png');
Object.assign(apps.style, {
    width: '20px',
    height: '20px',
    top: '20px',
    position: 'absolute',
    right: '111px',
    cursor: 'pointer'

});
siteDiv.appendChild(apps);

bell.setAttribute('src', 'bell-icon.png');

Object.assign(bell.style, {
    width: '15px',
    height: '15px',
    //top: '20px',
    //position: 'absolute',
    //right: '73px',
    //cursor: 'pointer'

});

Object.assign(bellDiv.style, {
    backgroundColor: 'rgba(0,0,0,.55)',
    fontSize: '12px',
    fontWeight: 'bold',
    lineHeight: '20px',
    textAlign: 'center',
    boxSizing: 'borderBox',
    borderRadius: '50%',
    height: '18px',
    width: '19px',
    top: '20px',
    position: 'absolute',
    right: '73px',
    cursor: 'pointer',
    paddingTop: '2px'
});
bellDiv.appendChild(bell);
siteDiv.appendChild(bellDiv);

img.setAttribute("src", 'photo.jpg');
Object.assign(img.style, {
    width: '30px',
    height: '30px',
    top: '15px',
    position: 'absolute',
    right: '28px',
    borderRadius: '15px',
    cursor: 'pointer'

});
siteDiv.appendChild(img);
Object.assign(settingD.style, {
    borderRadius: '8px',
    bottom: '16px',
    display: 'block',
    height: '28px',
    position: 'fixed',
    right: '16px',
    width: '28px',
    zIndex: '100'
});
settingD.setAttribute('onclick' , 'createCard(this)');
settingI.setAttribute('src', 'download.svg');
settingI.style.width = '17px';
settingI.style.height = '17px';
settingI.style.cursor = 'pointer';

settingD.appendChild(settingI);
mainDiv.appendChild(settingD);

//Object.assign()
mainDiv.appendChild(siteDiv);
function mouseOver(e) {
    e.setAttribute('href' , '');
    e.style.color = 'rgba(0,0,0,0.87)';
}
function mouseOut(e){
    e.removeAttribute('href');
}

mainDiv.appendChild(iconsDiv);
mainDiv.appendChild(secIconD);
Object.assign(body.style, {
    backgroundImage: "url(google-tab.jpg)",
    height: '100%',
    margin: '0',
    //backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    fontFamily: 'arial,sans-serif',
    textAlign: '-webkit-center'
});
body.appendChild(mainDiv);

//background-color: rgba(0,0,0,.55);
