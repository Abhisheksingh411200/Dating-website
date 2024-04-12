//get the data
let users = [
    {
        profilePic:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendinghMassage:7,
        location: "Delhi, India",
        name:"Varsh",
        age:23,
        interests: [{
            icon :`<i class="ri-music-2-fill"></i>`,
            interest: "Music"
        },{
            icon :`<i class="ri-music-2-fill"></i>`,
            interest: "singing"
        }],
        bio:"I love travelling and explore naw places.And i love to do cooking.",
        isFriend : null
    },
    {
        profilePic:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic:"https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendinghMassage:20,
        location: "kolkata, India",
        name:"sonal",
        age:25,
        interests: [{
            icon :`<i class="ri-music-2-fill"></i>`,
            interest:"music"
        },{
            icon:`<i class="ri-play-mini-fill"></i>`,
            interest:"dance"

        }],
        bio:"Looking for an adventure partner. You in?",
        isFriend : null
    },
    {
        profilePic:"https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic:"https://images.unsplash.com/photo-1579493934830-eab45746b51b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendinghMassage:6,
        location: "Japan",
        name:"Meeri",
        age:21,
        interests: [{
            icon:`<i class="ri-play-mini-fill"></i>`,
            interest:"dance"

        },{
            icon:`<i class="ri-live-fill"></i>`,
            interest:"acting"

        }],
        bio:"Pros and cons of dating me: Pro, you wont be single. Con: You be dating me",
        isFriend : null
    },
    {
        profilePic:"https://images.unsplash.com/photo-1496372487738-7b9e5c55ddda?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic:"https://images.unsplash.com/photo-1610630277373-8cb0eb815de0?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendinghMassage:12,
        location: "Bihar, India",
        name:"Anjali",
        age:23,
        interests: [{
            icon :`<i class="ri-music-2-fill"></i>`,
            interest:"Music"
        },{
            icon:`<i class="ri-play-mini-fill"></i>`,
            interest:"dance"

        }],
        bio:"Living my best life, one adventure at a time ",
        isFriend : null
    },
    {
        profilePic:"https://images.unsplash.com/photo-1618165622310-36bcf24c7826?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic:"https://images.unsplash.com/photo-1555788113-484f6cc3335a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendinghMassage:23,
        location: "Helsinki, Fidlane",
        name:"Prity",
        age:19,
        interests: [{
            icon :`<i class="ri-music-2-fill"></i>`,
            interest:"Music"
        },{
            icon:`<i class="ri-play-mini-fill"></i>`,
            interest:"acting"

        }],
        bio:"Living my best life, one adventure at a time ",
        isFriend : null
    },
    {
        profilePic:"https://images.unsplash.com/photo-1599232287252-493bd2835c48?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic:"https://images.unsplash.com/photo-1599232767751-1d93f68b7c09?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendinghMassage:3,
        location: "Moscow, Russia",
        name:"Komal",
        age:23,
        interests: [{
            icon :`<i class="ri-music-2-fill"></i>`,
            interest:"Music"
        },{
            icon:`<i class="ri-play-mini-fill"></i>`,
            interest:"diginer"

        }],
        bio:"Living my best life, one adventure at a time ",
        isFriend : null
    },
    {
        profilePic:"https://images.unsplash.com/photo-1614521911532-0242ffa8ce0e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic:"https://plus.unsplash.com/premium_photo-1664351560991-6a8b7a880bca?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendinghMassage:8,
        location: "London, United Kingdom",
        name:"Aunshu",
        age:26,
        interests: [{
            icon:`<i class="ri-play-mini-fill"></i>`,
            interest:"gym"
        },{
            icon:`<i class="ri-play-mini-fill"></i>`,
            interest:"dance"

        }],
        bio:"Living my best life, one adventure at a time ",
        isFriend : null
    },
];

function select(elem){
    return document.querySelector(elem);
}

let curr = 0;
let isAnimating = false;

function setData(index){
    select(".prfling img").src = users[index].profilePic;
    select(".badge h5").textContent = users[index].pendinghMassage;
    select(".location h3").textContent = users[index].location;
    select(".name h1:nth-child(1)").textContent = users[index].name;
    select(".name h1:nth-child(2)").textContent = users[index].age;

    let clutter = "";
    users[index].interests.forEach(function(interests){
        clutter += ` <div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
        ${interests.icon}<h3 class="text-sm tracking-tighter capitalize">${interests.interest}</h3>
     </div>`
    })
    select(".tags").innerHTML = clutter;

    select(".bio p").textContent = users[index].bio;

}

(function setInitial(){
    select(".maincard img").src = users[curr].displayPic;
    select(".incomingcard img").src = users[curr+1]?.displayPic;

    setData(curr);

    curr = 2;

})();

function imageChange(){
    if(!isAnimating){
        isAnimating = true;
        let tl = gsap.timeline({
          onComplete: function(){
             isAnimating = false;
             let main = select(".maincard");
              let incoming = select(".incomingcard");

              incoming.classList.remove("z-[2]");
             incoming.classList.add("z-[3]");
              incoming.classList.remove("incomingcard");

              main.classList.remove("z-[3]");
               main.classList.add("z-[2]");
              gsap.set( main, {
                 scale:1,
                 opacity:1,
                })
               if(curr === users.length) curr = 0;
               select(".maincard img").src = users[curr].displayPic;
               curr++;
               main.classList.remove("maincard");
                incoming.classList.add("maincard");
                main.classList.add("incomingcard");
            }  
       });
      

      tl.to(".maincard",{
          scale: 1.1,
          opacity:0,
          ease: Circ,
          duration: .9
      },"a")
      .from(".incomingcard",{
          scale: .9,
          opacity:0,
          ease: Circ,
          duration: 1.1
       },"a")
  
    }
}

let deny = select (".deny");
let accept = select(".accept");

deny.addEventListener("click", function(){
    imageChange();
    setData(curr-1);
    gsap.from(".details .element",{
        y : "100%",
        opacity:0,
        stagger: .1,
        ease: Circ,
        duration: .6
    
    })

});

accept.addEventListener("click", function(){
    imageChange();
    setData(curr-1);
    gsap.from(".details .element",{
        y : "100%",
        opacity:0,
        stagger: .1,
        ease: Circ,
        duration: .6
    
    })

});

(function containerCreator(){
    document.querySelectorAll(".element")
    .forEach(function (element){
        let div = document.createElement("div");
        div.classList.add(`${element.classList[1]}container`, 'overflow-hidden');
        div.appendChild(element);
        select(".details").appendChild(div);

    })
})();

