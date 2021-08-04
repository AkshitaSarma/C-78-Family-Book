var images= ["Aita.jepg","Bobby Jethai.jpeg","Putty Jethai.jpeg","Deta.jpeg","Maa.jpeg","Bokuli Mama.jpeg","Minati Baa.jpeg","Ritu Baa.jpeg","Ruhi baa.jpeg","Tupu Baa.jpeg","Sunu Baa.jpeg","Misiki.jpeg","Bubsi.jpeg"];
var names= ["Ratna Bhattacharjee (Grandma)","Gayatri Devi Adhikary (Aunt)","Rubby Bhattacharjee (Aunt)","Pradip Kumar Sarma (Father)","Kanta Bhattacharjee (Mother)","Bakul Koch (Uncle)","Minati Biswas (Cousin Sister)","Deerika Adhikary (Cousin Sister)","Rishika Dutta (Cousin Sister)","Richa Adhikary (Cousin Sister)","Evleeka Dutta (Cousin Sister)","Akshita Sarma (Me)","Abhishyanta Sarma (Own Brother)"];
var i= 0;

function Update()
{
    i++; 
    var length_of_array= 13;
    if(i > length_of_array) 
    {
        i= 0;
    }
    var updated_image= images[i];
    var updated_name= names[i];
    document.getElementById("Family_image").src= updated_image;
    document.getElementById("name").src= updated_name;
}