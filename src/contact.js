
const ContactPage = (main) => {
   console.log('Contact!!!!');

   const msg1 = document.createElement("p");
   msg1.textContent = "Call us on our number 0118 999 881 999 119 725 3";

   const msg2 = document.createElement("p");
   msg2.textContent = "Or you can just walk in!";


   const map = document.createElement("iframe");
   map.setAttribute("class", "map");
   // map.setAttribute("loading", "lazy");
   // map.loading = "lazy";
   map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.424670498431!2d-0.1607443844592916!3d51.523770317327475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761acf33628211%3A0x445d7677a88322e1!2s221B%20Baker%20St%2C%20Marylebone%2C%20London%20NW1%206XE%2C%20UK!5e0!3m2!1sen!2sae!4v1614686260758!5m2!1sen!2sae";

   main.append(msg1,msg2,map);

   // <iframe src= width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>


}


export {ContactPage};
