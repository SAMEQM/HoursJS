function page(){

    var hours = document.getElementById('hours');
    var img = document.getElementById('img');
    var footer = document.querySelector('div.foot');
    var main = document.querySelector('div#main');

    var data = new Date();
    var h = data.getHours();
    var m = data.getMinutes();

    if(h >= 0 && h < 10 ){ h = '0' +h; };
    if(m >= 0 && m < 10 ){ m = '0' +m;};

    hours.innerHTML = `${h}:${m}`;

    if (h >= 5 && h <= 12){
        img.src = 'manha.jpeg';
        footer.innerHTML = 'Bom dia';
        document.body.style.background = "#bfe2fc";
    } else if (h > 12 && h < 18){
        img.src = 'tarde.jpeg';
        footer.innerHTML = 'Boa Tarde';
        main.style.background = '#3d3c3c';
        document.body.style.background = '#f7e3bf';
    } else{
        img.src = 'noite.jpeg';
        footer.innerHTML = 'Boa Noite';
        main.style.background = '#000';
        document.body.style.background = '#24508a';
    }

}