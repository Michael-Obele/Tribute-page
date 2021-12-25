function list(...arr){
    var list = [...arr]
    var newArr = []
    for (var i=0;i<list.length;i++){
        newArr.push(`<tr> <td>${i+1}</td> <td>${list[i]}</td> </tr>`)
    };
    return newArr.join('');
};
(list('Abonnema','Abalama','Abisse','Angulama','Aleleama','Atuka','Angalabio','Adumama','Amosama','Buguma','Bukuma','Bakana','Bakana (old)','Bille','Captain kiri','Cawthrone Channel','Dialafiari ama','Elem Tombia','Elem Kalabari','Elem Ido','Elem Ifoko','Elem Bekinama','Elem Abalama', 'Horsefall ama', 'Harrison ama', 'Ido','Idama', 'Ilelema', 'Ifoko', 'Ipokuma', 'Kula', 'krakrama', 'ke', 'Kien ama', 'Minama', 'Mbiakafiama', 'Ngeribarama',
'Oporoama', 'Obonoma', 'Okpo', 'Owoko', 'Obuama', 'Omekweama', 'Omekwetariama', 'Ogo ama', 'Opubenibo ama', 'Soku', 'Sama',
'Sangama', 'Tema', 'Tombia', 'Udekema','Usokun - Degema'));

/*<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>*/

var btn = document.getElementById('btn');

function visible(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'inline-table') {
      e.style.display = 'none';
    }
    else {
      e.style.display = 'inline-table';
    }
    console.log('clicked');
    return;
  }